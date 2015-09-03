/**
 * @since 15-09-03 10:59
 * @author vivaxy
 */
'use strict';
import isMobile from './is-mobile.js';
import {color, lineWidth} from './option.js';
import Dip from './dip.js';
import setStyle from '.set-style.js';

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
        this.dip && this.dip.destroy && this.dip.destroy();
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

        let lastPosition = {};

        let moveHandler = (e) => {
            e.preventDefault();
            let position = this._getPosition(e);
            this.dip.paint(lastPosition, position);
            lastPosition = position;
        };

        let endHandler = (e) => {
            e.preventDefault();
            lastPosition = this._getPosition(e);
            canvas.removeEventListener(endEvent, moveHandler, false);
        };

        let startHandler = (e) => {
            e.preventDefault();
            lastPosition = this._getPosition(e);
            canvas.addEventListener(moveEvent, moveHandler, false);
            canvas.addEventListener(endEvent, endHandler, false);
        };

        canvas.addEventListener(startEvent, startHandler, false);
        return this;
    }

    _getPosition(e) {
        let touch = isMobile ? e.changedTouches[0] : e;
        return {
            x: touch.pageX,
            y: touch.pageY
        };
    }
}

export default Canvas;
