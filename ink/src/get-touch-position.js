/**
 * @since 15-09-03 18:05
 * @author vivaxy
 */
'use strict';
import isMobile from './is-mobile.js';

export default (e) => {
    let touch = isMobile ? e.changedTouches[0] : e;
    return {
        x: touch.pageX - e.target.offsetLeft,
        y: touch.pageY - e.target.offsetTop
    };
};
