import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreativeCommons,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { socials } from '../../config';
import { FooterStyles } from './ui';
import useBuildTime from '../hooks/useBuildTime';

const Footer = () => {
  const buildTime = useBuildTime();

  return (
    <FooterStyles>
      <div className='badges'>
        <a
          href='https://creativecommons.org/licenses/by-sa/4.0/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faCreativeCommons} />
        </a>{' '}
        {` ${String.fromCharCode(183)} `}
        <a
          href={socials.twitter.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        {` ${String.fromCharCode(183)} `}
        <a href={socials.github.link} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        {` ${String.fromCharCode(183)} `}
        <a href={socials.repo.link} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faBug} />
        </a>
      </div>

      <div>
        <span>Last build: {buildTime}</span>
      </div>
    </FooterStyles>
  );
};

export default Footer;
