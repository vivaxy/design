/**
 * @since 2018-12-06 15:44
 * @author vivaxy
 */

import * as ET from '../enums/event-types.js';

function init(e) {

  let time = 0;
  e.on(ET.SCROLL, (et, { delta }) => {
    time += delta;
    e.emit(ET.TIMELINE_UPDATE, {
      time,
      delta,
    });
  });
}

export default { init };
