/**
 * @since 20180613 20:13
 * @author vivaxy
 */
import ASSERT from 'https://unpkg.com/@vivaxy/framework/utils/assert.js';
import * as eventTypes from '../enums/event-types.js';
import * as layerIndexes from '../enums/layer-indexes.js';
import * as layerActions from '../enums/layer-actions.js';
import * as layerFunctions from '../enums/layer-functions.js';

function init(
  events,
  { canvas, width = window.innerWidth, height = window.innerHeight } = {},
) {
  if (!canvas) {
    canvas = document.createElement('canvas');
    document.body.appendChild('canvas');
  }
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio;
  let rendering = true;

  canvas.width = width * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  const resizedCtx = new Proxy(ctx, {});

  canvas.addEventListener('touchstart', onCanvasTouchStart);
  canvas.addEventListener('mousedown', onCanvasTouchStart);
  canvas.addEventListener('touchmove', onCanvasTouchMove);
  canvas.addEventListener('mousemove', onCanvasTouchMove);
  canvas.addEventListener('touchend', onCanvasTouchEnd);
  canvas.addEventListener('mouseup', onCanvasTouchEnd);
  canvas.addEventListener('touchcancel', onCanvasTouchEnd);
  canvas.addEventListener('mouseout', onCanvasTouchEnd);

  events.on(
    eventTypes.ON_CANVAS_RENDER_STATE_CHANGE,
    onCanvasRenderStateChange,
  );
  requestAnimationFrame(onAnimationFrame);

  function onCanvasTouchStart(e) {
    events.emit(eventTypes.ON_CANVAS_TOUCH_START, getCoords(e));
  }

  function onCanvasTouchMove(e) {
    events.emit(eventTypes.ON_CANVAS_TOUCH_MOVE, getCoords(e));
  }

  function onCanvasTouchEnd(e) {
    events.emit(eventTypes.ON_CANVAS_TOUCH_END, getCoords(e));
  }

  function onCanvasRenderStateChange(_, state = true) {
    rendering = state;
  }

  function onAnimationFrame() {
    if (rendering) {
    }
  }

  function getCoords(e) {
    if (e.changedTouches) {
      return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  }
}

export default { init };
