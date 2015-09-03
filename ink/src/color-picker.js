/**
 * @since 15-09-03 12:04
 * @author vivaxy
 */
'use strict';
import setStyle from './set-style.js';
import isMobile from './is-mobile.js';
import EventEmitter from '../event-emitter/src/event-emitter.js';

class ColorPicker extends EventEmitter {
    constructor() {
        super();
        this._createCanvas()._addColor()._bindEvent();
    }

    _createCanvas() {
        let canvas = document.createElement('canvas');
        setStyle(canvas, {
            position: 'absolute',
            width: '100%',
            height: '10%',
            top: 0,
            left: 0
        });
        document.body.appendChild(canvas);
        this.canvas = canvas;
        return this;
    }

    _addColor() {
        return this;
    }

    _bindEvent() {
        let canvas = this.canvas;
        let startEvent = isMobile ? 'touchstart' : 'mousedown';
        canvas.addEventListener(startEvent, (e) => {
            e.stopPropagation(); // should not effects canvas

        }, false);
        return this;
    }
}

export default ColorPicker;
