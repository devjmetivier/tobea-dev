import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      {posts.map(({ node }) => {
        const { title, author } = node.frontmatter;
        return (
          <div key={node.id}>
            <header>
              <div>{title}</div>
              <div>Posting By {author}</div>
            </header>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>View Article</Link>
          </div>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            author
          }
        }
      }
    }
  }
`;
