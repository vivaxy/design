!(function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o),
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ''),
    r((r.s = 7));
})({
  7: function(e, t, r) {
    'use strict';
    self.addEventListener(
      'message',
      function(e) {
        var t = e.data,
          r = t.savedColorChanges,
          n = t.imageData,
          o = Array.prototype.map
            .call(n.data, function(e, t) {
              return (e * r[t % 4]) / 100;
            })
            .map(function(e, t, n) {
              var o = t - (t % 4),
                a = Array.prototype.slice.call(n, o, o + 4);
              return (
                e + ((((a[0] + a[1] + a[2]) * a[3]) / 3 / 255 - e) * r[4]) / 100
              );
            });
        self.postMessage({ imageData: o, width: n.width, height: n.height });
      },
      !1,
    );
  },
});
