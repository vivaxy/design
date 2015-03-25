/**
 * @since 150115 12:39
 * @author vivaxy
 */

(function (selector, speed) {

    var polyfill = function () {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function (callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }

        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
        }
    };

    var container = document.querySelector(selector);
    var containerWidth = 0;
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;
    var left = 0;

    var init = function () {

        polyfill();

        var divs = document.querySelectorAll(selector + ' div');

        container.style.width = 99999999999999 + 'px';

        for (var i = 0; i < divs.length; i++) {
            var div = divs[i];
            // div.style.minWidth = screenWidth + 'px';
            // 超过min-width的情况，宽度会大于实际宽度，大约是0.5
            // inline-block 和 float 不一致
            // http://www.w3cplus.com/css/inline-blocks.html
            // http://www.w3cplus.com/css/fighting-the-space-between-inline-block-elements
            // if (span.offsetWidth > screenWidth){
            // containerWidth += (div.offsetWidth / screenWidth - 1); // 待商榷，动态取宽度，与实际值有误差
            // }
            containerWidth += div.offsetWidth + 1;

            // if (div.offsetWidth > screenWidth){
            div.style.width = div.offsetWidth + screenWidth * .8 + 'px';
            containerWidth += screenWidth * .8;
            // }
        }

        container.appendChild(divs[0].cloneNode(true));
        container.style.width = containerWidth + divs[0].offsetWidth + 'px';

        left = 0;

    };

    var animate = function () {

        if (left < -containerWidth) {
            left = 0;
        } else {
            left -= speed;
        }

        container.style.left = left + 'px';
        requestAnimationFrame(animate);

    };
//document.addEventListener('DOMContentLoaded', cb, false);
    init();

    requestAnimationFrame(animate);

})('.scroll', 0.5);
