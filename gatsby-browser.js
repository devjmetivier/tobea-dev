import { wrapRootElement as wrap } from './wrap-root-element';

import './assets/css/reboot.min.css';
import './assets/css/main.css';
import './assets/css/react-toggle.css';
import './assets/css/code-block-badge-colors.css';

export const wrapRootElement = wrap;

const defaultOptions = {
  includePaths: [{ regex: '^/post' }],
  excludePaths: [],
  height: 3,
  prependToBody: false,
  color: `#663399`,
};
// browser API usage: https://www.gatsbyjs.org/docs/browser-apis/#onRouteUpdate
export const onRouteUpdate = (
  { location: { pathname } },
  pluginOptions = {}
) => {
  // merge default options with user defined options in `gatsby-config.js`
  const options = { ...defaultOptions, ...pluginOptions };

  const { includePaths, excludePaths, height, prependToBody, color } = options;

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

  function checkPaths(val, paths) {
    // if (paths.length === 0) return val;
    // console.log(val);
    // console.log(paths);

    let returnVal = val;
    console.log(val);

    paths.forEach(x => {
      if (returnVal === !val) return;
      const isRegex = typeof x === `object`;

      if (isRegex && new RegExp(x.regex, `gm`).test(pathname))
        returnVal = !returnVal;
      console.log(returnVal);
      if (x === pathname) returnVal = !returnVal;
    });

    console.log(returnVal);
    return returnVal;
  }

  function checkExcludePaths() {
    let continueAfterExclude = true;

    excludePaths.forEach(x => {
      if (continueAfterExclude === false) return;
      const isRegex = typeof x === `object`;

      if (isRegex && new RegExp(x.regex, `gm`).test(pathname))
        continueAfterExclude = false;
      if (x === pathname) continueAfterExclude = false;
    });

    return continueAfterExclude;
  }

  function checkIncludePaths() {
    let match = false;

    includePaths.forEach(x => {
      if (match === true) return;
      const isRegex = typeof x === `object`;

      if (isRegex && new RegExp(x.regex, `gm`).test(pathname)) match = true;
      if (x === pathname) match = true;
    });

    return match;
  }

  // check to see if the scroll indicator already exists - if it does, remove it
  function removeProgressIndicator() {
    const indicatorCheck = document.getElementById(
      `gatsby-plugin-page-progress`
    );
    if (indicatorCheck) indicatorCheck.remove();
  }

  if (!excludePaths.length && !includePaths.length) {
    removeProgressIndicator();
    pageProgress();
  } else if (excludePaths.length && !includePaths.length) {
    // const continueAfterExclude = checkExcludePaths();
    const continueAfterExclude = checkPaths(true, excludePaths);

    removeProgressIndicator();

    if (continueAfterExclude) pageProgress();
  } else {
    // const continueAfterExclude = checkExcludePaths();
    const continueAfterExclude = checkPaths(true, excludePaths);

    removeProgressIndicator();

    if (continueAfterExclude) {
      // const match = checkIncludePaths();
      const match = checkPaths(false, includePaths);
      match && pageProgress();
    }
  }
};
