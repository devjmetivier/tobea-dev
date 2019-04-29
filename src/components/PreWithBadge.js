import React, { useRef, useState } from 'react';

// TODO: Make badge more fancy and with copy icon

const PreWithBadge = ({ className, children, style }) => {
  const reg = /language-(.+)/im;
  const [origin, badge] = className.match(reg);

  const content = useRef(null);
  const [badgeMessage, updateBadgeMessage] = useState(badge);

  const copyMessage = m => {
    updateBadgeMessage(m);
    setTimeout(() => {
      updateBadgeMessage(badge);
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
