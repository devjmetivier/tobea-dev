import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Tag from './Tag';

const Post = styled.article``;

const Title = styled.h2``;

const Excerpt = styled.p`
  margin-top: 0.5rem;
`;

const Article = ({ title, date, excerpt, slug, timeToRead, categories }) => {
  return (
    <Post>
      <Title>
        <Link to={slug}>{title}</Link>
      </Title>
      {date} &mdash; {timeToRead} Min Read &mdash;{' '}
      {categories.map((cat, i) => (
        <React.Fragment key={cat}>
          <Link to={`/categories/${kebabCase(cat)}`}>
            <Tag style={{ marginLeft: i === 0 ? '0' : '4px' }}>{cat}</Tag>
          </Link>
        </React.Fragment>
      ))}
      <Excerpt>{excerpt}</Excerpt>
    </Post>
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
};
