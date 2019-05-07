import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import syntaxTheme from 'prism-react-renderer/themes/vsDarkPlus';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from '../../config/theme';

import PreWithBadge from './PreWithBadge';

const RE = /{([\d,-]+)}/;

const calculateLinesToHighlight = meta => {
  if (!RE.test(meta)) return () => false;

  const lineNumbers = RE.exec(meta)[1]
    .split(',')
    .map(v => v.split('-').map(ve => parseInt(ve, 10)));

  return index => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    );
    return inRange;
  };
};

const Code = ({ codeString, language, metastring, ...props }) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

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
            typeof window !== 'undefined' &&
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
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });

            if (shouldHighlightLine(i)) {
              lineProps.className = `${lineProps.className} highlight-line`;
            }

            return (
              <div {...lineProps}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </PreWithBadge>
      )}
    </Highlight>
  );
};

export default Code;
