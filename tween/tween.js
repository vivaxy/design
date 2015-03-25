/**
 * @since 150118 13:24
 * @author vivaxy
 */

/**
 * animation class
 * set styles to values according to time
 * support style values containing `px`, `rotateY`, `%`
 * new tween won't be executed until play method called
 * @param {Object} element - target element
 * @param {Object} style_from - which style
 * @param {Object} style_to to - which style
 * @param {Number} time - animation duration
 * @param {Function} [callback] - could be passed in from `play` method, will be called when animation ends
 * @constructor
 */
var Tween = function (element, style_from, style_to, time, callback) {
    this.element = element;
    this.styles = this.getStyle(style_from, style_to);
    this.style_from = this.getStyleValue(this.styles, style_from);
    this.style_to = this.getStyleValue(this.styles, style_to);
    this.time = time;
    this.beginTime = new Date().getTime();
    this.callback = callback || function () {
    };
};

/**
 * play it
 * @param {function} [cb] - callback will be executed when animation ends
 * @returns {Tween}
 */
Tween.prototype.play = function (cb) {
    if (cb) {
        this.callback = cb;
    }
    this.beginTime = new Date().getTime();
    this.loop();
    return this;
};

/**
 * loop method
 * @returns {Tween}
 */
Tween.prototype.loop = function () {
    var now = new Date().getTime();
    if (now < this.beginTime + this.time) {
        for (var i = 0; i < this.styles.length; i++) {
            var styleKey = this.styles[i];
            this.element.style[styleKey] = this.calculateStyle(i, now);
        }
        requestAnimationFrame(this.loop.bind(this));
    } else {
        // make sure final style
        for (var j = 0; j < this.styles.length; j++) {
            this.element.style[this.styles[j]] = this.style_to[j];
        }
        this.callback();
    }
    return this;
};

/**
 * get style keys in common from two styles
 * @param {Object} style1
 * @param {Object} style2
 * @returns {Array} style
 */
Tween.prototype.getStyle = function (style1, style2) {
    var s1 = Object.keys(style1);
    var s2 = Object.keys(style2);
    var result = [];
    for (var i = 0; i < s1.length; i++) {
        if (s2.indexOf(s1[i]) > -1) {
            result.push(s1[i]);
        }
    }
    return result;
};

/**
 * get style values according to the first array param, which contains style key list
 * @param {Array} styles - style key list
 * @param {Object} style_value - style list
 * @returns {Array}
 */
Tween.prototype.getStyleValue = function (styles, style_value) {
    var result = [];
    for (var i = 0; i < styles.length; i++) {
        result.push(style_value[styles[i]]);
    }
    return result;
};

/**
 * calculate style value from string value
 * @param {Number} index - index of the style key list
 * @param {Number} now - this moment
 * @returns {string}
 */
Tween.prototype.calculateStyle = function (index, now) {
    var value_from, value_to, value;
    if (this.style_from[index].indexOf('rotateY') > -1) {
        value_from = parseInt(this.style_from[index].replace('rotateY(', '').replace('deg)', ''));
        value_to = parseInt(this.style_to[index].replace('rotateY(', '').replace('deg)', ''));
        value = value_from + (value_to - value_from) / this.time * (now - this.beginTime);
        return 'rotateY(' + value + 'deg)';
    }
    if (this.style_from[index].indexOf('px') > -1) {
        value_from = parseInt(this.style_from[index].replace('px', ''));
        value_to = parseInt(this.style_to[index].replace('px', ''));
        value = value_from + (value_to - value_from) / this.time * (now - this.beginTime);
        return value + 'px';
    }
    if (this.style_from[index].indexOf('%') > -1){
        value_from = parseInt(this.style_from[index].replace('%', ''));
        value_to = parseInt(this.style_to[index].replace('%', ''));
        value = value_from + (value_to - value_from) / this.time * (now - this.beginTime);
        return value + '%';
    }
    throw new Error('style error');
};
