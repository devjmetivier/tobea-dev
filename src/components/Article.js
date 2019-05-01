import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Tag from './Tag';
import useDateFormat from '../hooks/useDateFormat';

const Excerpt = styled.p`
  margin-top: 0.5rem;
`;

const Article = ({
  title,
  date,
  excerpt,
  slug,
  timeToRead,
  categories,
  emoji,
  isCategoryPage,
}) => {
  return (
    <article>
      <h2>
        <Link to={slug}>{title}</Link>
      </h2>
      {useDateFormat(date)} &mdash;{' '}
      {emoji ? emoji.repeat(timeToRead) : `${timeToRead} min`}{' '}
      {categories.map((cat, i) => (
        <React.Fragment key={cat}>
          {!isCategoryPage && (
            <>
              {i === 0 && `${String.fromCharCode(8212)} `}
              <Tag index={i}>
                <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
              </Tag>
            </>
          )}
        </React.Fragment>
      ))}
      <Excerpt>{excerpt}</Excerpt>
    </article>
  );
};

export default Article;

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
  isCategoryPage: PropTypes.bool.isRequired,
};
