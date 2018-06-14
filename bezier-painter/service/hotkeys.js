/**
 * @since 20180614 17:23
 * @author vivaxy
 */

import * as eventTypes from '../enums/event-types.js';

function init(events) {
  window.addEventListener('keypress', onKeyPress);

  function onKeyPress(e) {
    if (e.key === 'x') {
      events.emit(eventTypes.DELETE);
    }
  }
}

export default { init };
