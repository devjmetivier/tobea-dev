import { wrapRootElement as wrap } from './wrap-root-element';

import './assets/css/reboot.min.css';
import './assets/css/main.css';

export const wrapRootElement = wrap;

export const onClientEntry = (whatsThis, pluginOptions = {}) => {
  console.log("it's alive");
  console.log(whatsThis, pluginOptions);
};
