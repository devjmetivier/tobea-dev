import React from 'react';
import styled from 'styled-components';

const TagStyles = styled.small`
  & > a {
    margin-left: ${props => (props.index === 0 ? '0' : '4px')};
    padding: 2px 4px;
    text-decoration: none;
    border-radius: 2px;
    box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);
    color: ${props => props.theme.palette.white};
    &:hover {
      text-decoration: none;
      color: ${props => props.theme.palette.white};
    }
  }
`;

const Tag = props => (
  <TagStyles className='tag' index={props.index}>
    {props.children}
  </TagStyles>
);

export default Tag;
