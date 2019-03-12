import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const footLinks = [
  `https://mobile.twitter.com/devjmetivier,Twitter`,
  `https://github.com/dmetivier,Github`,
  `https://github.com/dmetivier/tobea-dev,Source`,
];

export default function Layout(props) {
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link to='/'>
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3>
        <Link to='/'>{title}</Link>
      </h3>
    );
  }
  return (
    <Container>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <div>
          &copy;
          {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
        <div>
          {footLinks.map((link) => {
            const arr = link.split(`,`);
            return <a href={arr[0]}>{arr[1]}</a>;
          })}
        </div>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 70rem;
`;
