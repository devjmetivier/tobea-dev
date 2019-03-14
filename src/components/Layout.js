import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

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
        <Link to='/'>{title}</Link>
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
      <Header>
        {header}
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label htmlFor='mode'>
              <input
                type='checkbox'
                id='mode'
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />
            </label>
          )}
        </ThemeToggler>
      </Header>
      <main>{children}</main>
      <Footer>
        <div>
          <a
            rel='license'
            href='http://creativecommons.org/licenses/by-sa/4.0/'
          >
            <img
              alt='Creative Commons License'
              style={{ borderWidth: 0 }}
              src='https://i.creativecommons.org/l/by-sa/4.0/80x15.png'
            />
          </a>{' '}
          Built with <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
        <div>
          {footLinks.map(link => {
            const arr = link.split(`,`);
            return <a href={arr[0]}>{arr[1]}</a>;
          })}
        </div>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 70rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  label {
    margin-top: 1.5rem;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;

  div:last-of-type {
    a {
      margin-left: 10px;
    }
  }
`;
