!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o),
          );
      return r;
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
    n((n.s = 2));
})([
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
    var r = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
    var o = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.events = {});
      }
      return (
        r(e, [
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
                r = arguments;
              return (
                n &&
                  n.forEach(function(e) {
                    e.apply(t, Array.prototype.slice.call(r, 1));
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
    t.default = o;
  },
  function(e, t, n) {
    'use strict';
    var r = u(n(3)),
      o = u(n(4)),
      i = u(n(5)),
      a = u(n(6));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = [100, 100, 100, 255, 0],
      l = new o.default(),
      s = new i.default(),
      f = new Worker('./dist/worker.js');
    f.addEventListener(
      'message',
      function(e) {
        var t = e.data;
        l.draw(t.imageData, t.width, t.height), s.hide();
      },
      !1,
    );
    var d = new r.default().on('change', function(e) {
        s.show(), (c[e.index] = e.value);
        var t = h.getColorMap();
        f.postMessage({ savedColorChanges: c, imageData: t });
      }),
      h = new a.default({ src: './index.jpg' }).on('load', function() {
        d.emit('change', {});
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      o = i(n(0));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (function(e) {
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
          (e.top = 40),
          (e.totalHeight = 60),
          (e.count = 5),
          (e.height = e.totalHeight / e.count),
          e._initialize(),
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
        r(t, [
          {
            key: '_initialize',
            value: function() {
              return (
                this._addRangeInput(0, '#f00', 0, 200, 100)
                  ._addRangeInput(1, '#0f0', 0, 200, 100)
                  ._addRangeInput(2, '#00f', 0, 200, 100)
                  ._addRangeInput(3, '#000', 0, 100, 100)
                  ._addRangeInput(4, '#999'),
                this
              );
            },
          },
          {
            key: '_addRangeInput',
            value: function(e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                r = this,
                i =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 100,
                a =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : 0,
                u = this.height,
                c = document.createElement('input');
              return (
                (c.type = 'range'),
                (c.min = n),
                (c.max = i),
                (c.value = a),
                (0, o.default)(c, {
                  width: '100%',
                  height: u + '%',
                  position: 'absolute',
                  top: this.top + u * e + '%',
                  left: 0,
                  margin: 0,
                  border: 'none',
                  borderRadius: 0,
                  webkitAppearance: 'none',
                  display: 'block',
                  background: t,
                  outline: 'none',
                }),
                c.addEventListener(
                  'change',
                  function(t) {
                    r.emit('change', {
                      index: e,
                      value: parseInt(t.target.value),
                    });
                  },
                  !1,
                ),
                document.body.appendChild(c),
                this
              );
            },
          },
        ]),
        t
      );
    })(i(n(1)).default);
    t.default = a;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r,
      o = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      i = n(0),
      a = (r = i) && r.__esModule ? r : { default: r };
    var u = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.height = 40),
          this._createCanvas();
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
                (0, a.default)(e, {
                  display: 'block',
                  width: '100%',
                  height: this.height + '%',
                  position: 'absolute',
                  top: 0,
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
            key: 'draw',
            value: function(e, t, n) {
              var r = this.ctx.createImageData(t, n);
              return (
                e.forEach(function(e, t) {
                  r.data[t] = e;
                }),
                this.ctx.putImageData(r, 0, 0),
                this
              );
            },
          },
        ]),
        e
      );
    })();
    t.default = u;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    var i = (function() {
      function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : document.querySelector('loading');
        o(this, e), (this.container = t);
      }
      return (
        r(e, [
          {
            key: 'show',
            value: function() {
              this.container.classList.remove('hide');
            },
          },
          {
            key: 'hide',
            value: function() {
              this.container.classList.add('hide');
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
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      o = i(n(0));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (function(e) {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var n = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (n.height = 40), n._createCanvas().setImage(e.src), n;
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
        r(t, [
          {
            key: '_createCanvas',
            value: function() {
              var e = document.createElement('canvas');
              return (
                (e.width = document.body.clientWidth),
                (e.height = (document.body.clientHeight * this.height) / 100),
                (0, o.default)(e, {
                  display: 'none',
                  width: '100%',
                  height: this.height + '%',
                  position: 'absolute',
                  top: 0,
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
            key: 'setImage',
            value: function(e) {
              var t = this,
                n = this.canvas,
                r = this.ctx,
                o = new Image();
              return (
                (o.src = e),
                o.addEventListener(
                  'load',
                  function() {
                    r.drawImage(
                      o,
                      0,
                      0,
                      o.width,
                      o.height,
                      0,
                      0,
                      n.width,
                      n.height,
                    ),
                      t.emit('load');
                  },
                  !1,
                ),
                this
              );
            },
          },
          {
            key: 'getColorMap',
            value: function() {
              var e = this.canvas;
              return this.ctx.getImageData(0, 0, e.width, e.height);
            },
          },
        ]),
        t
      );
    })(i(n(1)).default);
    t.default = a;
  },
]);
