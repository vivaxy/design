/**
 * @since 15-09-03 11:07
 * @author vivaxy
 */
'use strict';
class Dip {
    constructor(options) {
        this.ctx = options.ctx || (() => {
                throw new Error('ctx must be supplied')
            })();
        /**
         * {
         *      r: 255,
         *      g: 255,
         *      b: 255,
         *      a: 1
         * }
         * @type {*|color|string}
         */
        this.color = options.color;
        this.color.a = 0.02;
        this.strokeWidth = options.strokeWidth || 20;

        /**
         * 0 ~ 100
         * @type {number}
         */
        this.consumeRate = 1;
    }

    /**
     * two points containing coordinates {x: x, y: y}
     * each paint uses the same color, consumes the same volume of dip
     * @param from
     * @param to
     */
    paint(from, to) {
        for (let i = 0; i < 10; i++) {
            this._draw(from)._draw(to);
        }
        this._consume();
        return this;
    }

    destroy() {
        delete this;
        return this;
    }

    _draw(point) {
        let ctx = this.ctx;
        let width = this.strokeWidth;
        ctx.beginPath();
        ctx.arc(point.x + (Math.random() - 0.5) * width / 2, point.y + (Math.random() - 0.5) * width / 2, width * (Math.random() / 2 + 0.5), 0, 2 * Math.PI);
        ctx.fillStyle = this._getColor();
        ctx.fill();
        return this;
    }

    _consume() {
        let color = this.color;
        color.a *= ((100 - this.consumeRate) / 100);
        return this;
    }

    _getColor() {
        let color = this.color;
        return 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
    }

}

export default Dip;
