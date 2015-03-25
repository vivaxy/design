/**
 * @since 150115 12:39
 * @author vivaxy
 */

(function (selector, speed, shownLines) {

    (function () {
        var lastTime = 0;
        var vendors = ['webkit', 'moz', 'ms', 'o'];
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
        if (!document.getElementsByClassName) {
            document.getElementsByClassName = function (cls) {
                var els = this.getElementsByTagName('*');
                var ell = els.length;
                var elements = [];
                for (var n = 0; n < ell; n++) {
                    var oCls = els[n].className || '';
                    if (oCls.indexOf(cls) < 0)        continue;
                    oCls = oCls.split(/\s+/);
                    var oCll = oCls.length;
                    for (var j = 0; j < oCll; j++) {
                        if (cls == oCls[j]) {
                            elements.push(els[n]);
                            break;
                        }
                    }
                }
                return elements;
            }
        }
    })();


    var container = document.getElementsByClassName(selector)[0];

    var inner = container.children[0];

    var originalHeight = inner.offsetHeight;

    var tempHeight = 0;
    // record moving status
    var moving = true;
    // record moving count
    var movingCount = 0;

    var divs = inner.children;

    // append lines to the end of the scroll div
    for (var i = 0; i < shownLines; i++) {

        inner.appendChild(divs[i].cloneNode(true));

    }

    var animate = function () {

        if (tempHeight >= originalHeight) {

            tempHeight = 0;

        } else {
            if (movingCount * (inner.children.length - shownLines) >= originalHeight) {
                // moving count larger than one line moving count, which means one line moved
                movingCount = 0;
                moving = !moving;
            }

            movingCount += speed;

            if (moving) {
                tempHeight += speed;
            }

        }

        inner.style.top = '-' + tempHeight + 'px';

        requestAnimationFrame(animate);

    };

    requestAnimationFrame(animate);

})('scroll', 1, 2);
