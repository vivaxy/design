/**
 * @since 15-09-04 13:58
 * @author vivaxy
 */
'use strict';
import setStyle from './set-style.js';
import EventEmitter from './event-emitter.js';

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
        this._addRangeInput(0, 'r', '#f00')
            ._addRangeInput(1, 'g', '#0f0')
            ._addRangeInput(2, 'b', '#00f')
            ._addRangeInput(3, 'a', '#000')
            ._addRangeInput(4, 'greyscale', '#999', 0, 100, 0);
        return this;
    }

    /**
     *
     * @param index - from 0
     * @param type
     * @param color
     * @param min
     * @param max
     * @param initial
     * @returns {Range}
     * @private
     */
    _addRangeInput(index, type, color, min, max, initial) {
        let height = this.height;
        let input = document.createElement('input');
        input.type = 'range';
        input.min = min === undefined ? 0 : min;
        input.max = max === undefined ? 200 : max;
        input.value = initial === undefined ? 100 : initial;
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
            background: color
        });
        input.addEventListener('change', (e)=> {
            this.emit('change', {
                type: type,
                index: index,
                value: parseInt(e.target.value) // 0 ~ 200
            })
        }, false);
        document.body.appendChild(input);
        return this;
    }
}

export default Range;
