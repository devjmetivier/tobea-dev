import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Prev = styled.div`
  & > a {
    display: flex;
    flex-flow: column nowrap;
  }
`;

const Next = styled.div`
  text-align: right;
  & > a {
    display: flex;
    flex-flow: column nowrap;
  }
`;

const PrevNext = ({ next, prev }) => (
  <Wrapper>
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
