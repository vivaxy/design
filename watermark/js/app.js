/**
 * @since 2019-10-27 04:23
 * @author vivaxy
 */
const $output = document.getElementById('output');
const $uploadImage = document.getElementById('upload-image');
const $uploadWatermark = document.getElementById('upload-watermark');
const $previewWatermark = document.getElementById('preview-watermark');

const $selectPositionX = document.getElementById('select-position-x');
const $setPositionXOffset = document.getElementById('set-position-x-offset');

const $selectPositionY = document.getElementById('select-position-y');
const $setPositionYOffset = document.getElementById('set-position-y-offset');

const $selectSize = document.getElementById('select-size');
const $setSize = document.getElementById('set-size');

const $setOpacity = document.getElementById('set-opacity');

const state = {
  image: null,
  watermark: null,
  x: $selectPositionX.value,
  xOffset: Number($setPositionXOffset.value),
  y: $selectPositionY.value,
  yOffset: Number($setPositionYOffset.value),
  size: $selectSize.value,
  sizeRatio: Number($setSize.value),
  opacity: Number($setOpacity.value),
};

$uploadImage.addEventListener('change', async function(e) {
  const dataURL = await getDataURLFromFile(e.target.files[0]);
  state.image = await getImageFromDataURL(dataURL);
  updateOutput();
});

$uploadWatermark.addEventListener('change', async function(e) {
  const dataURL = await getDataURLFromFile(e.target.files[0]);
  $previewWatermark.src = dataURL;
  state.watermark = await getImageFromDataURL(dataURL);
});

function getDataURLFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', function(e) {
      resolve(e.target.result);
    });
    reader.readAsDataURL(file);
  });
}

function getImageFromDataURL(dataURL) {
  return new Promise(function(resolve, reject) {
    const image = new Image();
    image.addEventListener('load', function() {
      resolve(image);
    });
    image.src = dataURL;
  });
}

function updateOutput() {
  const ctx = $output.getContext('2d');
  const { image, watermark } = state;
  $output.width = image.width;
  $output.height = image.height;
  $output.style.height =
    ($output.offsetWidth / image.width) * image.height + 'px';
  ctx.drawImage(image, 0, 0);

  if (watermark) {
    ctx.drawImage(watermark, left, top, width, height);
  }
}
