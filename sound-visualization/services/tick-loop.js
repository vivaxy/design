/**
 * @since 2020-11-08 13:45
 * @author vivaxy
 */
import e, { E } from '../objects/events.js';

let prev = null;

export function init() {
  if (!prev) {
    prev = Date.now();
  }
  const now = Date.now();
  e.emit(E.TICK_LOOP, {
    now,
    delta: now - prev,
  });
  prev = now;
  requestAnimationFrame(init);
}
