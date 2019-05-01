import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';
import Toggle from 'react-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeStyles = styled.div`
  position: absolute;
  top: 22px;
  right: 30px;
`;

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <DarkModeStyles darkMode={darkMode.value}>
      <Toggle
        className='dark-toggle'
        defaultChecked={darkMode.value}
        icons={{
          checked: <FontAwesomeIcon icon={faMoon} />,
          unchecked: <FontAwesomeIcon icon={faSun} />,
        }}
        onChange={darkMode.toggle}
      />
    </DarkModeStyles>
  );
};

export default DarkModeToggle;
