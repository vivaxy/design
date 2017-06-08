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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @since 15-09-04 13:47
 * @author vivaxy
 */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _setStyle = __webpack_require__(0);

var _setStyle2 = _interopRequireDefault(_setStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
    function Canvas() {
        _classCallCheck(this, Canvas);

        this.height = 40; // 40%
        this._createCanvas();
    }

    _createClass(Canvas, [{
        key: '_createCanvas',
        value: function _createCanvas() {
            var canvas = document.createElement('canvas');
            canvas.width = document.body.clientWidth;
            canvas.height = document.body.clientHeight * this.height / 100; // style.height = 40%
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
}();

exports.default = Canvas;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _setStyle = __webpack_require__(0);

var _setStyle2 = _interopRequireDefault(_setStyle);

var _eventEmitter = __webpack_require__(1);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 15-09-04 14:50
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author vivaxy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ImageCanvas = function (_EventEmitter) {
    _inherits(ImageCanvas, _EventEmitter);

    function ImageCanvas(options) {
        _classCallCheck(this, ImageCanvas);

        var _this = _possibleConstructorReturn(this, (ImageCanvas.__proto__ || Object.getPrototypeOf(ImageCanvas)).call(this));

        _this.height = 40; // 40%
        _this._createCanvas().setImage(options.src);
        return _this;
    }

    _createClass(ImageCanvas, [{
        key: '_createCanvas',
        value: function _createCanvas() {
            var canvas = document.createElement('canvas');
            canvas.width = document.body.clientWidth;
            canvas.height = document.body.clientHeight * this.height / 100; // style.height = 40%
            (0, _setStyle2.default)(canvas, {
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
            var _this2 = this;

            var canvas = this.canvas;
            var ctx = this.ctx;
            var image = new Image();
            image.src = src;
            image.addEventListener('load', function () {
                ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
                _this2.emit('load');
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
}(_eventEmitter2.default);

exports.default = ImageCanvas;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @since 15-09-06 09:28
 * @author vivaxy
 */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loading = function () {
    function Loading() {
        var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('loading');

        _classCallCheck(this, Loading);

        this.container = container;
    }

    _createClass(Loading, [{
        key: 'show',
        value: function show() {
            this.container.classList.remove('hide');
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.container.classList.add('hide');
        }
    }]);

    return Loading;
}();

exports.default = Loading;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _setStyle = __webpack_require__(0);

var _setStyle2 = _interopRequireDefault(_setStyle);

var _eventEmitter = __webpack_require__(1);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 15-09-04 13:58
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author vivaxy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Range = function (_EventEmitter) {
    _inherits(Range, _EventEmitter);

    function Range() {
        _classCallCheck(this, Range);

        var _this = _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this));

        _this.top = 40;
        _this.totalHeight = 60; // 60;
        _this.count = 5;
        _this.height = _this.totalHeight / _this.count;
        _this._initialize();
        return _this;
    }

    _createClass(Range, [{
        key: '_initialize',
        value: function _initialize() {
            this._addRangeInput(0, '#f00', 0, 200, 100 // red
            )._addRangeInput(1, '#0f0', 0, 200, 100 // green
            )._addRangeInput(2, '#00f', 0, 200, 100 // blue
            )._addRangeInput(3, '#000', 0, 100, 100 // opacity
            )._addRangeInput(4, '#999'); // grey scale
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
            var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            var _this2 = this;

            var max = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
            var initial = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

            var height = this.height;
            var input = document.createElement('input');
            input.type = 'range';
            input.min = min;
            input.max = max;
            input.value = initial;
            (0, _setStyle2.default)(input, {
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
                _this2.emit('change', {
                    index: index,
                    value: parseInt(e.target.value // 0 ~ 200
                    ) });
            }, false);
            document.body.appendChild(input);
            return this;
        }
    }]);

    return Range;
}(_eventEmitter2.default);

exports.default = Range;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @since 15-09-04 12:26
 * @author vivaxy
 */


var _range = __webpack_require__(5);

var _range2 = _interopRequireDefault(_range);

var _canvas = __webpack_require__(2);

var _canvas2 = _interopRequireDefault(_canvas);

var _loading = __webpack_require__(4);

var _loading2 = _interopRequireDefault(_loading);

var _imageCanvas = __webpack_require__(3);

var _imageCanvas2 = _interopRequireDefault(_imageCanvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var savedColorChanges = [100, 100, 100, 255, 0];

var canvas = new _canvas2.default();
var loading = new _loading2.default();
var worker = new Worker('./dist/worker.js');

worker.addEventListener('message', function (e) {
    var data = e.data;
    canvas.draw(data.imageData, data.width, data.height);
    loading.hide();
}, false);

var range = new _range2.default().on('change', function (e) {
    loading.show();
    savedColorChanges[e.index] = e.value;
    var imageData = imageCanvas.getColorMap();
    worker.postMessage({
        savedColorChanges: savedColorChanges,
        imageData: imageData
    });
});

var imageCanvas = new _imageCanvas2.default({
    src: './index.jpg'
}).on('load', function () {
    range.emit('change', {});
});

/***/ })
/******/ ]);