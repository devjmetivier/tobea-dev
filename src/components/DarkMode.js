import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';
import Toggle from 'react-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeStyled = styled.div`
  position: absolute;
  top: 22px;
  right: 30px;
`;

const DarkMode = () => {
  const darkMode = useDarkMode(false);

  return (
    <DarkModeStyled darkMode={darkMode.value}>
      <Toggle
        className='dark-toggle'
        defaultChecked={darkMode.value}
        icons={{
          checked: <FontAwesomeIcon icon={faMoon} />,
          unchecked: <FontAwesomeIcon icon={faSun} />,
        }}
        onChange={darkMode.toggle}
      />
      {/* <button type='button' onClick={darkMode.disable}> */}
      {/*  ☀ */}
      {/* </button> */}
      {/* <button type='button' onClick={darkMode.enable}> */}
      {/*  ☾ */}
      {/* </button> */}
    </DarkModeStyled>
  );
};

export default DarkMode;
