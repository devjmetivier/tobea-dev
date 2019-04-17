import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import DarkMode from './DarkMode';

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
  background: ${props => props.theme.colors.brightGray};
  min-height: 100vh;
`;

const Float = styled.div`
  margin: 8% 0;
  padding: 20px 30px;
  position: relative;
  border-radius: 10px;
  background: ${props => props.theme.colors.porcelain};
  //overflow: hidden;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Layout = ({ children, customSEO, location }) => {
  const buildTime = useBuildTime();

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {!customSEO && <SEO buildTime={buildTime} />}
        <Float>
          <DarkMode />
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
          <Footer />
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
