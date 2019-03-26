import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/Image';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to='/hello-world/'>Go to Hello World!</Link>
  </Layout>
);

export default IndexPage;
