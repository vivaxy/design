/**
 * @since 15-09-04 12:26
 * @author vivaxy
 */
'use strict';
import Range from './range.js';
import ImageCanvas from './image-canvas.js';
import Canvas from './canvas.js';

let savedColorChanges = [100, 100, 100, 255, 0];

let canvas = new Canvas();

let range = new Range()
    .on('change', (e) => {
        savedColorChanges[e.index] = e.value;
        let imageData = imageCanvas.getColorMap();
        let map = Array.prototype.map.call(imageData.data, function (v, i) {
            return v * savedColorChanges[i % 4] / 100;
        });
        // grey scale
        canvas.draw(map.map((v, i, array) => {
            let colorStart = i - i % 4;
            let color = Array.prototype.slice.call(array, colorStart, colorStart + 4);
            let averageColor = (color[0] + color[1] + color[2]) * color[3] / 3 / 255;
            let colorDiff = averageColor - v;
            return v + colorDiff * savedColorChanges[4] / 100;
        }), imageData.width, imageData.height);
    });

let imageCanvas = new ImageCanvas({
    src: './index.jpg'
})
    .on('load', () => {
        range.emit('change', {});
    });
