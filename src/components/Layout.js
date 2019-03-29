import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import SEO from './SEO';
import Footer from './Footer';
import theme from '../../config/theme';
import useBuildTime from '../hooks/useBuildTime';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Layout = ({ children, customSEO }) => {
  const buildTime = useBuildTime();

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {!customSEO && <SEO buildTime={buildTime} />}
        {children}
        <Footer>
          &copy; 2019 by John Doe. All rights reserved.
          <br />
          <span>Last build: {buildTime}</span>
        </Footer>
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
