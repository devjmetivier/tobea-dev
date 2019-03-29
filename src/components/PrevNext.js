import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div``;

const Prev = styled.div``;

const Next = styled.div``;

const PrevNext = ({ next, prev }) => (
  <Wrapper>
    {prev && (
      <Prev>
        <span>Previous</span>
        <Link to={prev.fields.slug}>{prev.frontmatter.title}</Link>
      </Prev>
    )}

    {next && (
      <Next>
        <span>Next</span>
        <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
      </Next>
    )}
  </Wrapper>
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
