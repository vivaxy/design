/**
 * @since 20180613 20:09
 * @author vivaxy
 */

import './debug/assert.js';
import * as eventTypes from './enums/event-types.js';
import EventEmitter from '../event-based-framework/class/event-emitter.js';

import hotkeys from './services/hotkeys.js';
import baseCanvas from './services/base-canvas.js';
import canvasDpr from './services/canvas-dpr.js';

import layerRenderer from './services/layer-renderer.js';
import sortRenderLayer from './services/sort-render-layer.js';

import buttons from './services/buttons.js';
import curves from './services/curves.js';

import drag from './services/drag.js';

const events = new EventEmitter();

hotkeys.init(events);
baseCanvas.init(events);
layerRenderer.init(events);
sortRenderLayer.init(events);
canvasDpr.init(events);
buttons.init(events);
curves.init(events);
drag.init(events);

events.emit(eventTypes.APPLY_RENDER);
