!(function(e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var i = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          n.d(
            o,
            i,
            function(t) {
              return e[t];
            }.bind(null, i),
          );
      return o;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 3));
})([
  function(e, t, n) {
    'use strict';
    var o, i;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default =
        ((i = !1),
        (o = navigator.userAgent || navigator.vendor || window.opera),
        (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          o,
        ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            o.substr(0, 4),
          )) &&
          (i = !0),
        i));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e.style[n] = t[n]);
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o,
      i = n(0),
      r = (o = i) && o.__esModule ? o : { default: o };
    t.default = function(e) {
      var t = r.default ? e.changedTouches[0] : e;
      return {
        x: t.pageX - e.target.offsetLeft,
        y: t.pageY - e.target.offsetTop,
      };
    };
  },
  function(e, t, n) {
    'use strict';
    var o = r(n(4)),
      i = r(n(6));
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = new o.default();
    new i.default().on('pick', function(e) {
      a.setDip(e);
    });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        return function(t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      })(),
      i = c(n(5)),
      r = c(n(1)),
      a = c(n(0)),
      u = c(n(2));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.height = 90),
          this._createCanvas()
            .setDip({ r: 255, g: 0, b: 0, a: 1 })
            ._bindEvents();
      }
      return (
        o(e, [
          {
            key: '_createCanvas',
            value: function() {
              var e = document.createElement('canvas');
              return (
                (e.width = document.body.clientWidth),
                (e.height = (document.body.clientHeight * this.height) / 100),
                (0, r.default)(e, {
                  display: 'block',
                  width: '100%',
                  height: this.height + '%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }),
                document.body.appendChild(e),
                (this.canvas = e),
                this
              );
            },
          },
          {
            key: 'setDip',
            value: function(e) {
              return (
                delete this.dip,
                (this.dip = new i.default({
                  ctx: this.canvas.getContext('2d'),
                  color: e,
                })),
                this
              );
            },
          },
          {
            key: '_bindEvents',
            value: function() {
              var e = this,
                t = this.canvas,
                n = a.default ? 'touchstart' : 'mousedown',
                o = a.default ? 'touchmove' : 'mousemove',
                i = a.default ? 'touchend' : 'mouseup',
                r = a.default ? 'touchcancel' : 'mouseout',
                c = {},
                s = {},
                l = null,
                d = function(t) {
                  t.preventDefault();
                  var n = (0, u.default)(t);
                  e.dip.paint(s, n),
                    (s = n),
                    e._getDistance(c, n) > 10 && clearTimeout(l);
                },
                f = function(e) {
                  e.preventDefault(),
                    (s = (0, u.default)(e)),
                    t.removeEventListener(o, d, !1),
                    clearTimeout(l);
                };
              return (
                t.addEventListener(
                  n,
                  function(n) {
                    n.preventDefault(),
                      (s = (0, u.default)(n)),
                      (c = (0, u.default)(n)),
                      t.addEventListener(o, d, !1),
                      (l = setTimeout(e._saveCanvas.bind(e), 1e3));
                  },
                  !1,
                ),
                t.addEventListener(i, f, !1),
                t.addEventListener(r, f, !1),
                this
              );
            },
          },
          {
            key: '_saveCanvas',
            value: function() {
              var e = this.canvas,
                t = document.createElement('div');
              (0, r.default)(t, {
                position: 'absolute',
                width: '100%',
                height: 100 - this.height + '%',
                bottom: 0,
                left: 0,
                background: '#fff',
                color: '#000',
                textAlign: 'center',
              }),
                (t.textContent = 'tap and hold the image to save');
              var n = document.createElement('img');
              (0, r.default)(n, {
                position: 'absolute',
                display: 'block',
                width: '100%',
                height: this.height + '%',
                top: 0,
                left: 0,
                background: '#fff',
              }),
                (n.src = e.toDataURL('image/png'));
              var o = [t, n];
              o.forEach(function(e) {
                e.addEventListener(
                  a.default ? 'touchend' : 'click',
                  function() {
                    o.forEach(function(e) {
                      document.body.removeChild(e);
                    });
                  },
                  !1,
                ),
                  document.body.appendChild(e);
              });
            },
          },
          {
            key: '_getDistance',
            value: function(e, t) {
              var n = function(e, t) {
                return Math.pow(e - t, 2);
              };
              return Math.sqrt(n(e.x, t.x) + n(e.y, t.y));
            },
          },
        ]),
        e
      );
    })();
    t.default = s;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    })();
    var i = (function() {
      function e(t) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.ctx =
            t.ctx ||
            (function() {
              throw new Error('ctx must be supplied');
            })()),
          (this.color = t.color),
          (this.color.a = 0.02),
          (this.strokeWidth = t.strokeWidth || 20),
          (this.consumeRate = 1);
      }
      return (
        o(e, [
          {
            key: 'paint',
            value: function(e, t) {
              for (var n = 0; n < 10; n++) this._draw(e)._draw(t);
              return this._consume(), this;
            },
          },
          {
            key: '_draw',
            value: function(e) {
              var t = this.ctx,
                n = this.strokeWidth;
              return (
                t.beginPath(),
                t.arc(
                  e.x + ((Math.random() - 0.5) * n) / 2,
                  e.y + ((Math.random() - 0.5) * n) / 2,
                  n * (Math.random() / 2 + 0.5),
                  0,
                  2 * Math.PI,
                ),
                (t.fillStyle = this._getColor()),
                t.fill(),
                this
              );
            },
          },
          {
            key: '_consume',
            value: function() {
              return (this.color.a *= (100 - this.consumeRate) / 100), this;
            },
          },
          {
            key: '_getColor',
            value: function() {
              var e = this.color;
              return 'rgba(' + e.r + ',' + e.g + ',' + e.b + ',' + e.a + ')';
            },
          },
        ]),
        e
      );
    })();
    t.default = i;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        return function(t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      })(),
      i = c(n(1)),
      r = c(n(0)),
      a = c(n(7)),
      u = c(n(2));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (function(e) {
      function t() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var e = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (
          (e.height = 10),
          e
            ._createCanvas()
            ._addColor()
            ._bindEvent(),
          e
        );
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, e),
        o(t, [
          {
            key: '_createCanvas',
            value: function() {
              var e = document.createElement('canvas');
              return (
                (e.width = document.body.clientWidth),
                (e.height = (document.body.clientHeight * this.height) / 100),
                (0, i.default)(e, {
                  position: 'absolute',
                  width: '100%',
                  height: this.height + '%',
                  bottom: 0,
                  left: 0,
                }),
                document.body.appendChild(e),
                (this.canvas = e),
                (this.ctx = e.getContext('2d')),
                this
              );
            },
          },
          {
            key: '_addColor',
            value: function() {
              var e = this.canvas,
                t = e.width,
                n = e.height,
                o = this.ctx,
                i = o.createLinearGradient(0, 0, t, 0);
              return (
                i.addColorStop(0, 'rgb(255, 0, 0)'),
                i.addColorStop(0.2, 'rgb(255, 255, 0)'),
                i.addColorStop(0.4, 'rgb(0, 255, 0)'),
                i.addColorStop(0.6, 'rgb(0, 255, 255)'),
                i.addColorStop(0.8, 'rgb(0, 0, 255)'),
                i.addColorStop(1, 'rgb(255, 0, 255)'),
                (o.fillStyle = i),
                o.fillRect(0, 0, t, n),
                this
              );
            },
          },
          {
            key: '_bindEvent',
            value: function() {
              var e = this,
                t = this.canvas,
                n = this.ctx;
              return (
                t.addEventListener(
                  r.default ? 'touchend' : 'click',
                  function(t) {
                    t.preventDefault();
                    var o = (0, u.default)(t),
                      i = n.getImageData(o.x, 0, 1, 1).data;
                    e.emit('pick', {
                      r: i[0],
                      g: i[1],
                      b: i[2],
                      a: i[3] / 256,
                    });
                  },
                  !1,
                ),
                t.addEventListener(
                  'touchmove',
                  function(e) {
                    e.preventDefault();
                  },
                  !1,
                ),
                this
              );
            },
          },
        ]),
        t
      );
    })(a.default);
    t.default = s;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    })();
    var i = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.events = {});
      }
      return (
        o(e, [
          {
            key: 'on',
            value: function(e, t) {
              return (
                this.events[e] || (this.events[e] = []),
                this.events[e].push(t),
                this
              );
            },
          },
          {
            key: 'emit',
            value: function(e) {
              var t = this,
                n = this.events[e],
                o = arguments;
              return (
                n &&
                  n.forEach(function(e) {
                    e.apply(t, Array.prototype.slice.call(o, 1));
                  }),
                this
              );
            },
          },
          {
            key: 'off',
            value: function(e, t) {
              return (
                this.events[e] && t
                  ? this.events[e].splice(this.events[e].indexOf(t), 1)
                  : (this.events[e] = []),
                this
              );
            },
          },
        ]),
        e
      );
    })();
    t.default = i;
  },
]);
