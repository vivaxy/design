(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @since 15-09-03 10:59
 * @author vivaxy
 */
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _dipJs = require('./dip.js');

var _dipJs2 = _interopRequireDefault(_dipJs);

var _setStyleJs = require('./set-style.js');

var _setStyleJs2 = _interopRequireDefault(_setStyleJs);

var _isMobileJs = require('./is-mobile.js');

var _isMobileJs2 = _interopRequireDefault(_isMobileJs);

var _getTouchPositionJs = require('./get-touch-position.js');

var _getTouchPositionJs2 = _interopRequireDefault(_getTouchPositionJs);

var Canvas = (function () {
    function Canvas() {
        _classCallCheck(this, Canvas);

        this._createCanvas().setDip({
            r: 255,
            g: 0,
            b: 0,
            a: 1
        })._bindEvents();
    }

    _createClass(Canvas, [{
        key: '_createCanvas',
        value: function _createCanvas() {
            var canvas = document.createElement('canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            (0, _setStyleJs2['default'])(canvas, {
                display: 'block',
                width: '100%',
                height: '90%',
                position: 'absolute',
                top: 0,
                left: 0
            });
            document.body.appendChild(canvas);
            this.canvas = canvas;
            return this;
        }
    }, {
        key: 'setDip',
        value: function setDip(color) {
            delete this.dip;
            this.dip = new _dipJs2['default']({
                ctx: this.canvas.getContext('2d'),
                color: color
            });
            return this;
        }
    }, {
        key: '_bindEvents',
        value: function _bindEvents() {
            var _this = this;

            var canvas = this.canvas;
            var startEvent = _isMobileJs2['default'] ? 'touchstart' : 'mousedown';
            var moveEvent = _isMobileJs2['default'] ? 'touchmove' : 'mousemove';
            var endEvent = _isMobileJs2['default'] ? 'touchend' : 'mouseup';
            var cancelEvent = _isMobileJs2['default'] ? 'touchcancel' : 'mouseout';

            var lastPosition = {};
            var saveTimeout = null;

            var moveHandler = function moveHandler(e) {
                e.preventDefault();
                var position = (0, _getTouchPositionJs2['default'])(e);
                _this.dip.paint(lastPosition, position);
                if (_this._getDistance(position, lastPosition) > 10) {
                    clearTimeout(saveTimeout);
                }
                lastPosition = position;
            };

            var endHandler = function endHandler(e) {
                e.preventDefault();
                lastPosition = (0, _getTouchPositionJs2['default'])(e);
                canvas.removeEventListener(moveEvent, moveHandler, false);
                clearTimeout(saveTimeout);
            };

            var startHandler = function startHandler(e) {
                e.preventDefault();
                lastPosition = (0, _getTouchPositionJs2['default'])(e);
                canvas.addEventListener(moveEvent, moveHandler, false);
                saveTimeout = setTimeout(_this._saveCanvas.bind(_this), 1000);
            };

            canvas.addEventListener(startEvent, startHandler, false);
            canvas.addEventListener(endEvent, endHandler, false);
            canvas.addEventListener(cancelEvent, endHandler, false);
            return this;
        }
    }, {
        key: '_saveCanvas',
        value: function _saveCanvas() {
            var canvas = this.canvas;

            var img = document.createElement('img');
            (0, _setStyleJs2['default'])(img, {
                position: 'absolute',
                display: 'block',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                background: 'rgba(0, 0, 0, 0.8)'
            });
            img.src = canvas.toDataURL('image/png');

            img.addEventListener(_isMobileJs2['default'] ? 'touchend' : 'click', function () {
                document.body.removeChild(img);
            }, false);
            document.body.appendChild(img);
        }
    }, {
        key: '_getDistance',
        value: function _getDistance(from, to) {
            var square = function square(a, b) {
                return Math.pow(a - b, 2);
            };
            return Math.sqrt(square(from.x - to.x) + square(from.y - to.y));
        }
    }]);

    return Canvas;
})();

