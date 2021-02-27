import * as React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';

import { Anchor, Container, Header, Navigation } from '.';

export interface ILayout {
  title?: string;
}

export const Layout: React.FC<ILayout> = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <link href='https://fonts.gstatic.com' rel='preconnect' />
        <link
          href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,500;0,800;1,300;1,500;1,800&display=swap'
          rel='stylesheet'
        />
        <title>{title ? `${title} | To Be A Dev` : 'To Be A Dev'}</title>
      </Helmet>

      <Container>
        <Header>
          <Navigation>
            <Link href='/'>
              <Anchor>Home</Anchor>
            </Link>
            <Link href='/blog'>
              <Anchor>Blog</Anchor>
            </Link>
          </Navigation>
        </Header>

        {children}
      </Container>
    </>
  );
};
