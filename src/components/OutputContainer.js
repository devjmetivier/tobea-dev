import React from 'react';

const OutputContainer = props => {
  const { children } = props;

  return <div className='output-container'>{children}</div>;
};

export default OutputContainer;
