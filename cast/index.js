/**
 * @since 150425 18:30
 * @author vivaxy
 */
'use strict';
var data = ['author : vivaxy', 'date : 2015-04-25'];

var Cast = function (text) {
    this.text = text;
    this.parent = document.body;
    this.render();
    this.start();
}, p = {};
Cast.prototype = p;

p.render = function () {
    this.element = document.createElement('div');
    this.element.innerText = this.text;
    this.element.style.position = 'fixed';
    this.element.style.height = '16px';
    this.element.style.lineHeight = '16px';
    this.element.style.width = '100%';
    this.element.style.textAlign = 'center';
    this.element.style.bottom = '-16px';
    this.parent.appendChild(this.element);
};

p.start = function () {
    var _this = this;
    new Tween(this.element)
        .animate({
            style: 'bottom',
            from: -16,
            to: 0,
            getValue: function (v) {
                return v + 'px';
            },
            duration: 500
        })
        .on('end', function () {
            new Tween(_this.element)
                .animate({
                    style: 'buttom',
                    from: 0,
                    to: 0,
                    getValue: function (v) {
                        return v + 'px';
                    },
                    duration: 500
                })
                .on('end', function () {
                    new Tween(_this.element)
                        .animate({
                            style: 'letterSpacing',
                            from: 0,
                            to: 10,
                            getValue: function (v) {
                                return v + 'px';
                            },
                            duration: 500
                        })
                        .start();
                    new Tween(_this.element)
                        .animate({
                            style: 'opacity',
                            from: 1,
                            to: 0,
                            getValue: function (v) {
                                return v;
                            },
                            duration: 500
                        })
                        .on('end', function () {
                            _this.parent.removeChild(_this.element);
                            _this.callback();
                        })
                        .start();
                })
                .start();
        })
        .start();
};

p.end = function (callback) {
    this.callback = callback;
};

var callbackFactory = function (index, callback) {
    return function () {
        new Cast(data[index]).end(callback);
    };
};

var cb = function () {
};

data.forEach(function (value, index) {
    cb = callbackFactory(data.length - index - 1, cb);
});

setInterval(cb, 5000);
