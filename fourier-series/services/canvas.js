/**
 * @since 20180613 20:13
 * @author vivaxy
 */
import * as eventTypes from '../enums/event-types.js';
import createResizedCanvasRenderingContext2D from '../utils/create-resized-canvas.js';

function init(eventEmitter, { canvas } = {}) {
  if (!canvas) {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
  }
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio;
  const proxiedCtx = createResizedCanvasRenderingContext2D(ctx, dpr);
  resize();

  canvas.addEventListener('touchstart', onCanvasTouchStart);
  canvas.addEventListener('mousedown', onCanvasTouchStart);
  canvas.addEventListener('touchmove', onCanvasTouchMove);
  canvas.addEventListener('mousemove', onCanvasTouchMove);
  canvas.addEventListener('touchend', onCanvasTouchEnd);
  canvas.addEventListener('mouseup', onCanvasTouchEnd);
  canvas.addEventListener('touchcancel', onCanvasTouchEnd);
  canvas.addEventListener('mouseout', onCanvasTouchEnd);
  window.addEventListener('resize', resize);
  window.addEventListener('orientationchange', resize);
  requestAnimationFrame(onAnimationFrame);

  function onCanvasTouchStart(e) {
    eventEmitter.emit(eventTypes.ON_CANVAS_TOUCH_START, getCoords(e));
  }

  function onCanvasTouchMove(e) {
    eventEmitter.emit(eventTypes.ON_CANVAS_TOUCH_MOVE, getCoords(e));
  }

  function onCanvasTouchEnd(e) {
    eventEmitter.emit(eventTypes.ON_CANVAS_TOUCH_END, getCoords(e));
  }

  function resize() {
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
  }

  function onAnimationFrame() {
    eventEmitter.emit(eventTypes.ON_RENDER, proxiedCtx);
  }

  function getCoords(e) {
    if (e.changedTouches) {
      return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  }
}

export default { init };
