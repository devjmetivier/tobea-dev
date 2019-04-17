import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { Layout, Article, SectionTitle, Bio } from '../components';

import config from '../../config';

const Content = styled.div``;

const Category = ({
  pageContext: { category, emoji },
  data: { allMdx },
  location,
}) => {
  const { edges, totalCount } = allMdx;
  const subline = `${totalCount} post${
    totalCount === 1 ? `` : `s`
  } tagged with "${category}"`;

  const re = /^\/(categories)\//gm;
  const isCategoryPage = re.test(location.pathname);
  console.log(isCategoryPage);

  return (
    <Layout location={location}>
      <main>
        <Helmet title={`Category: ${category} | ${config.siteTitle}`} />
        <Content>
          <SectionTitle>Category &ndash; {category}</SectionTitle>
          {subline} (See <Link to='/categories'>all categories</Link>)
          {edges.map(post => (
            <Article
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
              timeToRead={post.node.timeToRead}
              slug={post.node.fields.slug}
              categories={post.node.frontmatter.categories}
              key={post.node.fields.slug}
              isCategoryPage={isCategoryPage}
              emoji={emoji}
            />
          ))}
        </Content>

        <Bio />
      </main>
    </Layout>
  );
};

export default Category;

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export const postQuery = graphql`
  query CategoryPage($category: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
