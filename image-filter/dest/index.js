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

        this._createCanvas();
    }

    _createClass(Canvas, [{
        key: '_createCanvas',
        value: function _createCanvas() {
            var canvas = document.createElement('canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 0.4; // style.height = 40%
            (0, _setStyleJs2['default'])(canvas, {
                display: 'block',
                width: '100%',
                height: '40%',
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
        value: function setImage(image) {
            var canvas = this.canvas;
            var ctx = this.ctx;
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
        }
    }]);

    return Canvas;
})();

exports['default'] = Canvas;
module.exports = exports['default'];

},{"./set-style.js":3}],2:[function(require,module,exports){
/**
 * @since 15-09-04 12:26
 * @author vivaxy
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _canvasJs = require('./canvas.js');

var _canvasJs2 = _interopRequireDefault(_canvasJs);

var canvas = new _canvasJs2['default']();

var image = new Image();
image.src = './index.jpg';
image.addEventListener('load', function () {
  canvas.setImage(image);
}, false);

},{"./canvas.js":1}],3:[function(require,module,exports){
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

},{}]},{},[2]);
