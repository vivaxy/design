/**
 * @since 2018-12-06 15:45
 * @author vivaxy
 */

import RenderLayer from './render-layer.js';

export default class RenderImage extends RenderLayer {

  constructor({ url, x, y, vx = 1, vy = 0, angle = 0, vangle = 0, transformOriginX = 0, transformOriginY = 0 }) {
    super();
    this.url = url;
    this.image = null;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.angle = angle;
    this.vangle = vangle;
    this.transformOriginX = transformOriginX;
    this.transformOriginY = transformOriginY;
  }

  renderOn(ctx, canvas) {
    const unit = canvas.width;
    ctx.rotate(Math.PI / 2);
    ctx.translate(-this.transformOriginX * unit, +this.transformOriginY * unit);
    ctx.rotate(-this.angle);
    ctx.drawImage(this.image,
      this.x * unit / 100 + this.transformOriginX * unit,
      -this.y * unit / 100 - this.image.height - this.transformOriginY * unit,
      this.image.width, -this.image.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
};
