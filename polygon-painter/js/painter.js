/**
 * @since 2016-01-05 20:17
 * @author vivaxy
 */

import EventEmitter from 'https://unpkg.com/@vivaxy/framework/class/event-emitter.js';

const RADIUS = 0.3;

class Painter extends EventEmitter {
  constructor(canvas) {
    super();
    let ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    this.size = canvas.width;
    this.ctx = ctx;
  }

  paint(vertices, rotations) {
    let ctx = this.ctx;
    let size = this.size;
    let length = size * RADIUS;
    let center = size / 2;
    let interiorAngle = this.getInteriorAngle(vertices);

    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();

    for (let i = 0; i < vertices * rotations; i += rotations) {
      let x = Math.sin(i * interiorAngle);
      let y = Math.cos(i * interiorAngle);
      let _x = center + x * length;
      let _y = center + y * length;
      ctx.lineTo(_x, _y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  getInteriorAngle(vertices) {
    return (2 * Math.PI) / vertices;
  }
}

export default Painter;
