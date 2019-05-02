import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import { Layout, Tag, SEO, PrevNext, Bio } from '../components';
import { PostTags, PostInfo, PostContent, PostTitle } from '../components/ui';
import useDateFormat from '../hooks/useDateFormat';

const Post = ({
  pageContext: { slug, prev, next, emoji },
  data: { mdx: postNode },
  location,
}) => {
  const post = postNode.frontmatter;

  return (
    <Layout customSEO location={location}>
      <SEO postPath={slug} postNode={postNode} article />
      <main>
        <PostTitle>{post.title}</PostTitle>

        <PostInfo>
          {useDateFormat(post.date)} &mdash; {emoji.repeat(postNode.timeToRead)}
        </PostInfo>

        <PostTags>
          {post.categories.map((cat, i) => (
            <Fragment key={cat}>
              <Tag index={i}>
                <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
              </Tag>
            </Fragment>
          ))}
        </PostTags>

        <PostContent>
          <MDXRenderer>{postNode.code.body}</MDXRenderer>
        </PostContent>

        <PrevNext prev={prev} next={next} />

        <Bio />
      </main>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

Post.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
};

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      excerpt
      frontmatter {
        title
        date
        categories
      }
      timeToRead
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
    }
  }
`;
