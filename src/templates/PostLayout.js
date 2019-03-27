import React from 'react';
import { MDXProvider } from '@mdx-js/tag';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';

const PostLayout = ({ children, pageContext }) => {
  const { title, author, date } = pageContext.frontmatter;
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        <header>
          <h1>{title}</h1>
          <span>Author: {author}</span>
          <time>Date: {date}</time>
        </header>
        <MDXProvider>{children}</MDXProvider>
      </article>
      <p>{JSON.stringify(pageContext)}</p>
    </Layout>
  );
};

export default PostLayout;
