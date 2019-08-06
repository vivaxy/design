/**
 * @since 2016-01-05 20:17
 * @author vivaxy
 */
import style from './js/style.js';
import Painter from './js/painter.js';
import canvas from './js/element/canvas.js';
import { vertices, rotations, button } from './js/element/controls.js';

requestAnimationFrame(() => {

  style();

  let painter = new Painter(canvas);

  let paint = () => {
    painter.paint(parseInt(vertices.value), parseInt(rotations.value));
  };

  button.addEventListener('click', paint);
  paint();

});
