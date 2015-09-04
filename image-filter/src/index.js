/**
 * @since 15-09-04 12:26
 * @author vivaxy
 */
'use strict';
import Canvas from './canvas.js';

let canvas = new Canvas();
let range = new Range();

let image = new Image();
image.src = './index.jpg';
image.addEventListener('load', ()=> {
    canvas.setImage(image);
}, false);

range.on('change', function () {

});
