/**
 * @since 2020-03-10 04:07
 * @author vivaxy
 * @see https://github.com/isaacvr/coding/tree/gh-pages/fourier_transform
 */
import EventEmitter from 'https://unpkg.com/@vivaxy/framework/class/event-emitter.js';
import canvas from './services/canvas.js';
import * as eventTypes from './enums/event-types.js';

const eventEmitter = new EventEmitter();

canvas.init(eventEmitter);

// eventEmitter.on(eventTypes.ON_RENDER, function(_, ctx) {
//   ctx.clearRect(0, 0, 100, 100);
// });
