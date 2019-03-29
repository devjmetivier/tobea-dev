import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Subline from './Subline';

const Post = styled.article``;

const Title = styled.h2``;

const Excerpt = styled.p``;

const Article = ({ title, date, excerpt, slug, timeToRead, categories }) => {
  return (
    <Post>
      <Title>
        <Link to={slug}>{title}</Link>
      </Title>
      <Subline>
        {date} &mdash; {timeToRead} Min Read &mdash; In{` `}
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!!i && `, `}
            <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
          </React.Fragment>
        ))}
      </Subline>
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
