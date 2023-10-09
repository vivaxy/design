/**
 * @since 15-09-02 16:25
 * @author vivaxy
 */
/**
 * usage:
 *
 * new Tween(element)
 *     .animate({
 *         style: 'top',
 *         from: 0,
 *         to: 200,
 *         getValue: function (v) {
 *             return v + 'px';
 *         },
 *         duration: 1000
 *     })
 *     .on('end', function () {
 *         console.log('end');
 *     })
 *     .on('frame', function (type, v) {
 *         console.log('top: ' + v + 'px;');
 *     })
 *     .start()
 *     .pause();
 */
import EventEmitter from 'https://unpkg.com/@vivaxy/framework/class/event-emitter.js';

/**
 * @param {Object} element - target element
 * @constructor
 */
export default class Tween extends EventEmitter {
  constructor(element) {
    super(arguments);
    this.element = element;
    // this.style = undefined;
    // this.from = undefined;
    // this.to = undefined;
    // this.duration = undefined;
    // this.getValue = undefined;

    // this._beginTime = 0;
    this._events = {};
    this._animating = false;
  }

  /**
   *
   * @param options
   * @returns {Tween}
   */
  animate(options) {
    this.style = options.style;
    this.from = options.from;
    this.to = options.to;
    this.duration = options.duration;
    this.getValue =
      options.getValue ||
      function (v) {
        return v;
      };
    return this;
  }

  /**
   * play it
   * @returns {Tween}
   */
  start() {
    if (!this._animating) {
      this._animating = true;
      this._beginTime = new Date().getTime();
      this._loop();
    }
    return this;
  }

  /**
   *
   * @returns {Tween}
   * @private
   */
  _loop() {
    let now = new Date().getTime();
    if (this._animating) {
      if (now < this._beginTime + this.duration) {
        let value =
          this.from +
          ((this.to - this.from) * (now - this._beginTime)) / this.duration;
        this.element.style[this.style] = this.getValue(value);
        this.emit('frame', value);
        window.requestAnimationFrame(this._loop.bind(this));
      } else {
        // make sure final style
        this.element.style[this.style] = this.getValue(this.to);
        this.emit('end');
      }
    }
  }

  /**
   * pause
   */
  pause() {
    this._animating = false;
    let elapsed = new Date().getTime() - this._beginTime;
    this.from = this.from + ((this.to - this.from) * elapsed) / this.duration;
    this.duration = this.duration - elapsed;
    return this;
  }
}
