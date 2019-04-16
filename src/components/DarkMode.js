import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';
import Toggle from 'react-toggle';

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
        // TODO: change icons to images or font awesome icons
        icons={{
          checked: '☾',
          unchecked: '☀',
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