exports['default'] = Canvas;
module.exports = exports['default'];

},{"./dip.js":3,"./get-touch-position.js":5,"./is-mobile.js":7,"./set-style.js":8}],2:[function(require,module,exports){
/**
 * @since 15-09-03 12:04
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

var _isMobileJs = require('./is-mobile.js');

var _isMobileJs2 = _interopRequireDefault(_isMobileJs);

var _eventEmitterJs = require('./event-emitter.js');

var _eventEmitterJs2 = _interopRequireDefault(_eventEmitterJs);

var _getTouchPositionJs = require('./get-touch-position.js');

var _getTouchPositionJs2 = _interopRequireDefault(_getTouchPositionJs);

var ColorPicker = (function (_EventEmitter) {
    _inherits(ColorPicker, _EventEmitter);

    function ColorPicker() {
        _classCallCheck(this, ColorPicker);

        _get(Object.getPrototypeOf(ColorPicker.prototype), 'constructor', this).call(this);
        this._createCanvas()._addColor()._bindEvent();
    }

    _createClass(ColorPicker, [{
        key: '_createCanvas',
        value: function _createCanvas() {
            var canvas = document.createElement('canvas');
            canvas.width = window.innerWidth;
            canvas.height = 1;
            (0, _setStyleJs2['default'])(canvas, {
                position: 'absolute',
                width: '100%',
                height: '10%',
                bottom: 0,
                left: 0
            });
            document.body.appendChild(canvas);
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            return this;
        }
    }, {
        key: '_addColor',
        value: function _addColor() {
            var canvas = this.canvas;
            var width = canvas.width;
            var height = canvas.height;
            var ctx = this.ctx;
            var grd = ctx.createLinearGradient(0, 0, width, 0);
            grd.addColorStop(0, 'rgb(255, 0, 0)');
            grd.addColorStop(0.2, 'rgb(255, 255, 0)');
            grd.addColorStop(0.4, 'rgb(0, 255, 0)');
            grd.addColorStop(0.6, 'rgb(0, 255, 255)');
            grd.addColorStop(0.8, 'rgb(0, 0, 255)');
            grd.addColorStop(1, 'rgb(255, 0, 255)');
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, width, height);
            return this;
        }
    }, {
        key: '_bindEvent',
        value: function _bindEvent() {
            var _this = this;
            var canvas = this.canvas;
            var ctx = this.ctx;
            var event = _isMobileJs2['default'] ? 'touchend' : 'click';
            canvas.addEventListener(event, function (e) {
                e.preventDefault();
                var position = (0, _getTouchPositionJs2['default'])(e);
                var imageData = ctx.getImageData(position.x, 0, 1, 1);
                var color = imageData.data;
                var r = color[0];
                var g = color[1];
                var b = color[2];
                var a = color[3] / 256; // 0 ~ 255
                _this.emit('pick', {
                    r: r,
                    g: g,
                    b: b,
                    a: a
                });
            }, false);
            return this;
        }
    }]);

    return ColorPicker;
})(_eventEmitterJs2['default']);

exports['default'] = ColorPicker;
module.exports = exports['default'];

},{"./event-emitter.js":4,"./get-touch-position.js":5,"./is-mobile.js":7,"./set-style.js":8}],3:[function(require,module,exports){
/**
 * @since 15-09-03 11:07
 * @author vivaxy
 */
'use strict';
// todo simulate 100 hair with color to paint one point
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Dip = (function () {
    function Dip(options) {
        _classCallCheck(this, Dip);

        this.ctx = options.ctx || (function () {
            throw new Error('ctx must be supplied');
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

    _createClass(Dip, [{
        key: 'paint',
        value: function paint(from, to) {
            for (var i = 0; i < 10; i++) {
                this._draw(from)._draw(to);
            }
            this._consume();
            return this;
        }
    }, {
        key: '_draw',
        value: function _draw(point) {
            var ctx = this.ctx;
            var width = this.strokeWidth;
            ctx.beginPath();
            ctx.arc(point.x + (Math.random() - 0.5) * width / 2, point.y + (Math.random() - 0.5) * width / 2, width * (Math.random() / 2 + 0.5), 0, 2 * Math.PI);
            ctx.fillStyle = this._getColor();
            ctx.fill();
            return this;
        }
    }, {
        key: '_consume',
        value: function _consume() {
            var color = this.color;
            color.a *= (100 - this.consumeRate) / 100;
            return this;
        }
    }, {
        key: '_getColor',
        value: function _getColor() {
            var color = this.color;
            return 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
        }
    }]);

    return Dip;
})();

exports['default'] = Dip;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
/**
 * @since 15-09-03 18:05
 * @author vivaxy
 */
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _isMobileJs = require('./is-mobile.js');

var _isMobileJs2 = _interopRequireDefault(_isMobileJs);

exports['default'] = function (e) {
    var touch = _isMobileJs2['default'] ? e.changedTouches[0] : e;
    return {
        x: touch.pageX,
        y: touch.pageY
    };
};

module.exports = exports['default'];

},{"./is-mobile.js":7}],6:[function(require,module,exports){
/**
 * @since 15-09-03 10:06
 * @author vivaxy
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _canvasJs = require('./canvas.js');

var _canvasJs2 = _interopRequireDefault(_canvasJs);

var _colorPickerJs = require('./color-picker.js');

var _colorPickerJs2 = _interopRequireDefault(_colorPickerJs);

var canvas = new _canvasJs2['default']();
var colorPicker = new _colorPickerJs2['default']();

colorPicker.on('pick', function (color) {
  canvas.setDip(color);
});

},{"./canvas.js":1,"./color-picker.js":2}],7:[function(require,module,exports){
/**
 * @since 15-09-03 10:54
 * @author vivaxy
 */
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = (function () {
    var check = false;
    (function (a) {
        if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
})();

module.exports = exports['default'];

},{}],8:[function(require,module,exports){
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

},{}]},{},[6]);
