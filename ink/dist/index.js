/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @since 15-09-03 10:54
 * @author vivaxy
 */


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var check = false;
    (function (a) {
        if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @since 15-09-03 18:05
 * @author vivaxy
 */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isMobile = __webpack_require__(0);

var _isMobile2 = _interopRequireDefault(_isMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (e) {
    var touch = _isMobile2.default ? e.changedTouches[0] : e;
    return {
        x: touch.pageX - e.target.offsetLeft,
        y: touch.pageY - e.target.offsetTop
    };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @since 15-09-03 12:11
 * @author vivaxy
 */


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (element, styleObject) {
    for (var key in styleObject) {
        if (styleObject.hasOwnProperty(key)) {
            element.style[key] = styleObject[key];
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @since 15-09-03 10:59
 * @author vivaxy
 */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dip = __webpack_require__(6);

var _dip2 = _interopRequireDefault(_dip);

var _setStyle = __webpack_require__(2);

var _setStyle2 = _interopRequireDefault(_setStyle);

var _isMobile = __webpack_require__(0);

var _isMobile2 = _interopRequireDefault(_isMobile);

var _getTouchPosition = __webpack_require__(1);

var _getTouchPosition2 = _interopRequireDefault(_getTouchPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
    function Canvas() {
        _classCallCheck(this, Canvas);

        this.height = 90; // 90%
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
            canvas.width = document.body.clientWidth;
            canvas.height = document.body.clientHeight * this.height / 100; // style.height = 90%
            (0, _setStyle2.default)(canvas, {
                display: 'block',
                width: '100%',
                height: this.height + '%',
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
            this.dip = new _dip2.default({
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
            var startEvent = _isMobile2.default ? 'touchstart' : 'mousedown';
            var moveEvent = _isMobile2.default ? 'touchmove' : 'mousemove';
            var endEvent = _isMobile2.default ? 'touchend' : 'mouseup';
            var cancelEvent = _isMobile2.default ? 'touchcancel' : 'mouseout';

            var firstPosition = {};
            var lastPosition = {};
            var saveTimeout = null;

            var moveHandler = function moveHandler(e) {
                e.preventDefault();
                var position = (0, _getTouchPosition2.default)(e);
                _this.dip.paint(lastPosition, position);
                lastPosition = position;
                if (_this._getDistance(firstPosition, position) > 10) {
                    clearTimeout(saveTimeout);
                }
            };

            var endHandler = function endHandler(e) {
                e.preventDefault();
                lastPosition = (0, _getTouchPosition2.default)(e);
                canvas.removeEventListener(moveEvent, moveHandler, false);
                clearTimeout(saveTimeout);
            };

            var startHandler = function startHandler(e) {
                e.preventDefault();
                lastPosition = (0, _getTouchPosition2.default)(e);
                firstPosition = (0, _getTouchPosition2.default)(e);
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

            var hint = document.createElement('div');
            (0, _setStyle2.default)(hint, {
                position: 'absolute',
                width: '100%',
                height: 100 - this.height + '%',
                bottom: 0,
                left: 0,
                background: '#fff',
                color: '#000',
                textAlign: 'center'
            });
            hint.textContent = 'tap and hold the image to save';

            var img = document.createElement('img');
            (0, _setStyle2.default)(img, {
                position: 'absolute',
                display: 'block',
                width: '100%',
                height: this.height + '%',
                top: 0,
                left: 0,
                background: '#fff'
            });
            img.src = canvas.toDataURL('image/png');

            var elementList = [hint, img];

            elementList.forEach(function (ele) {
                ele.addEventListener(_isMobile2.default ? 'touchend' : 'click', function () {
                    elementList.forEach(function (e) {
                        document.body.removeChild(e);
                    });
                }, false);
                document.body.appendChild(ele);
            });
        }
    }, {
        key: '_getDistance',
        value: function _getDistance(from, to) {
            var square = function square(a, b) {
                return Math.pow(a - b, 2);
            };
            return Math.sqrt(square(from.x, to.x) + square(from.y, to.y));
        }
    }]);

    return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _setStyle = __webpack_require__(2);

var _setStyle2 = _interopRequireDefault(_setStyle);

var _isMobile = __webpack_require__(0);

var _isMobile2 = _interopRequireDefault(_isMobile);

var _eventEmitter = __webpack_require__(5);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _getTouchPosition = __webpack_require__(1);

var _getTouchPosition2 = _interopRequireDefault(_getTouchPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 15-09-03 12:04
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author vivaxy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ColorPicker = function (_EventEmitter) {
    _inherits(ColorPicker, _EventEmitter);

    function ColorPicker() {
        _classCallCheck(this, ColorPicker);

        var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

        _this.height = 10; // 10%
        _this._createCanvas()._addColor()._bindEvent();
        return _this;
    }

    _createClass(ColorPicker, [{
        key: '_createCanvas',
        value: function _createCanvas() {
            var canvas = document.createElement('canvas');
            canvas.width = document.body.clientWidth;
            canvas.height = document.body.clientHeight * this.height / 100; // style.height = 10%
            (0, _setStyle2.default)(canvas, {
                position: 'absolute',
                width: '100%',
                height: this.height + '%',
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
            var _this2 = this;

            var canvas = this.canvas;
            var ctx = this.ctx;
            canvas.addEventListener(_isMobile2.default ? 'touchend' : 'click', function (e) {
                e.preventDefault();
                var position = (0, _getTouchPosition2.default)(e);
                var imageData = ctx.getImageData(position.x, 0, 1, 1);
                var color = imageData.data;
                _this2.emit('pick', {
                    r: color[0],
                    g: color[1],
                    b: color[2],
                    a: color[3] / 256 // 0 ~ 255
                });
            }, false);
            // prevent default page scroll
            canvas.addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, false);
            return this;
        }
    }]);

    return ColorPicker;
}(_eventEmitter2.default);

exports.default = ColorPicker;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @since 15-09-02 10:25
 * @author vivaxy
 */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
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
            var _this = this;
            var callbacks = this.events[event];
            var _arguments = arguments;
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
}();

exports.default = EventEmitter;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @since 15-09-03 11:07
 * @author vivaxy
 */

// todo simulate 100 hair with color to paint one point

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dip = function () {
    function Dip(options) {
        _classCallCheck(this, Dip);

        this.ctx = options.ctx || function () {
            throw new Error('ctx must be supplied');
        }();
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
}();

exports.default = Dip;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @since 15-09-03 10:06
 * @author vivaxy
 */


var _canvas = __webpack_require__(3);

var _canvas2 = _interopRequireDefault(_canvas);

var _colorPicker = __webpack_require__(4);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = new _canvas2.default();
var colorPicker = new _colorPicker2.default();

colorPicker.on('pick', function (color) {
  canvas.setDip(color);
});

/***/ })
/******/ ]);