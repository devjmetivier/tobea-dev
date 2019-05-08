const _ = require('lodash');
const { emojis } = require('./config/emojis');

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  let slug;

  if (node.internal.type === 'Mdx') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    }
    createNodeField({ node, name: 'slug', value: `/post${slug}` });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve('./src/templates/post.js');
  const categoryTemplate = require.resolve('./src/templates/category.js');

  const result = await wrapper(
    graphql(`
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                categories
              }
            }
          }
        }
      }
    `)
  );

  const posts = result.data.allMdx.edges;

  const reverseEmojiOrder = index => posts.length - 1 - index;

  posts.forEach((edge, i) => {
    const next = i === 0 ? null : posts[i - 1].node;
    const prev = i === posts.length - 1 ? null : posts[i + 1].node;

    createPage({
      path: edge.node.fields.slug,
      component: postTemplate,
      context: {
        slug: edge.node.fields.slug,
        prev,
        next,
        emoji: emojis[reverseEmojiOrder(i)],
      },
    });
  });

  const categorySet = new Set();

  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.categories')) {
      edge.node.frontmatter.categories.forEach(cat => {
        categorySet.add(cat);
      });
    }
  });

  const categories = Array.from(categorySet);

  categories.forEach((category, i) => {
    createPage({
      path: `/categories/${_.kebabCase(category)}`,
      component: categoryTemplate,
      context: {
        category,
        emoji: emojis[i],
      },
    });
  });
};
