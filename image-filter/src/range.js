/**
 * @since 15-09-04 13:58
 * @author vivaxy
 */

import setStyle from './set-style.js';
import EventEmitter from 'event-emitter/src/event-emitter.js';

class Range extends EventEmitter {
  constructor() {
    super();
    this.top = 40;
    this.totalHeight = 60; // 60;
    this.count = 5;
    this.height = this.totalHeight / this.count;
    this._initialize();
  }

  _initialize() {
    this._addRangeInput(0, '#f00', 0, 200, 100) // red
      ._addRangeInput(1, '#0f0', 0, 200, 100) // green
      ._addRangeInput(2, '#00f', 0, 200, 100) // blue
      ._addRangeInput(3, '#000', 0, 100, 100) // opacity
      ._addRangeInput(4, '#999'); // grey scale
    return this;
  }

  /**
   *
   * @param index - from 0
   * @param color
   * @param min
   * @param max
   * @param initial
   * @returns {Range}
   * @private
   */
  _addRangeInput(index, color, min = 0, max = 100, initial = 0) {
    let height = this.height;
    let input = document.createElement('input');
    input.type = 'range';
    input.min = min;
    input.max = max;
    input.value = initial;
    setStyle(input, {
      width: '100%',
      height: height + '%',
      position: 'absolute',
      top: this.top + height * index + '%',
      left: 0,
      margin: 0,
      border: 'none',
      borderRadius: 0,
      webkitAppearance: 'none',
      display: 'block',
      background: color,
      outline: 'none'
    });
    input.addEventListener('change', (e) => {
      this.emit('change', {
        index: index,
        value: parseInt(e.target.value) // 0 ~ 200
      })
    }, false);
    document.body.appendChild(input);
    return this;
  }
}

export default Range;
