import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/images/avatar.jpg';
import { socials } from '../../config';

const BioStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 1rem 0;

  & > div {
    margin-left: 1rem;
  }

  p {
    margin: 0;
  }
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.carmine};
`;

const Bio = () => (
  <BioStyled>
    <Img src={avatar} alt='Devin Metivier' />
    <div>
      <p>
        Personal Blog by{' '}
        <a href={socials[0].link} rel='noopener noreferrer' target='_blank'>
          Devin Metivier
        </a>
      </p>
      <p>I like to share what I learn 😘</p>
    </div>
  </BioStyled>
);

export default Bio;
