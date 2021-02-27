/* eslint-disable react/display-name */
import fs from 'fs';
import path from 'path';

import { MDXProviderComponents } from '@mdx-js/react';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';

import { Heading, Text } from '../../components';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

const components: MDXProviderComponents = {
  p: Text,
  h1: (props) => <Heading as='h1' size='h1' {...props} />,
  h2: (props) => <Heading as='h2' size='h2' {...props} />,
  h3: (props) => <Heading as='h3' size='h3' {...props} />,
  h4: (props) => <Heading as='h4' size='h4' {...props} />,
  h5: (props) => <Heading as='h5' size='h5' {...props} />,
  h6: (props) => <Heading as='h6' size='h6' {...props} />,
};

interface IBlogPage {
  source: MdxRemote.Source;
}

export default function BlogPage({ source }: IBlogPage) {
  const content = hydrate(source, { components });

  return <main>{content}</main>;
}

interface IStaticProps {
  params: { slug: string };
}

export const getStaticProps = async ({ params }: IStaticProps) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
