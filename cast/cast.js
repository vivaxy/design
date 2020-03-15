/**
 * @since 2015-09-29 15:03
 * @author vivaxy
 */
import Tween from './tween.js';

class Cast {
  constructor(text) {
    this.text = text;
    this.parent = document.body;
    this.render().start();
  }

  render() {
    let element = document.createElement('div');
    let style = element.style;
    element.innerText = this.text;
    style.position = 'fixed';
    style.height = '16px';
    style.lineHeight = '16px';
    style.width = '100%';
    style.textAlign = 'center';
    style.bottom = '-16px';
    this.parent.appendChild(element);
    this.element = element;
    return this;
  }

  start() {
    new Tween(this.element)
      .animate({
        style: 'bottom',
        from: -16,
        to: 0,
        getValue: (v) => v + 'px',
        duration: 500,
      })
      .on('end', () => {
        new Tween(this.element)
          .animate({
            style: 'bottom',
            from: 0,
            to: 0,
            getValue: (v) => v + 'px',
            duration: 500,
          })
          .on('end', () => {
            new Tween(this.element)
              .animate({
                style: 'letterSpacing',
                from: 0,
                to: 10,
                getValue: (v) => v + 'px',
                duration: 500,
              })
              .start();
            new Tween(this.element)
              .animate({
                style: 'opacity',
                from: 1,
                to: 0,
                getValue: (v) => v,
                duration: 500,
              })
              .on('end', () => {
                this.parent.removeChild(this.element);
                this.callback();
              })
              .start();
          })
          .start();
      })
      .start();
    return this;
  }

  end(callback) {
    this.callback = callback;
    return this;
  }
}

export default Cast;
