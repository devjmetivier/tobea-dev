import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import syntaxTheme from 'prism-react-renderer/themes/vsDarkPlus';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from '../../config/theme';

import PreWithBadge from './PreWithBadge';

const Code = ({ codeString, language, ...props }) => {
  if (props[`react-live`]) {
    return (
      <LiveProvider
        code={codeString}
        theme={syntaxTheme}
        language={language}
        noInline
      >
        <LiveEditor
          className='live-editor'
          disabled={
            window.matchMedia(`(max-width: ${theme.sizes.tablet}px)`).matches
          }
        />
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
      theme={syntaxTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <PreWithBadge className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </PreWithBadge>
      )}
    </Highlight>
  );
};

export default Code;
