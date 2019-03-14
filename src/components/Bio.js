import React from 'react';
import styled from 'styled-components';
// TODO: Get higher resolution profile picture
import profilePic from '../assets/images/profile-pic.jpg';

export default function Bio() {
  return (
    <BioStyles>
      <img src={profilePic} alt='Devin Metivier' />
      <p>
        Personal blog by{` `}
        <a href='https://mobile.twitter.com/devjmetivier'>Devin Metivier</a>.
        {` `}
      </p>
    </BioStyles>
  );
}

const BioStyles = styled.div`
  display: flex;
  img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }
`;
