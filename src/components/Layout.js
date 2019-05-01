import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from './DarkModeToggle';

import SEO from './SEO';
import Footer from './Footer';
import theme from '../../config/theme';
import useBuildTime from '../hooks/useBuildTime';
import { FloatStyles, LayoutWrapper, HeaderStyles } from './ui';

const Layout = ({ children, customSEO, location }) => {
  const buildTime = useBuildTime();
  const darkMode = useDarkMode(false);
  const currentTheme = darkMode.value ? theme.dark : theme.light;

  return (
    <ThemeProvider theme={currentTheme}>
      {/* <ThemeProvider theme={darkMode.value ? theme.dark : theme.light}> */}
      <LayoutWrapper>
        {!customSEO && <SEO buildTime={buildTime} />}
        <FloatStyles className='layout-float'>
          <DarkModeToggle />
          <HeaderStyles>
            {location.pathname === `/` ? (
              <h1>
                <Link to='/'>To Be A Dev</Link>
              </h1>
            ) : (
              <h3>
                <Link to='/'>To Be A Dev</Link>
              </h3>
            )}
          </HeaderStyles>
          {children}
          <Footer />
        </FloatStyles>
      </LayoutWrapper>
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
