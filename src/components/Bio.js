import React from 'react';
// TODO: Get higher resolution profile picture
import profilePic from '../assets/profile-pic.jpg';

export default function Bio() {
  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      <img
        src={profilePic}
        alt='Devin Metivier'
        style={{
          marginBottom: 0,
          borderRadius: `50%`,
        }}
      />
      <p style={{ maxWidth: 310 }}>
          Personal blog by{` `}
        <a href='https://mobile.twitter.com/devjmetivier'>Devin Metivier</a>.{` `}
      </p>
    </div>
  );
}
