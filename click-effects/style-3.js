/**
 * @since 2015-11-18 15:12
 * @author vivaxy
 */
'use strict';
var RippleButton = function (element) {

    element.style.overflow = 'hidden';
    element.addEventListener('touchstart', function (e) {
        e.stopPropagation();
        var rect = element.getBoundingClientRect();
        var ripple = document.createElement('div');
        var rippleStyle = ripple.style;
        var rippleRadius = rect.width;
        if (rect.height > rect.width) {
            rippleRadius = rect.height;
        }
        var animationDuration = 400;

        rippleStyle.position = 'absolute';
        rippleStyle.width = rippleRadius * 2 + 'px';
        rippleStyle.height = rippleRadius * 2 + 'px';
        rippleStyle.borderRadius = '50%';
        rippleStyle.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        rippleStyle.transform = 'scale(0)';

        var touches = e.touches;
        var touch = touches[0];
        var x = touch.offsetX || touch.clientX - rect.left;
        var y = touch.offsetY || touch.clientY - rect.top;
        rippleStyle.left = x - rippleRadius + 'px';
        rippleStyle.top = y - rippleRadius + 'px';

        element.appendChild(ripple);

        setTimeout(function () {
            rippleStyle.transition = 'transform ' + animationDuration + 'ms, background-color ' + animationDuration + 'ms';
            rippleStyle.transform = 'scale(1)';
            rippleStyle.backgroundColor = 'rgba(0, 0, 0, 0)';
            setTimeout(function () {
                element.removeChild(ripple);
            }, animationDuration);
        }, 0);

    });
};

new RippleButton(document.querySelector('.page[data-style="3"] .button'));
