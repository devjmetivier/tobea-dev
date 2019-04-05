import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { emojis } from '../../config/emojis';
import { Layout, Article, Wrapper, Button, SectionTitle } from '../components';

const Hero = styled.div``;

const Content = styled.div``;

const IndexPage = ({
  data: {
    allMdx: { edges: postEdges },
  },
  location,
}) => (
  <Layout location={location}>
    <Wrapper>
      <Hero>
        <h1>Hey!</h1>
        <p>I&apos;m Devin.</p>
      </Hero>
      <Content>
        <SectionTitle>Latest Posts</SectionTitle>
        {postEdges.map((post, i) => {
          const { frontmatter, excerpt, timeToRead, fields } = post.node;
          const { title, date, categories } = frontmatter;
          const { slug } = fields;
          return (
            <Article
              key={slug}
              title={title}
              date={date}
              excerpt={excerpt}
              timeToRead={timeToRead}
              emoji={emojis[i]}
              categories={categories}
              slug={slug}
            />
          );
        })}
      </Content>
    </Wrapper>
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
