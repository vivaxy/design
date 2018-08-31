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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @since 2015-09-29 15:03
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author vivaxy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _tween = __webpack_require__(2);

var _tween2 = _interopRequireDefault(_tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cast = function () {
  function Cast(text) {
    _classCallCheck(this, Cast);

    this.text = text;
    this.parent = document.body;
    this.render().start();
  }

  _createClass(Cast, [{
    key: 'render',
    value: function render() {
      var element = document.createElement('div');
      var style = element.style;
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
  }, {
    key: 'start',
    value: function start() {
      var _this = this;

      new _tween2.default(this.element).animate({
        style: 'bottom',
        from: -16,
        to: 0,
        getValue: function getValue(v) {
          return v + 'px';
        },
        duration: 500
      }).on('end', function () {
        new _tween2.default(_this.element).animate({
          style: 'bottom',
          from: 0,
          to: 0,
          getValue: function getValue(v) {
            return v + 'px';
          },
          duration: 500
        }).on('end', function () {
          new _tween2.default(_this.element).animate({
            style: 'letterSpacing',
            from: 0,
            to: 10,
            getValue: function getValue(v) {
              return v + 'px';
            },
            duration: 500
          }).start();
          new _tween2.default(_this.element).animate({
            style: 'opacity',
            from: 1,
            to: 0,
            getValue: function getValue(v) {
              return v;
            },
            duration: 500
          }).on('end', function () {
            _this.parent.removeChild(_this.element);
            _this.callback();
          }).start();
        }).start();
      }).start();
      return this;
    }
  }, {
    key: 'end',
    value: function end(callback) {
      this.callback = callback;
      return this;
    }
  }]);

  return Cast;
}();

exports.default = Cast;

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
 *     .on('frame', function (v) {
 *         console.log('top: ' + v + 'px;');
 *     })
 *     .start()
 *     .pause();
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = __webpack_require__(1);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @param {Object} element - target element
 * @constructor
 */
var Tween = function (_EventEmitter) {
  _inherits(Tween, _EventEmitter);

  function Tween(element) {
    _classCallCheck(this, Tween);

    var _this = _possibleConstructorReturn(this, (Tween.__proto__ || Object.getPrototypeOf(Tween)).call(this, arguments));

    _this.element = element;
    // this.style = undefined;
    // this.from = undefined;
    // this.to = undefined;
    // this.duration = undefined;
    // this.getValue = undefined;

    // this._beginTime = 0;
    _this._events = {};
    _this._animating = false;
    return _this;
  }

  /**
   *
   * @param options
   * @returns {Tween}
   */


  _createClass(Tween, [{
    key: 'animate',
    value: function animate(options) {
      this.style = options.style;
      this.from = options.from;
      this.to = options.to;
      this.duration = options.duration;
      this.getValue = options.getValue || function (v) {
        return v;
      };
      return this;
    }

    /**
     * play it
     * @returns {Tween}
     */

  }, {
    key: 'start',
    value: function start() {
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

  }, {
    key: '_loop',
    value: function _loop() {
      var now = new Date().getTime();
      if (this._animating) {
        if (now < this._beginTime + this.duration) {
          var value = this.from + (this.to - this.from) * (now - this._beginTime) / this.duration;
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

  }, {
    key: 'pause',
    value: function pause() {
      this._animating = false;
      var elapsed = new Date().getTime() - this._beginTime;
      this.from = this.from + (this.to - this.from) * elapsed / this.duration;
      this.duration = this.duration - elapsed;
      return this;
    }
  }]);

  return Tween;
}(_eventEmitter2.default);

exports.default = Tween;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cast = __webpack_require__(0);

var _cast2 = _interopRequireDefault(_cast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = ['author : vivaxy', 'date : 2015-04-25']; /**
                                                      * @since 150425 18:30
                                                      * @author vivaxy
                                                      */

var callbackFactory = function callbackFactory(index, callback) {
  return function () {
    new _cast2.default(data[index]).end(callback);
  };
};

var cb = function cb() {};

data.forEach(function (value, index) {
  cb = callbackFactory(data.length - index - 1, cb);
});

setInterval(cb, 5000);

/***/ })
/******/ ]);