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

const Button = styled.div`
  & > a {
    padding: 5px 12px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    border-radius: 3px;
    background: ${props => props.theme.uiColors.info};
    color: ${props => props.theme.colors.white};
    &:hover {
      text-decoration: none;
      color: ${props => props.theme.colors.white};
    }
  }
`;

const Prev = styled(Button)``;

const Next = styled(Button)`
  text-align: right;
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
