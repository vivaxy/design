/**
 * @since 15-09-04 13:47
 * @author vivaxy
 */
'use strict';
import setStyle from './set-style.js';

class Canvas {
    constructor() {
        this.height = 40; // 40%
        this._createCanvas();
    }

    _createCanvas() {
        let canvas = document.createElement('canvas');
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight * this.height / 100; // style.height = 40%
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
        this.ctx = canvas.getContext('2d');
        return this;
    }

    draw(map, width, height) {
        let ctx = this.ctx;
        let imageData = ctx.createImageData(width, height);
        map.forEach(function (value, index) {
            imageData.data[index] = value;
        });
        this.ctx.putImageData(imageData, 0, 0);
        return this;
    }
}

export default Canvas;