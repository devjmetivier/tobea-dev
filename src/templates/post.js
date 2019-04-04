import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import { Layout, Wrapper, Tag, SEO, PrevNext } from '../components';

const Title = styled.h1`
  text-align: center;
`;

const PostInfo = styled.div`
  text-align: center;
`;

const PostTags = styled.div`
  text-align: center;
`;

const PostContent = styled.div``;

const Post = ({
  pageContext: { slug, prev, next },
  data: { mdx: postNode },
  location,
}) => {
  const post = postNode.frontmatter;

  return (
    <Layout customSEO location={location}>
      <SEO postPath={slug} postNode={postNode} article />
      <Wrapper>
        <Title>{post.title}</Title>

        <PostInfo>
          {post.date} &mdash; {postNode.timeToRead} Min Read
        </PostInfo>

        <PostTags>
          {post.categories.map((cat, i) => (
            <Fragment key={cat}>
              <Link to={`/categories/${kebabCase(cat)}`}>
                <Tag style={{ marginLeft: i === 0 ? '0' : '4px' }}>{cat}</Tag>
              </Link>
            </Fragment>
          ))}
        </PostTags>

        <PostContent>
          <MDXRenderer>{postNode.code.body}</MDXRenderer>
        </PostContent>

        <PrevNext prev={prev} next={next} />
      </Wrapper>
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
        date(formatString: "MM/DD/YYYY")
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
