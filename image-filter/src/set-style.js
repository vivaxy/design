/**
 * @since 15-09-03 12:11
 * @author vivaxy
 */
'use strict';
export default (element, styleObject) => {
    for (let key in styleObject) {
        if (styleObject.hasOwnProperty(key)) {
            element.style[key] = styleObject[key];
        }
    }
};
