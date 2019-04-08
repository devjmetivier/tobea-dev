import { wrapRootElement as wrap } from './wrap-root-element';

import './assets/css/reboot.min.css';
import './assets/css/main.css';
import theme from './config/theme';

export const wrapRootElement = wrap;

// TODO: Make PR to plugin author, and/or consider publishing own plugin
// https://github.com/barrymcgee/gatsby-plugin-scroll-indicator
const defaultOptions = {
  applyToPrefix: ['post'],
  color: theme.colors.carmine,
};

export const onRouteUpdate = (
  { location: { pathname } },
  pluginOptions = {}
) => {
  // Merge default options with user defined options in `gatsby-config.js`
  const options = { ...defaultOptions, ...pluginOptions };

  // grab array of prefixes to apply progress to and make a new string for the RegExp
  const prefixesToMatch = options.applyToPrefix.reduce(
    (accumulator, currentValue, i) =>
      i === 0 ? currentValue : `${accumulator}|${currentValue}`
  );

  const re = RegExp(`^/(${prefixesToMatch})`, `gm`);
  const matches = re.test(pathname);

  // check to see if the scroll indicator already exists
  const indicatorCheck = document.getElementById(
    'gatsby-plugin-scroll-indicator'
  );
  if (indicatorCheck) indicatorCheck.remove();

  if (matches) {
    // Create indicator container and append to document body
    const node = document.createElement(`div`);
    node.id = `gatsby-plugin-scroll-indicator`;
    document.body.append(node);

    let scrolling = false;
    const indicator = document.getElementById('gatsby-plugin-scroll-indicator');

    // Determine width of scroll indicator
    const getIndicatorPercentageWidth = (currentPos, totalScroll) => {
      return Math.floor((currentPos / totalScroll) * 100);
    };

    // Find the total height of scrolling window
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

    // Add throttled listener to update on scroll
    window.addEventListener('scroll', function() {
      const currentPos = window.scrollY;
      const { innerHeight } = window;
      const scrollHeight = getScrollHeight();
      const scrollDistance = scrollHeight - innerHeight;
      if (!scrolling) {
        window.requestAnimationFrame(function() {
          const indicatorWidth = getIndicatorPercentageWidth(
            currentPos,
            scrollDistance
          );
          indicator.setAttribute(
            'style',
            `width: ${indicatorWidth}%;position: fixed;height: 3px;background-color: ${
              options.color
            };top: 0;left: 0;transition:width 0.25s`
          );
          scrolling = false;
        });
        scrolling = true;
      }
    });
  }
};
