import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { PrevNextWrapper, Spacer, Next, Prev } from './ui';

const PrevNext = ({ next, prev }) => (
  <PrevNextWrapper>
    {prev && (
      <Prev>
        <Link to={prev.fields.slug} title={prev.frontmatter.title}>
          <span>&lArr; Previous</span>
          {prev.frontmatter.title}
        </Link>
      </Prev>
    )}

    <Spacer />

    {next && (
      <Next>
        <Link to={next.fields.slug} title={next.frontmatter.title}>
          <span>Next &rArr;</span>
          {next.frontmatter.title}
        </Link>
      </Next>
    )}
  </PrevNextWrapper>
);

export default PrevNext;

PrevNext.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({ title: PropTypes.string.isRequired })
      .isRequired,
    fields: PropTypes.shape({ slug: PropTypes.string.isRequired }),
  }),
  prev: PropTypes.shape({
    frontmatter: PropTypes.shape({ title: PropTypes.string.isRequired })
      .isRequired,
    fields: PropTypes.shape({ slug: PropTypes.string.isRequired }),
  }),
};

PrevNext.defaultProps = {
  next: null,
  prev: null,
};
