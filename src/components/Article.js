import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Tag from './Tag';
import useDateFormat from '../hooks/useDateFormat';

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
      {emoji && timeToRead < 9 ? emoji.repeat(timeToRead) : `${timeToRead} min`}{' '}
      <p style={{ margin: '.5rem 0 0 0' }}>{excerpt}</p>
      <div style={{ margin: '.25rem 0 1rem 0' }}>
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!isCategoryPage && (
              <>
                <Tag index={i}>
                  <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
                </Tag>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
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
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  isCategoryPage: PropTypes.bool,
  emoji: PropTypes.string.isRequired,
};

Article.defaultProps = {
  isCategoryPage: false,
};
