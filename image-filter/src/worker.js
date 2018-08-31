/**
 * @since 15-09-06 09:42
 * @author vivaxy
 */

self.addEventListener('message', function(e) {
  let data = e.data;
  let savedColorChanges = data.savedColorChanges;
  let imageData = data.imageData;

  let map = Array.prototype.map.call(imageData.data, (v, i) => v * savedColorChanges[i % 4] / 100);
  let imageDataResult = map.map((v, i, array) => {
    let colorStart = i - i % 4;
    let color = Array.prototype.slice.call(array, colorStart, colorStart + 4);
    let averageColor = (color[0] + color[1] + color[2]) * color[3] / 3 / 255;
    let colorDiff = averageColor - v;
    return v + colorDiff * savedColorChanges[4] / 100;
  });
  self.postMessage({
    imageData: imageDataResult,
    width: imageData.width,
    height: imageData.height
  })
}, false);
