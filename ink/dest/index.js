(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define('EventEmitter', ['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.EventEmitter = mod.exports;
    }
})(this, function (exports, module) {
    /**
     * @since 15-09-02 10:25
     * @author vivaxy
     */
    'use strict';

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

    module.exports = EventEmitter;
});
(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.isMobile = mod.exports;
    }
})(this, function (exports, module) {
    /**
     * @since 15-09-03 10:54
     * @author vivaxy
     */
    'use strict';

    module.exports = (function () {
        var check = false;
        (function (a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    })();
});
(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.setStyle = mod.exports;
    }
})(this, function (exports, module) {
    /**
     * @since 15-09-03 12:11
     * @author vivaxy
     */
    'use strict';

    module.exports = function (element, styleObject) {
        for (var key in styleObject) {
            if (styleObject.hasOwnProperty(key)) {
                element.style[key] = styleObject[key];
            }
        }
    };
});
(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define('ColorPicker', ['exports', 'module', './set-style.js', '../event-emitter/src/event-emitter.js'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module, require('./set-style.js'), require('../event-emitter/src/event-emitter.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.setStyle, global.EventEmitter);
        global.ColorPicker = mod.exports;
    }
})(this, function (exports, module, _setStyleJs, _eventEmitterSrcEventEmitterJs) {
    /**
     * @since 15-09-03 12:04
     * @author vivaxy
     */
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var _setStyle = _interopRequireDefault(_setStyleJs);

    var _EventEmitter2 = _interopRequireDefault(_eventEmitterSrcEventEmitterJs);

    var ColorPicker = (function (_EventEmitter) {
        _inherits(ColorPicker, _EventEmitter);

        function ColorPicker() {
            _classCallCheck(this, ColorPicker);

            _get(Object.getPrototypeOf(ColorPicker.prototype), 'constructor', this).call(this);
            this.initialize();
        }

        _createClass(ColorPicker, [{
            key: 'initialize',
            value: function initialize() {
                var canvas = document.createElement('canvas');
                (0, _setStyle['default'])(canvas, {
                    position: 'absolute',
                    width: '100%',
                    height: '10%',
                    top: 0,
                    left: 0
                });
            }
        }]);

        return ColorPicker;
    })(_EventEmitter2['default']);

    module.exports = ColorPicker;
});
(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define('Dip', ['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.Dip = mod.exports;
    }
})(this, function (exports, module) {
    /**
     * @since 15-09-03 11:07
     * @author vivaxy
     */
    'use strict';

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
            this.strokeWidth = options.strokeWidth || 20;

            /**
             * 0 ~ 100
             * @type {number}
             */
            this.consumeRate = 10;
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
                this._draw(from)._draw(to)._consume();
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
                if (color.a > 0.02) {
                    color.a *= (100 - this.consumeRate) / 100;
                }
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

    module.exports = Dip;
});
(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define('Canvas', ['exports', 'module', './is-mobile.js', './option.js', './dip.js', '.set-style.js'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module, require('./is-mobile.js'), require('./option.js'), require('./dip.js'), require('.set-style.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.isMobile, global.option, global.Dip, global.setStyle);
        global.Canvas = mod.exports;
    }
})(this, function (exports, module, _isMobileJs, _optionJs, _dipJs, _setStyleJs) {
    /**
     * @since 15-09-03 10:59
     * @author vivaxy
     */
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var _isMobile = _interopRequireDefault(_isMobileJs);

    var _Dip = _interopRequireDefault(_dipJs);

    var _setStyle = _interopRequireDefault(_setStyleJs);

    var Canvas = (function () {
        function Canvas() {
            _classCallCheck(this, Canvas);

            this._createCanvas();
            this.setDip({
                r: 255,
                g: 0,
                b: 0,
                a: 0.3
            });
            this._bindEvents();
        }

        _createClass(Canvas, [{
            key: '_createCanvas',
            value: function _createCanvas() {
                var canvas = document.createElement('canvas');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                (0, _setStyle['default'])(canvas, {
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0
                });
                document.body.appendChild(canvas);
                this.canvas = canvas;
            }
        }, {
            key: 'setDip',
            value: function setDip(color) {
                this.dip = new _Dip['default']({
                    ctx: this.canvas.getContext('2d'),
                    color: color
                });
            }
        }, {
            key: '_bindEvents',
            value: function _bindEvents() {
                var _this = this;

                var canvas = this.canvas;
                var startEvent = _isMobile['default'] ? 'touchstart' : 'mousedown';
                var moveEvent = _isMobile['default'] ? 'touchmove' : 'mousemove';
                var endEvent = _isMobile['default'] ? 'touchend' : 'mouseup';

                var lastPosition = {};

                var startHandler = function startHandler(e) {
                    lastPosition = _this._getPosition(e);
                    canvas.addEventListener(moveEvent, moveHandler, false);
                    canvas.addEventListener(endEvent, endHandler, false);
                };
                var moveHandler = function moveHandler(e) {
                    var position = _this._getPosition(e);
                    _this.dip.paint(lastPosition, position);
                    lastPosition = position;
                };
                var endHandler = function endHandler(e) {
                    lastPosition = _this._getPosition(e);
                    canvas.removeEventListener(endEvent, moveHandler, false);
                };

                canvas.addEventListener(startEvent, startHandler, false);
            }
        }, {
            key: '_getPosition',
            value: function _getPosition(e) {
                var touch = _isMobile['default'] ? e.changedTouches[0] : [e];
                return {
                    x: touch.pageX,
                    y: touch.pageY
                };
            }
        }]);

        return Canvas;
    })();

    module.exports = Canvas;
});
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', './canvas.js', './color-picker.js'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('./canvas.js'), require('./color-picker.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Canvas, global.ColorPicker);
    global.index = mod.exports;
  }
})(this, function (exports, _canvasJs, _colorPickerJs) {
  /**
   * @since 15-09-03 10:06
   * @author vivaxy
   */
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Canvas = _interopRequireDefault(_canvasJs);

  var _ColorPicker = _interopRequireDefault(_colorPickerJs);

  var canvas = new _Canvas['default']();
  var colorPicker = new _ColorPicker['default']();

  colorPicker.on('pick', function (color) {
    canvas.setDip(color);
  });
});
