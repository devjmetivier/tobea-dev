import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { PrevNextWrapper, Spacer, Next, Prev } from './ui';

const PrevNext = ({ next, prev }) => (
  <PrevNextWrapper>
    {prev && (
      <Prev>
        <Link to={prev.fields.slug}>
          <span>&lArr; Previous</span>
          {prev.frontmatter.title}
        </Link>
      </Prev>
    )}

    <Spacer />

    {next && (
      <Next>
        <Link to={next.fields.slug}>
          <span>Next &rArr;</span>
          {next.frontmatter.title}
        </Link>
      </Next>
    )}
  </PrevNextWrapper>
);

export default PrevNext;

PrevNext.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
};

PrevNext.defaultProps = {
  next: null,
  prev: null,
};
