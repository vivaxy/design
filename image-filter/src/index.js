/**
 * @since 15-09-04 12:26
 * @author vivaxy
 */
'use strict';
import Range from './range.js';
import ImageCanvas from './image-canvas.js';
import Canvas from './canvas.js';

let savedChanges = [100, 100, 100, 100];

let canvas = new Canvas();

let range = new Range().on('change', (e) => {
    savedChanges[e.index] = e.value;
    let imageData = imageCanvas.getColorMap();
    let map = Array.prototype.map.call(imageData.data, function (v, i) {
        return v * savedChanges[i % 4] / 100;
    });
    canvas.draw(map, imageData.width, imageData.height);
});

let imageCanvas = new ImageCanvas({
    src: './index.jpg'
}).on('load', () => {
        range.emit('change', {});
    });
