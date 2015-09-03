/**
 * @since 15-09-03 12:04
 * @author vivaxy
 */
'use strict';
import setStyle from './set-style.js';
import isMobile from './is-mobile.js';
import EventEmitter from './event-emitter.js';
import getTouchPosition from './get-touch-position.js';

class ColorPicker extends EventEmitter {
    constructor() {
        super();
        this._createCanvas()._addColor()._bindEvent();
    }

    _createCanvas() {
        let canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = 1;
        setStyle(canvas, {
            position: 'absolute',
            width: '100%',
            height: '10%',
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
        let _this = this;
        let canvas = this.canvas;
        let ctx = this.ctx;
        let event = isMobile ? 'touchend' : 'click';
        canvas.addEventListener(event, (e) => {
            e.stopPropagation(); // should not effects canvas
            e.preventDefault();
            let position = getTouchPosition(e);
            let imageData = ctx.getImageData(position.x, 0, 1, 1);
            let color = imageData.data;
            let r = color[0];
            let g = color[1];
            let b = color[2];
            let a = color[3] / 256; // 0 ~ 255
            _this.emit('pick', {
                r: r,
                g: g,
                b: b,
                a: a
            });
        }, false);
        return this;
    }
}

export default ColorPicker;
