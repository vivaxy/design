/**
 * @since 15-09-04 14:50
 * @author vivaxy
 */

import setStyle from './set-style.js';
import EventEmitter from 'event-emitter/src/event-emitter.js';

class ImageCanvas extends EventEmitter {
  constructor(options) {
    super();
    this.height = 40; // 40%
    this._createCanvas().setImage(options.src);
  }

  _createCanvas() {
    let canvas = document.createElement('canvas');
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight * this.height / 100; // style.height = 40%
    setStyle(canvas, {
      display: 'none',
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

  setImage(src) {
    let canvas = this.canvas;
    let ctx = this.ctx;
    let image = new Image();
    image.src = src;
    image.addEventListener('load', () => {
      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
      this.emit('load');
    }, false);
    return this;
  }

  getColorMap() {
    let canvas = this.canvas;
    let ctx = this.ctx;
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
  }

}

export default ImageCanvas;
