(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @since 15-09-04 13:47
 * @author vivaxy
 */
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _setStyleJs = require('./set-style.js');

var _setStyleJs2 = _interopRequireDefault(_setStyleJs);

var Canvas = (function () {
    function Canvas() {
        _classCallCheck(this, Canvas);

        this.height = 40; // 40%
        this._createCanvas();
    }

    _createClass(Canvas, [{
        key: '_createCanvas',
        value: function _createCanvas() {
            var canvas = document.createElement('canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * this.height / 100; // style.height = 40%
            (0, _setStyleJs2['default'])(canvas, {
                display: 'block',
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
    }, {
        key: 'draw',
        value: function draw(map, width, height) {
            var ctx = this.ctx;
            var imageData = ctx.createImageData(width, height);
            map.forEach(function (value, index) {
                imageData.data[index] = value;
            });
            this.ctx.putImageData(imageData, 0, 0);
            return this;
        }
    }]);

    return Canvas;
})();

exports['default'] = Canvas;
module.exports = exports['default'];

},{"./set-style.js":6}],2:[function(require,module,exports){
/**
 * @since 15-09-02 10:25
 * @author vivaxy
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventEmitter = (function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    /**
     *
     * @param event
     * @param callback
     * @returns {EventEmitter}
     */

    _createClass(EventEmitter, [{
        key: 'on',
        value: function on(event, callback) {
            if (!this.events[event]) {
                this.events[event] = [];
            }
            this.events[event].push(callback);
            return this;
        }

        /**
         *
         * @param event
         * @returns {EventEmitter}
         */
    }, {
        key: 'emit',
        value: function emit(event) {
            var callbacks = this.events[event],
                _this = this,
                _arguments = arguments;
            if (callbacks) {
                callbacks.forEach(function (callback) {
                    callback.apply(_this, Array.prototype.slice.call(_arguments, 1));
                });
            }
            return this;
        }

        /**
         *
         * @param event
         * @param callback
         * @returns {EventEmitter}
         */
    }, {
        key: 'off',
        value: function off(event, callback) {
            if (this.events[event] && callback) {
                this.events[event].splice(this.events[event].indexOf(callback), 1);
            } else {
                this.events[event] = [];
            }
            return this;
        }
    }]);

    return EventEmitter;
})();

exports['default'] = EventEmitter;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
/**
 * @since 15-09-04 14:50
 * @author vivaxy
 */
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _setStyleJs = require('./set-style.js');

var _setStyleJs2 = _interopRequireDefault(_setStyleJs);

var _eventEmitterJs = require('./event-emitter.js');

var _eventEmitterJs2 = _interopRequireDefault(_eventEmitterJs);

var ImageCanvas = (function (_EventEmitter) {
    _inherits(ImageCanvas, _EventEmitter);

    function ImageCanvas(options) {
        _classCallCheck(this, ImageCanvas);

        _get(Object.getPrototypeOf(ImageCanvas.prototype), 'constructor', this).call(this);
        this.height = 40; // 40%
        this._createCanvas().setImage(options.src);
    }

    _createClass(ImageCanvas, [{
        key: '_createCanvas',
        value: function _createCanvas() {
            var canvas = document.createElement('canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * this.height / 100; // style.height = 40%
            (0, _setStyleJs2['default'])(canvas, {
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
    }, {
        key: 'setImage',
        value: function setImage(src) {
            var _this = this;

            var canvas = this.canvas;
            var ctx = this.ctx;
            var image = new Image();
            image.src = src;
            image.addEventListener('load', function () {
                ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
                _this.emit('load');
            }, false);
            return this;
        }
    }, {
        key: 'getColorMap',
        value: function getColorMap() {
            var canvas = this.canvas;
            var ctx = this.ctx;
            return ctx.getImageData(0, 0, canvas.width, canvas.height);
        }
    }]);

    return ImageCanvas;
})(_eventEmitterJs2['default']);

exports['default'] = ImageCanvas;
module.exports = exports['default'];

},{"./event-emitter.js":2,"./set-style.js":6}],4:[function(require,module,exports){
/**
 * @since 15-09-04 12:26
 * @author vivaxy
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rangeJs = require('./range.js');

var _rangeJs2 = _interopRequireDefault(_rangeJs);

var _imageCanvasJs = require('./image-canvas.js');

var _imageCanvasJs2 = _interopRequireDefault(_imageCanvasJs);

var _canvasJs = require('./canvas.js');

var _canvasJs2 = _interopRequireDefault(_canvasJs);

var savedColorChanges = [100, 100, 100, 255, 0];

var canvas = new _canvasJs2['default']();

var range = new _rangeJs2['default']().on('change', function (e) {
    savedColorChanges[e.index] = e.value;
    var imageData = imageCanvas.getColorMap();
    var map = Array.prototype.map.call(imageData.data, function (v, i) {
        return v * savedColorChanges[i % 4] / 100;
    });
    // grey scale
    canvas.draw(map.map(function (v, i, array) {
        var colorStart = i - i % 4;
        var color = Array.prototype.slice.call(array, colorStart, colorStart + 4);
        var averageColor = (color[0] + color[1] + color[2]) * color[3] / 3 / 255;
        var colorDiff = averageColor - v;
        return v + colorDiff * savedColorChanges[4] / 100;
    }), imageData.width, imageData.height);
});

var imageCanvas = new _imageCanvasJs2['default']({
    src: './index.jpg'
}).on('load', function () {
    range.emit('change', {});
});

},{"./canvas.js":1,"./image-canvas.js":3,"./range.js":5}],5:[function(require,module,exports){
/**
 * @since 15-09-04 13:58
 * @author vivaxy
 */
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _setStyleJs = require('./set-style.js');

var _setStyleJs2 = _interopRequireDefault(_setStyleJs);

var _eventEmitterJs = require('./event-emitter.js');

var _eventEmitterJs2 = _interopRequireDefault(_eventEmitterJs);

var Range = (function (_EventEmitter) {
    _inherits(Range, _EventEmitter);

    function Range() {
        _classCallCheck(this, Range);

        _get(Object.getPrototypeOf(Range.prototype), 'constructor', this).call(this);
        this.top = 40;
        this.totalHeight = 60; // 60;
        this.count = 5;
        this.height = this.totalHeight / this.count;
        this._initialize();
    }

    _createClass(Range, [{
        key: '_initialize',
        value: function _initialize() {
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
    }, {
        key: '_addRangeInput',
        value: function _addRangeInput(index, color) {
            var min = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

            var _this = this;

            var max = arguments.length <= 3 || arguments[3] === undefined ? 100 : arguments[3];
            var initial = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];

            var height = this.height;
            var input = document.createElement('input');
            input.type = 'range';
            input.min = min;
            input.max = max;
            input.value = initial;
            (0, _setStyleJs2['default'])(input, {
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
            input.addEventListener('change', function (e) {
                _this.emit('change', {
                    index: index,
                    value: parseInt(e.target.value) // 0 ~ 200
                });
            }, false);
            document.body.appendChild(input);
            return this;
        }
    }]);

    return Range;
})(_eventEmitterJs2['default']);

exports['default'] = Range;
module.exports = exports['default'];

},{"./event-emitter.js":2,"./set-style.js":6}],6:[function(require,module,exports){
/**
 * @since 15-09-03 12:11
 * @author vivaxy
 */
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function (element, styleObject) {
    for (var key in styleObject) {
        if (styleObject.hasOwnProperty(key)) {
            element.style[key] = styleObject[key];
        }
    }
};

module.exports = exports['default'];

},{}]},{},[4]);
