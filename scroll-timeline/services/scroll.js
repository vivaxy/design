/**
 * @since 2018-12-06 21:12
 * @author vivaxy
 */

import * as ET from '../enums/event-types.js';

function init(e) {
  const canvas = document.querySelector('canvas');
  let previousY = null;
  canvas.addEventListener('touchstart', (ev) => {
    previousY = getCoords(ev).y;
  });

  canvas.addEventListener('touchmove', (ev) => {
    if (previousY !== null) {
      const delta = getCoords(ev).y - previousY;
      e.emit(ET.SCROLL, { delta });
      previousY = getCoords(ev).y;
    }
  });

  function getCoords(e) {
    if (e.changedTouches) {
      return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  }
}

export default { init };
