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
  updateOutput();
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
  const { image, watermark, size, sizeRatio, x, xOffset, y, yOffset } = state;
  $output.width = image.width;
  $output.height = image.height;
  $output.style.height =
    ($output.offsetWidth / image.width) * image.height + 'px';
  ctx.drawImage(image, 0, 0);

  if (watermark) {
    const { x: x0, y: y0, width, height } = getWatermarkDrawParams(
      image,
      watermark,
      size,
      sizeRatio,
      x,
      xOffset,
      y,
      yOffset,
    );
    ctx.drawImage(watermark, x0, y0, width, height);
  }
}

function getWatermarkDrawParams(
  image,
  watermark,
  size,
  sizeRatio,
  x,
  xOffset,
  y,
  yOffset,
) {
  const watermarkScaledSize = getWatermarkScaledSize(
    image,
    watermark,
    size,
    sizeRatio,
  );
  return {
    x: getWatermarkX(image, watermarkScaledSize, x, xOffset),
    y: getWatermarkY(image, watermarkScaledSize, y, yOffset),
    width: watermarkScaledSize.width,
    height: watermarkScaledSize.height,
  };
}

function getWatermarkScaledSize(image, watermark, size, sizeRatio) {
  const watermarkScale = getWatermarkScale(image, watermark, size, sizeRatio);
  return {
    width: watermark.width * watermarkScale,
    height: watermark.height * watermarkScale,
  };
}

function getWatermarkScale(image, watermark, size, sizeRatio) {
  switch (size) {
    case 'Area':
      return Math.sqrt(
        (image.width * image.height * sizeRatio) /
          watermark.width /
          watermark.height,
      );
    case 'Width':
      return (image.width * sizeRatio) / watermark.width;
    case 'Height':
      return (image.height * sizeRatio) / watermark.height;
    default:
      throw new Error('Unexpected size: ' + size);
  }
}

function getWatermarkX(image, watermarkScaledSize, x, xOffset) {
  switch (x) {
    case 'Left':
      return xOffset;
    case 'Center':
      return xOffset + image.width / 2 - watermarkScaledSize.width / 2;
    case 'Right':
      return image.width - watermarkScaledSize.width - xOffset;
    default:
      throw new Error('Unexpected x: ' + x);
  }
}

function getWatermarkY(image, watermarkScaledSize, y, yOffset) {
  switch (y) {
    case 'Top':
      return yOffset;
    case 'Center':
      return yOffset + image.height / 2 - watermarkScaledSize.height / 2;
    case 'Bottom':
      return image.height - watermarkScaledSize.height - yOffset;
    default:
      throw new Error('Unexpected y: ' + y);
  }
}
