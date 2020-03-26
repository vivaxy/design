/**
 * @since 2020-03-15 02:14
 * @author vivaxy
 */
import * as cssFont from './css-font.js';

export default function createResizedCanvasRenderingContext2D(context, r) {
  console.assert(context, 'Invalid context');
  console.assert(r, 'Invalid ratio');

  /**
   * g: get
   * s: set
   * f: function
   * v: value
   * x: dynamic value
   * n: static value
   * a: dynamic array value
   */

  function gfn(target, name) {
    return function(n0) {
      return target[name](n0);
    };
  }

  function gfxxxx(target, name) {
    return function(x0, x1, x2, x3) {
      return target[name](x0 / r, x1 / r, x2 / r, x3 / r);
    };
  }

  function gfnxxy(target, name) {
    return function(n0, x1, x2, y3) {
      return target[name](
        n0,
        x1 / r,
        x2 / r,
        y3 === undefined ? undefined : y3 / r,
      );
    };
  }

  function gfa(target, name) {
    return function() {
      return target[name]().map(function(v) {
        return v / r;
      });
    };
  }

  function gvx(target, name) {
    return target[name] / r;
  }

  function gvn(target, name) {
    return target[name];
  }

  function sfa(target, name, value) {
    return target[name](
      value.map(function(v) {
        return v * r;
      }),
    );
  }

  function svx(target, name, value) {
    return (target[name] = value * r);
  }

  function svn(target, name, value) {
    return (target[name] = value);
  }

  const getHandlers = {
    clearRect: gfxxxx,
    fillRect: gfxxxx,
    strokeRect: gfxxxx,
    fillText: gfnxxy,
    strokeText: gfnxxy,
    measureText: gfn,
    lineWidth: gvx,
    lineCap: gvn,
    lineJoin: gvn,
    miterLimit: gvn,
    getLineDash: gfa,
    lineDashOffset: gvx,
    font(target) {},
  };

  const setHandlers = {
    lineWidth: svx,
    lineCap: svn,
    lineJoin: svn,
    miterLimit: svn,
    setLineDash: sfa,
    lineDashOffset: svx,
    font(target, value) {},
  };

  return new Proxy(context, {
    get(target, name) {
      console.assert(name in target, `no ${name}`);
      console.assert(name in getHandlers, `${name} not implemented`);
      return getHandlers[name](target, name);
    },
    set(target, name, value) {
      console.assert(name in target, `no ${name}`);
      console.assert(name in getHandlers, `${name} not implemented`);
      return setHandlers[name](target, name, value);
    },
  });
}
