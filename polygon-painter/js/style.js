/**
 * @since 2016-01-06 11:14
 * @author vivaxy
 */
import canvas from './element/canvas.js';
import setStyle from './common/set-style.js';
import { controls } from './element/controls.js';

let setSize = (element, width, height) => {

  let PX = 'px';

  return setStyle(element, {
    width: width + PX,
    height: height + PX,
  });

};

let setAttribute = (element, size) => {

  element.width = size;
  element.height = size;

};

let style = () => { // eslint-disable-line max-statements

  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let canvasSize = windowHeight;

  if (windowWidth < windowHeight) {
    canvasSize = windowWidth;
  }

  let controlsWidth = windowWidth - canvasSize;
  let controlsHeight = windowHeight - canvasSize;

  if (windowWidth < windowHeight) {
    controlsWidth = canvasSize;
  } else {
    controlsHeight = canvasSize;
  }

  setSize(controls, controlsWidth, controlsHeight);
  setSize(canvas, canvasSize, canvasSize);
  setAttribute(canvas, canvasSize);

};

export default style;
