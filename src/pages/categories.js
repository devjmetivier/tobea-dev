import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import { Layout, Bio } from '../components';
import config from '../../config';

const Category = ({
  data: {
    allMdx: { group },
  },
  location,
}) => (
  <Layout location={location}>
    <main>
      <Helmet title={`Categories | ${config.siteTitle}`} />
      <div>
        <h2 style={{ textAlign: 'center' }}>Categories</h2>
        {group.map(category => (
          <h3 key={category.fieldValue}>
            <Link to={`/categories/${kebabCase(category.fieldValue)}`}>
              {category.fieldValue}
            </Link>
            {` `}({category.totalCount})
          </h3>
        ))}
      </div>

      <Bio />
    </main>
  </Layout>
);

export default Category;

Category.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
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
