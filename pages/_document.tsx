import * as React from 'react';
import NextDocument, { DocumentContext } from 'next/document';

import { css } from '../stitches.config';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    try {
      let extractedStyles: string[] | undefined;
      ctx.renderPage = () => {
        const { styles, result } = css.getStyles(originalRenderPage);
        extractedStyles = styles;
        return result;
      };

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}

            {extractedStyles?.map((content, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <style dangerouslySetInnerHTML={{ __html: content }} key={index} />
            ))}
          </>
        ),
      };
      // eslint-disable-next-line no-empty
    } finally {
    }
  }
}
