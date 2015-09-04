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
            height: '90%',
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
        let _this = this;

        let canvas = this.canvas;
        let startEvent = isMobile ? 'touchstart' : 'mousedown';
        let moveEvent = isMobile ? 'touchmove' : 'mousemove';
        let endEvent = isMobile ? 'touchend' : 'mouseup';
        let cancelEvent = isMobile ? 'touchcancel' : 'mouseout';

        let firstPosition = {};
        let lastPosition = {};
        let saveTimeout = null;

        let moveHandler = (e) => {
            e.preventDefault();
            let position = getTouchPosition(e);
            _this.dip.paint(lastPosition, position);
            lastPosition = position;
            if (_this._getDistance(firstPosition, position) > 20) {
                clearTimeout(saveTimeout);
            }
        };

        let endHandler = (e) => {
            e.preventDefault();
            lastPosition = getTouchPosition(e);
            canvas.removeEventListener(moveEvent, moveHandler, false);
            clearTimeout(saveTimeout);
        };

        let startHandler = (e) => {
            e.preventDefault();
            lastPosition = getTouchPosition(e);
            firstPosition = getTouchPosition(e);
            canvas.addEventListener(moveEvent, moveHandler, false);
            saveTimeout = setTimeout(_this._saveCanvas.bind(_this), 1000);
        };

        canvas.addEventListener(startEvent, startHandler, false);
        canvas.addEventListener(endEvent, endHandler, false);
        canvas.addEventListener(cancelEvent, endHandler, false);
        return this;
    }

    _saveCanvas() {
        let canvas = this.canvas;

        let img = document.createElement('img');
        setStyle(img, {
            position: 'absolute',
            display: 'block',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: '#fff'
        });
        img.src = canvas.toDataURL('image/png');

        img.addEventListener(isMobile ? 'touchend' : 'click', ()=> {
            document.body.removeChild(img);
        }, false);
        document.body.appendChild(img);
    }

    _getDistance(from, to) {
        let square = function (a, b) {
            return Math.pow(a - b, 2);
        };
        return Math.sqrt(square(from.x - to.x) + square(from.y - to.y));
    }
}

export default Canvas;
