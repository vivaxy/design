/**
 * @since 150522 21:08
 * @author vivaxy
 */

var NumberAnimation = function(options) {
    this.container = options.container;
    this.baseNumber = options.baseNumber || 0;
    this.targetNumber = options.targetNumber;
    this.duration = options.duration || 1000;
    this.callback = options.callback;
    this.rate = 0;
    this.stopped = false;
    this.start = new Date().getTime();
    this.end = this.start + this.duration;
    this.animate();
  },
  p = {};

p.animate = function() {
  var _this = this,
    now = new Date().getTime();
  if (now > this.end || this.stopped) {
    this.rate = 1;
    this.render();
    this.callback && this.callback();
  } else {
    this.rate = (now - this.start) / this.duration;
    this.render();
    window.requestAnimationFrame(function() {
      _this.animate.call(_this);
    });
  }
  return this;
};

p.render = function() {
  this.container.innerHTML = numeral(
    (this.targetNumber - this.baseNumber) * this.rate + this.baseNumber,
  ).format('0,0.00');
  return this;
};

p.stop = function() {
  this.stopped = true;
  return this;
};

NumberAnimation.prototype = p;
p.constructor = NumberAnimation;
