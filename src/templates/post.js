import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import { Layout, Tag, SEO, PrevNext, Bio } from '../components';
import useDateFormat from '../hooks/useDateFormat';

const Title = styled.h1`
  text-align: center;
`;

const PostInfo = styled.div`
  text-align: center;
`;

const PostTags = styled.div`
  margin: 0.5rem 0 1rem 0;
  text-align: center;
`;

const PostContent = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    &:hover [aria-label*='permalink'] {
      visibility: visible;
      opacity: 1;
    }
  }

  [aria-label*='permalink'] {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 4px;
    position: absolute;
    top: 0;
    right: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
  }
`;

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
        <Title>{post.title}</Title>

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
  location: PropTypes.object.isRequired,
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
