import React from 'react';
import styled from 'styled-components';

const Pre = styled.pre`
  position: relative;
  &:before {
    content: '${props => props.badge}';
    position: absolute;
    top: 0;
    right: 2rem;
    text-transform: uppercase;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const PreWithBadge = ({ className, children, style }) => {
  console.group();
  console.log(className);
  console.log(children);
  console.log(style);
  console.groupEnd();
  const reg = /language-(.+)/im;
  const [orig, badge] = className.match(reg);

  return (
    <Pre className={className} style={style} badge={badge}>
      {children}
    </Pre>
  );
};

export default PreWithBadge;
