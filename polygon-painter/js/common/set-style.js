/**
 * @since 2016-01-06 14:20
 * @author vivaxy
 */

let setStyle = (element, pairs) => {

    let style = element.style;

    for (let key in pairs) {
        if (pairs.hasOwnProperty(key)) {
            style[key] = pairs[key];
        }
    }

};

export default setStyle;
