import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Bio } from '../components';

const SoiledIt = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    font-size: 5rem;
  }
`;

const NotFound = ({ location }) => {
  return (
    <Layout location={location}>
      <SoiledIt>
        <h2>Page Doesn't Exist</h2>
        <span>😢</span>
        <h2>Doin' A Sad...</h2>
      </SoiledIt>
      <Bio />
    </Layout>
  );
};

export default NotFound;

NotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
