/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Link from 'next/link';

import { getAllPosts } from '../../lib/api';
import { Anchor, Text } from '../../components';

interface IBlogIndex {
  allPosts: {
    title: string;
    slug: string;
    tags: string[];
  }[];
}

const BlogIndex: React.FC<IBlogIndex> = ({ allPosts }) => {
  return (
    <>
      {allPosts.map((post) => (
        <React.Fragment key={post.slug}>
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <Anchor>{post.title}</Anchor>
          </Link>
          <Text>{post.tags.map((tag, i) => (i === post.tags.length - 1 ? tag : `${tag}, `))}</Text>
        </React.Fragment>
      ))}
    </>
  );
};

export default BlogIndex;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'tags', 'title']);

  return {
    props: { allPosts },
  };
};
