/**
 * @since 20180614 17:23
 * @author vivaxy
 */
import * as eventTypes from '../enums/event-types.js';

function init(events) {
  // `keypress` event does not includes `Backspace`.
  window.addEventListener('keyup', onKeyUp);

  function onKeyUp(e) {
    if (e.key === 'x' || e.key === 'Backspace') {
      events.emit(eventTypes.DELETE);
    }
  }
}

export default { init };
