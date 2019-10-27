/**
 * @since 2019-10-27 04:23
 * @author vivaxy
 * TODO: save
 */
const $output = document.getElementById('output');
const $uploadImage = document.getElementById('upload-image');
const $uploadWatermark = document.getElementById('upload-watermark');
const $previewWatermark = document.getElementById('preview-watermark');

const $selectXAnchor = document.getElementById('select-x-anchor');
const $setXOffset = document.getElementById('set-x-offset');

const $selectYAnchor = document.getElementById('select-y-anchor');
const $setYOffset = document.getElementById('set-y-offset');

const $selectSizeAnchor = document.getElementById('select-size-anchor');
const $setSizeRatio = document.getElementById('set-size-ratio');

const $setOpacity = document.getElementById('set-opacity');

let state = null;
loadState();
renderState();

$previewWatermark.addEventListener('load', function() {
  state.watermark = $previewWatermark;
  updateOutput();
});

$uploadImage.addEventListener('change', async function(e) {
  const dataURL = await getDataURLFromFile(e.target.files[0]);
  state.image = await getImageFromDataURL(dataURL);
  updateOutput();
});

$uploadWatermark.addEventListener('change', async function(e) {
  const dataURL = await getDataURLFromFile(e.target.files[0]);
  $previewWatermark.src = dataURL;
});

$selectXAnchor.addEventListener('change', function(e) {
  state.xAnchor = e.target.value;
  updateOutput();
});

$setXOffset.addEventListener('change', function(e) {
  state.xOffset = Number(e.target.value);
  updateOutput();
});

$setYOffset.addEventListener('change', function(e) {
  state.yAnchor = e.target.value;
  updateOutput();
});

$setYOffset.addEventListener('change', function(e) {
  state.yOffset = Number(e.target.value);
  updateOutput();
});

$selectSizeAnchor.addEventListener('change', function(e) {
  state.sizeAnchor = e.target.value;
  updateOutput();
});

$setSizeRatio.addEventListener('change', function(e) {
  state.sizeRatio = Number(e.target.value);
  updateOutput();
});

$setOpacity.addEventListener('change', function(e) {
  state.opacity = Number(e.target.value);
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

function loadState() {
  const data = localStorage.getItem(location.pathname);
  if (data) {
    try {
      state = JSON.parse(data);
    } catch (e) {
      setDefaultState();
    }
  } else {
    setDefaultState();
  }
}

function setDefaultState() {
  state = {
    image: null,
    watermark: null,
    xAnchor: $selectXAnchor.value,
    xOffset: Number($setXOffset.value),
    yAnchor: $selectYAnchor.value,
    yOffset: Number($setYOffset.value),
    sizeAnchor: $selectSizeAnchor.value,
    sizeRatio: Number($setSizeRatio.value),
    opacity: Number($setOpacity.value),
  };
}

function renderState() {
  // TODO: sync state to html
}

function saveState() {
  localStorage.setItem(
    location.pathname,
    JSON.stringify({
      ...state,
      image: state.image.src,
      watermark: state.watermark.src,
    }),
  );
}

function updateOutput() {
  saveState();

  if (!state.image) {
    return;
  }
  const ctx = $output.getContext('2d');
  const {
    image,
    watermark,
    sizeAnchor,
    sizeRatio,
    xAnchor,
    xOffset,
    yAnchor,
    yOffset,
    opacity,
  } = state;
  $output.width = image.width;
  $output.height = image.height;
  $output.style.height =
    ($output.offsetWidth / image.width) * image.height + 'px';
  ctx.drawImage(image, 0, 0);

  if (watermark) {
    const { x, y, w, h } = getWatermarkDrawParams(
      image,
      watermark,
      sizeAnchor,
      sizeRatio,
      xAnchor,
      xOffset,
      yAnchor,
      yOffset,
    );
    ctx.globalAlpha = opacity;
    ctx.drawImage(watermark, x, y, w, h);
    ctx.globalAlpha = 1;
  }
}

function getWatermarkDrawParams(
  image,
  watermark,
  sizeAnchor,
  sizeRatio,
  xAnchor,
  xOffset,
  yAnchor,
  yOffset,
) {
  const watermarkScaledSize = getWatermarkScaledSize(
    image,
    watermark,
    sizeAnchor,
    sizeRatio,
  );
  return {
    x: getWatermarkX(image, watermarkScaledSize, xAnchor, xOffset),
    y: getWatermarkY(image, watermarkScaledSize, yAnchor, yOffset),
    w: watermarkScaledSize.width,
    h: watermarkScaledSize.height,
  };
}

function getWatermarkScaledSize(image, watermark, sizeAnchor, sizeRatio) {
  const watermarkScale = getWatermarkScale(
    image,
    watermark,
    sizeAnchor,
    sizeRatio,
  );
  return {
    width: watermark.width * watermarkScale,
    height: watermark.height * watermarkScale,
  };
}

function getWatermarkScale(image, watermark, sizeAnchor, sizeRatio) {
  switch (sizeAnchor) {
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
      throw new Error('Unexpected sizeAnchor: ' + sizeAnchor);
  }
}

function getWatermarkX(image, watermarkScaledSize, xAnchor, xOffset) {
  switch (xAnchor) {
    case 'Left':
      return xOffset;
    case 'Center':
      return xOffset + image.width / 2 - watermarkScaledSize.width / 2;
    case 'Right':
      return image.width - watermarkScaledSize.width - xOffset;
    default:
      throw new Error('Unexpected xAnchor: ' + xAnchor);
  }
}

function getWatermarkY(image, watermarkScaledSize, yAnchor, yOffset) {
  switch (yAnchor) {
    case 'Top':
      return yOffset;
    case 'Center':
      return yOffset + image.height / 2 - watermarkScaledSize.height / 2;
    case 'Bottom':
      return image.height - watermarkScaledSize.height - yOffset;
    default:
      throw new Error('Unexpected yAnchor: ' + yAnchor);
  }
}
