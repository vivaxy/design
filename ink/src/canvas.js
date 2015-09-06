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
        this.height = 90; // 90%
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
        canvas.height = window.innerHeight * this.height / 100; // style.height = 90%
        setStyle(canvas, {
            display: 'block',
            width: '100%',
            height: this.height + '%',
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

        let firstPosition = {};
        let lastPosition = {};
        let saveTimeout = null;

        let moveHandler = (e) => {
            e.preventDefault();
            let position = getTouchPosition(e);
            this.dip.paint(lastPosition, position);
            lastPosition = position;
            if (this._getDistance(firstPosition, position) > 10) {
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
            saveTimeout = setTimeout(this._saveCanvas.bind(this), 1000);
        };

        canvas.addEventListener(startEvent, startHandler, false);
        canvas.addEventListener(endEvent, endHandler, false);
        canvas.addEventListener(cancelEvent, endHandler, false);
        return this;
    }

    _saveCanvas() {
        let canvas = this.canvas;

        let hint = document.createElement('div');
        setStyle(hint, {
            position: 'absolute',
            width: '100%',
            height: (100 - this.height) + '%',
            bottom: 0,
            left: 0,
            background: '#fff',
            color: '#000',
            textAlign: 'center'
        });
        hint.textContent = 'tap and hold the image to save';

        let img = document.createElement('img');
        setStyle(img, {
            position: 'absolute',
            display: 'block',
            width: '100%',
            height: this.height + '%',
            top: 0,
            left: 0,
            background: '#fff'
        });
        img.src = canvas.toDataURL('image/png');
        
        let elementList = [hint, img];
        
        elementList.forEach((ele) => {
            ele.addEventListener(isMobile ? 'touchend' : 'click', ()=> {
                elementList.forEach((e) =>{
                    document.body.removeChild(e);
                });
            }, false);
            document.body.appendChild(ele);
        });
    }

    _getDistance(from, to) {
        let square = function (a, b) {
            return Math.pow(a - b, 2);
        };
        return Math.sqrt(square(from.x, to.x) + square(from.y, to.y));
    }
}

export default Canvas;
