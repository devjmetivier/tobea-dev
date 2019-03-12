import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function BlogIndex(props) {
  const { data, location } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title='All posts'
        keywords={[`blog`, `javascript`, `react`]}
      />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}{node.frontmatter.updated && ` - `}</small>
            <Updated>{node.frontmatter.updated && `Updated: ${node.frontmatter.updated}`}</Updated>
            {/*TODO: Add a 'short' description field for the top of all MD files and add it to index*/}
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        );
      })}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            updated(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;

const Updated = styled.small`
  background: #000;
  color: #fff;
`;
