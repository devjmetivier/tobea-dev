import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';

import { Layout, Header, SectionTitle } from '../components';
import config from '../../config';

const Content = styled.div``;

const Title = styled.h3``;

const Category = ({
  data: {
    allMdx: { group },
  },
  location,
}) => (
  <Layout location={location}>
    <main>
      <Helmet title={`Categories | ${config.siteTitle}`} />
      <Content>
        <SectionTitle>Categories</SectionTitle>
        {group.map(category => (
          <Title key={category.fieldValue}>
            <Link to={`/categories/${kebabCase(category.fieldValue)}`}>
              {category.fieldValue}
            </Link>
            {` `}({category.totalCount})
          </Title>
        ))}
      </Content>
    </main>
  </Layout>
);

export default Category;

Category.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.array.isRequired,
    }),
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export const postQuery = graphql`
  query CategoriesPage {
    allMdx {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`;
