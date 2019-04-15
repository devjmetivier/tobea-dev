import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDarkPlus';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const Code = ({ codeString, language, ...props }) => {
  if (props[`react-live`]) {
    return (
      <LiveProvider
        code={codeString}
        theme={theme}
        language={language}
        noInline
      >
        <LiveEditor className='live-editor' />
        <LiveError />
        <LivePreview className='live-preview' />
      </LiveProvider>
    );
  }

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
