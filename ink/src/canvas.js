/**
 * @since 15-09-03 10:59
 * @author vivaxy
 */
'use strict';
import Dip from './dip.js';
import setStyle from './set-style.js';
import isMobile from './is-mobile.js';
import getTouchPosition from './get-touch-position.js';

class Canvas {
    constructor() {
        this._createCanvas().setDip({
            r: 255,
            g: 0,
            b: 0,
            a: 1
        })._bindEvents();
    }

    _createCanvas() {
        let canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setStyle(canvas, {
            display: 'block',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
        });
        document.body.appendChild(canvas);
        this.canvas = canvas;
        return this;
    }

    setDip(color) {
        delete this.dip;
        this.dip = new Dip({
            ctx: this.canvas.getContext('2d'),
            color: color
        });
        return this;
    }

    _bindEvents() {
        let canvas = this.canvas;
        let startEvent = isMobile ? 'touchstart' : 'mousedown';
        let moveEvent = isMobile ? 'touchmove' : 'mousemove';
        let endEvent = isMobile ? 'touchend' : 'mouseup';
        let cancelEvent = isMobile ? 'touchcancel' : 'mouseout';

        let lastPosition = {};

        let moveHandler = (e) => {
            e.preventDefault();
            let position = getTouchPosition(e);
            this.dip.paint(lastPosition, position);
            lastPosition = position;
        };

        let endHandler = (e) => {
            e.preventDefault();
            lastPosition = getTouchPosition(e);
            canvas.removeEventListener(moveEvent, moveHandler, false);
        };

        let startHandler = (e) => {
            e.preventDefault();
            lastPosition = getTouchPosition(e);
            canvas.addEventListener(moveEvent, moveHandler, false);
        };

        canvas.addEventListener(startEvent, startHandler, false);
        canvas.addEventListener(endEvent, endHandler, false);
        canvas.addEventListener(cancelEvent, endHandler, false);
        return this;
    }
}

export default Canvas;
