/**
 * @since 15-09-03 10:06
 * @author vivaxy
 */
import Canvas from './canvas.js';
import ColorPicker from './color-picker.js';

let canvas = new Canvas();
let colorPicker = new ColorPicker();

colorPicker.on('pick', function(_, color) {
  canvas.setDip(color);
});
