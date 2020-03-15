/**
 * @since 20180608 10:03
 * @author vivaxy
 */
export default class Tag {
  constructor({ zAngle, yAngle, imageSrc, yAngleSpeed }) {
    this.zAngle = zAngle;
    this.yAngle = yAngle;
    this.imageSrc = imageSrc;
    this.yAngleSpeed = yAngleSpeed;
  }

  setData({ sphereRadius, sphereEl }) {
    this.sphereRadius = sphereRadius;
    this.sphereEl = sphereEl;

    this.el = document.createElement('div');
    this.el.classList.add('tag');

    const img = document.createElement('img');
    img.src = this.imageSrc;
    img.classList.add('img');

    this.el.appendChild(img);
    this.sphereEl.appendChild(this.el);

    this.setStyle();
  }

  setStyle() {
    this.translateX =
      Math.cos(this.zAngle) * Math.cos(this.yAngle) * this.sphereRadius;
    this.translateY = -Math.sin(this.zAngle) * this.sphereRadius;
    this.translateZ =
      -Math.cos(this.zAngle) * Math.sin(this.yAngle) * this.sphereRadius;
    this.el.style.transform = `translate3d(${this.translateX}px, ${this.translateY}px, ${this.translateZ}px)`;
    this.el.style.opacity = this.translateZ / 2 / this.sphereRadius + 0.5;

    requestAnimationFrame(() => {
      this.yAngle += this.yAngleSpeed;
      this.setStyle();
    });
  }
}
