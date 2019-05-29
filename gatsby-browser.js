import { wrapRootElement as wrap } from './wrap-root-element';

import './assets/css/reboot.min.css';
import './assets/css/main.css';
import './assets/css/react-toggle.css';
import './assets/css/code-block-badge-colors.css';

export const wrapRootElement = wrap;

const defaultOptions = {
  excludePaths: ['/', '/^/post/.+react$'],
  matchStartOfPath: ['post'],
  matchEndOfPath: [],
  height: 4,
  prependToBody: false,
  color: `#B6433B`,
};
// browser API usage: https://www.gatsbyjs.org/docs/browser-apis/#onRouteUpdate
export const onRouteUpdate = (
  { location: { pathname } },
  pluginOptions = {}
) => {
  // merge default options with user defined options in `gatsby-config.js`
  const options = { ...defaultOptions, ...pluginOptions };

  const {
    matchStartOfPath,
    matchEndOfPath,
    excludePaths,
    height,
    prependToBody,
    color,
  } = options;

  function pageProgress() {
    // create progress indicator container and append/prepend to document body
    const node = document.createElement(`div`);
    node.id = `gatsby-plugin-page-progress`;
    // eslint-disable-next-line
    prependToBody
      ? document.body.prepend(node)
      : document.body.append(node);

    // set defaults and grab progress indicator from the DOM
    let scrolling = false;
    const indicator = document.getElementById(`gatsby-plugin-page-progress`);

    // determine width of progress indicator
    const getIndicatorPercentageWidth = (currentPos, totalScroll) => {
      return Math.floor((currentPos / totalScroll) * 100);
    };

    // find the total height of window
    const getScrollHeight = () => {
      // https://javascript.info/size-and-scroll-window#width-height-of-the-document
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    };

    // add throttled listener to update on scroll
    window.addEventListener(`scroll`, () => {
      const currentPos = window.scrollY;
      const { innerHeight } = window;
      const scrollHeight = getScrollHeight();
      const scrollDistance = scrollHeight - innerHeight;

      if (!scrolling) {
        window.requestAnimationFrame(() => {
          const indicatorWidth = getIndicatorPercentageWidth(
            currentPos,
            scrollDistance
          );

          indicator.setAttribute(
            `style`,
            // eslint-disable-next-line
            `width: ${indicatorWidth}%; position: fixed; height: ${height}px; background-color: ${color}; top: 0; left: 0; transition: width 0.25s;`
          );

          scrolling = false;
        });
        scrolling = true;
      }
    });
  }

  if (
    matchStartOfPath.length === 0 &&
    matchEndOfPath.length === 0 &&
    excludePaths.length === 0
  ) {
    pageProgress();
  } else {
    // first check if there are any exclusions
    // if there are exclusions, and there's a match, simply return to skip adding progress indicator

    // set defaults
    let prefixesToMatch = ``;
    let suffixesToMatch = ``;

    // check if matchStartOfPath entries exist
    if (matchStartOfPath.length !== 0) {
      prefixesToMatch = matchStartOfPath.reduce(
        (accumulator, currentValue, i) =>
          i === 0 ? currentValue : `${accumulator}|${currentValue}`
      );
    }

    // check if matchEndOfPath entries exist
    if (matchEndOfPath.length !== 0) {
      suffixesToMatch = matchEndOfPath.reduce((accumulator, currentValue, i) =>
        i === 0 ? currentValue : `${accumulator}|${currentValue}`
      );
    }

    // should match to something like: (/post|/category|/blog|/etc)
    // denoted by the "/" at the beginning of the path
    const reStart = RegExp(`^/(${prefixesToMatch})`, `gm`);
    const matchesStart =
      prefixesToMatch !== `` ? reStart.test(pathname) : false;

    // should match to something like: (post|category|blog|etc)
    // denoted by the ending string of the path with no trailing "/"
    // ex: location.pathname = 'path/to/post/this-is-my-post'
    const reEnd = RegExp(`(${suffixesToMatch})$`, `gm`);
    const matchesEnd = suffixesToMatch !== `` ? reEnd.test(pathname) : false;

    // this is the same as the check directly above, only accounting for a trailing slash
    // ex: location.pathname = '/path/to/post/this-is-my-post/'
    const reEndTrailingSlash = RegExp(`(${suffixesToMatch})\/$`, `gm`);
    const matchesEndTrailingSlash =
      suffixesToMatch !== `` ? reEndTrailingSlash.test(pathname) : false;

    // check to see if the scroll indicator already exists - if it does, remove it
    const indicatorCheck = document.getElementById(
      `gatsby-plugin-page-progress`
    );
    if (indicatorCheck) indicatorCheck.remove();

    if (matchesStart || matchesEnd || matchesEndTrailingSlash) pageProgress();
  }
};
