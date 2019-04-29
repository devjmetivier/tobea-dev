import React, { useRef, useState } from 'react';

const PreWithBadge = ({ className, children, style }) => {
  const reg = /language-(.+)/im;
  const [origin, badge] = className.match(reg);

  const content = useRef(null);
  const [badgeMessage, setBadgeMessage] = useState(badge);

  const copyMessage = m => {
    setBadgeMessage(m);
    setTimeout(() => {
      setBadgeMessage(badge);
    }, 2000);
  };

  const copyPreContent = () => {
    const { innerText } = content.current;
    navigator.clipboard
      .writeText(innerText)
      .then(() => copyMessage('Copied'), () => copyMessage('Error'));
  };

  return (
    <>
      <div className={`copy-code ${origin}`}>
        <button
          className={badgeMessage.toLowerCase()}
          type='button'
          onClick={copyPreContent}
        >
          {badgeMessage}
        </button>
      </div>
      <pre ref={content} className={className} style={style}>
        {children}
      </pre>
    </>
  );
};

export default PreWithBadge;
