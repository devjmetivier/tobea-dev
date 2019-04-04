import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import { socials } from '../../config';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import theme from '../../config/theme';
import useBuildTime from '../hooks/useBuildTime';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: ${props => props.theme.light.bg};
`;

const Float = styled.div`
  margin: 8% 0;
  padding: 20px 30px;
  position: relative;
  border-radius: 10px;
  background: ${props => props.theme.light.float};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Circle = styled.div`
  position: absolute;
  top: -25px;
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  border: 7px solid ${props => props.theme.light.accent};
  border-radius: 50px;
  background: transparent;
`;

const Layout = ({ children, customSEO, location }) => {
  const buildTime = useBuildTime();

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {!customSEO && <SEO buildTime={buildTime} />}
        <Float>
          <Link to='/'>
            <Circle />
          </Link>
          <Header>
            {location.pathname === `/` ? (
              <h1>
                <Link to='/'>To Be A Dev</Link>
              </h1>
            ) : (
              <h3>
                <Link to='/'>To Be A Dev</Link>
              </h3>
            )}
          </Header>
          {children}
          <Footer>
            <div>
              Licensed under{' '}
              <a href='https://creativecommons.org/licenses/by-sa/4.0/'>
                Creative Commons
              </a>{' '}
              &mdash;{' '}
              {socials.map((social, i) => (
                <Fragment>
                  {i === 0 ? '' : ' &middot; '}
                  <a href={social.link}>{social.name}</a>
                </Fragment>
              ))}
            </div>
            <div>
              <span>Last build: {buildTime}</span>
            </div>
          </Footer>
        </Float>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
};

Layout.defaultProps = {
  customSEO: false,
};
