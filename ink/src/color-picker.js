/**
 * @since 15-09-03 12:04
 * @author vivaxy
 */

import setStyle from './set-style.js';
import isMobile from './is-mobile.js';
import EventEmitter from 'event-emitter/src/event-emitter';
import getTouchPosition from './get-touch-position.js';

class ColorPicker extends EventEmitter {
    constructor() {
        super();
        this.height = 10; // 10%
        this._createCanvas()._addColor()._bindEvent();
    }

    _createCanvas() {
        let canvas = document.createElement('canvas');
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight * this.height / 100; // style.height = 10%
        setStyle(canvas, {
            position: 'absolute',
            width: '100%',
            height: this.height + '%',
            bottom: 0,
            left: 0
        });
        document.body.appendChild(canvas);
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        return this;
    }

    _addColor() {
        let canvas = this.canvas;
        let width = canvas.width;
        let height = canvas.height;
        let ctx = this.ctx;
        let grd = ctx.createLinearGradient(0, 0, width, 0);
        grd.addColorStop(0, 'rgb(255, 0, 0)');
        grd.addColorStop(0.2, 'rgb(255, 255, 0)');
        grd.addColorStop(0.4, 'rgb(0, 255, 0)');
        grd.addColorStop(0.6, 'rgb(0, 255, 255)');
        grd.addColorStop(0.8, 'rgb(0, 0, 255)');
        grd.addColorStop(1, 'rgb(255, 0, 255)');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, width, height);
        return this;
    }

    _bindEvent() {
        let canvas = this.canvas;
        let ctx = this.ctx;
        canvas.addEventListener(isMobile ? 'touchend' : 'click', (e) => {
            e.preventDefault();
            let position = getTouchPosition(e);
            let imageData = ctx.getImageData(position.x, 0, 1, 1);
            let color = imageData.data;
            this.emit('pick', {
                r: color[0],
                g: color[1],
                b: color[2],
                a: color[3] / 256 // 0 ~ 255
            });
        }, false);
        // prevent default page scroll
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
        }, false);
        return this;
    }
}

export default ColorPicker;
