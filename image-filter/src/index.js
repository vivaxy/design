/**
 * @since 15-09-04 12:26
 * @author vivaxy
 */
'use strict';
import Range from './range.js';
import Canvas from './canvas.js';
import Loading from './loading.js';
import ImageCanvas from './image-canvas.js';

let savedColorChanges = [100, 100, 100, 255, 0];

let canvas = new Canvas();
let loading = new Loading();
let worker = new Worker('./dist/worker.js');

worker.addEventListener('message', (e) => {
    let data = e.data;
    canvas.draw(data.imageData, data.width, data.height);
    loading.hide();
}, false);

let range = new Range()
    .on('change', (e) => {
        loading.show();
        savedColorChanges[e.index] = e.value;
        let imageData = imageCanvas.getColorMap();
        worker.postMessage({
            savedColorChanges: savedColorChanges,
            imageData: imageData
        });
    });

let imageCanvas = new ImageCanvas({
    src: './index.jpg'
})
    .on('load', () => {
        range.emit('change', {});
    });
