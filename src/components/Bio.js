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
        <br />
        ∠( ᐛ 」∠)＿
      </p>
    </BioStyles>
  );
}

const BioStyles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    margin-right: 1rem;
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  p {
    margin: 0;
  }
`;
