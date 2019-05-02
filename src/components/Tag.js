import React from 'react';
import PropTypes from 'prop-types';
import { TagStyles } from './ui';

const Tag = props => {
  const { index, children } = props;

  return (
    <TagStyles className='tag' index={index}>
      {children}
    </TagStyles>
  );
};

export default Tag;

Tag.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
