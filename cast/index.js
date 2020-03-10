!(function(t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var r = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          n.d(
            i,
            r,
            function(e) {
              return t[e];
            }.bind(null, r),
          );
      return i;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 0));
})([
  function(t, e, n) {
    'use strict';
    var i,
      r = n(1),
      o = (i = r) && i.__esModule ? i : { default: i };
    var u = ['author : vivaxy', 'date : 2015-04-25'],
      a = function() {};
    u.forEach(function(t, e) {
      a = (function(t, e) {
        return function() {
          new o.default(u[t]).end(e);
        };
      })(u.length - e - 1, a);
    }),
      setInterval(a, 5e3);
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i,
      r = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        return function(e, n, i) {
          return n && t(e.prototype, n), i && t(e, i), e;
        };
      })(),
      o = n(2),
      u = (i = o) && i.__esModule ? i : { default: i };
    var a = (function() {
      function t(e) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.text = e),
          (this.parent = document.body),
          this.render().start();
      }
      return (
        r(t, [
          {
            key: 'render',
            value: function() {
              var t = document.createElement('div'),
                e = t.style;
              return (
                (t.innerText = this.text),
                (e.position = 'fixed'),
                (e.height = '16px'),
                (e.lineHeight = '16px'),
                (e.width = '100%'),
                (e.textAlign = 'center'),
                (e.bottom = '-16px'),
                this.parent.appendChild(t),
                (this.element = t),
                this
              );
            },
          },
          {
            key: 'start',
            value: function() {
              var t = this;
              return (
                new u.default(this.element)
                  .animate({
                    style: 'bottom',
                    from: -16,
                    to: 0,
                    getValue: function(t) {
                      return t + 'px';
                    },
                    duration: 500,
                  })
                  .on('end', function() {
                    new u.default(t.element)
                      .animate({
                        style: 'bottom',
                        from: 0,
                        to: 0,
                        getValue: function(t) {
                          return t + 'px';
                        },
                        duration: 500,
                      })
                      .on('end', function() {
                        new u.default(t.element)
                          .animate({
                            style: 'letterSpacing',
                            from: 0,
                            to: 10,
                            getValue: function(t) {
                              return t + 'px';
                            },
                            duration: 500,
                          })
                          .start(),
                          new u.default(t.element)
                            .animate({
                              style: 'opacity',
                              from: 1,
                              to: 0,
                              getValue: function(t) {
                                return t;
                              },
                              duration: 500,
                            })
                            .on('end', function() {
                              t.parent.removeChild(t.element), t.callback();
                            })
                            .start();
                      })
                      .start();
                  })
                  .start(),
                this
              );
            },
          },
          {
            key: 'end',
            value: function(t) {
              return (this.callback = t), this;
            },
          },
        ]),
        t
      );
    })();
    e.default = a;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i,
      r = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        return function(e, n, i) {
          return n && t(e.prototype, n), i && t(e, i), e;
        };
      })(),
      o = n(3);
    function u(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function a(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
    }
    var s = (function(t) {
      function e(t) {
        u(this, e);
        var n = a(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, arguments),
        );
        return (n.element = t), (n._events = {}), (n._animating = !1), n;
      }
      return (
        (function(t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof e,
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        })(e, t),
        r(e, [
          {
            key: 'animate',
            value: function(t) {
              return (
                (this.style = t.style),
                (this.from = t.from),
                (this.to = t.to),
                (this.duration = t.duration),
                (this.getValue =
                  t.getValue ||
                  function(t) {
                    return t;
                  }),
                this
              );
            },
          },
          {
            key: 'start',
            value: function() {
              return (
                this._animating ||
                  ((this._animating = !0),
                  (this._beginTime = new Date().getTime()),
                  this._loop()),
                this
              );
            },
          },
          {
            key: '_loop',
            value: function() {
              var t = new Date().getTime();
              if (this._animating)
                if (t < this._beginTime + this.duration) {
                  var e =
                    this.from +
                    ((this.to - this.from) * (t - this._beginTime)) /
                      this.duration;
                  (this.element.style[this.style] = this.getValue(e)),
                    this.emit('frame', e),
                    window.requestAnimationFrame(this._loop.bind(this));
                } else
                  (this.element.style[this.style] = this.getValue(this.to)),
                    this.emit('end');
            },
          },
          {
            key: 'pause',
            value: function() {
              this._animating = !1;
              var t = new Date().getTime() - this._beginTime;
              return (
                (this.from =
                  this.from + ((this.to - this.from) * t) / this.duration),
                (this.duration = this.duration - t),
                this
              );
            },
          },
        ]),
        e
      );
    })(((i = o) && i.__esModule ? i : { default: i }).default);
    e.default = s;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = (function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })();
    var r = (function() {
      function t() {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.events = {});
      }
      return (
        i(t, [
          {
            key: 'on',
            value: function(t, e) {
              return (
                this.events[t] || (this.events[t] = []),
                this.events[t].push(e),
                this
              );
            },
          },
          {
            key: 'emit',
            value: function(t) {
              var e = this,
                n = this.events[t],
                i = arguments;
              return (
                n &&
                  n.forEach(function(t) {
                    t.apply(e, Array.prototype.slice.call(i, 1));
                  }),
                this
              );
            },
          },
          {
            key: 'off',
            value: function(t, e) {
              return (
                this.events[t] && e
                  ? this.events[t].splice(this.events[t].indexOf(e), 1)
                  : (this.events[t] = []),
                this
              );
            },
          },
        ]),
        t
      );
    })();
    e.default = r;
  },
]);
