/**
 * @since 20180608 11:05
 * @author vivaxy
 */
export default class Sphere {
  constructor({ sphereRadius }) {
    this.sphereRadius = sphereRadius;

    this.tags = [];

    this.el = document.createElement('div');
    this.el.classList.add('sphere');
    this.el.style.width = this.sphereRadius * 2 + 'px';
    this.el.style.height = this.sphereRadius * 2 + 'px';
    document.body.appendChild(this.el);
  }

  addTag(tag) {
    tag.setData({ sphereRadius: this.sphereRadius, sphereEl: this.el });
    this.tags.push(tag);
  }
}
