/**
 * @since 15-09-04 13:47
 * @author vivaxy
 */
'use strict';
import setStyle from './set-style.js';

class Canvas {
    constructor() {
        this._createCanvas();
    }

    _createCanvas() {
        let canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.4; // style.height = 40%
        setStyle(canvas, {
            display: 'block',
            width: '100%',
            height: '40%',
            position: 'absolute',
            top: 0,
            left: 0
        });
        document.body.appendChild(canvas);
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        return this;
    }

    setImage(image) {
        let canvas = this.canvas;
        let ctx = this.ctx;
        ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
    }
}

export default Canvas;