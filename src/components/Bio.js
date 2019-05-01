import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/images/avatar.jpg';
import { socials } from '../../config';
import { BioStyles } from './ui';

const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Bio = () => (
  <BioStyles>
    <Img className='avatar-img' src={avatar} alt='Devin Metivier' />
    <div>
      <p>
        Personal blog by{' '}
        <a
          href={socials.twitter.link}
          rel='noopener noreferrer'
          target='_blank'
        >
          Devin Metivier
        </a>
      </p>
      <p>I like to share what I learn</p>
    </div>
  </BioStyles>
);

export default Bio;
