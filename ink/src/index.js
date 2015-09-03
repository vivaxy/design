/**
 * @since 15-09-03 10:06
 * @author vivaxy
 */
'use strict';
import Canvas from './canvas.js';
import ColorPicker from './color-picker.js';

let canvas = new Canvas();
let colorPicker = new ColorPicker();

colorPicker.on('pick', function (color) {
    canvas.setDip(color);
});
