/**
 * @since 2023-10-09
 * @author vivaxy
 */
import * as E from '../enums/events.js';

const NS = 'http://www.w3.org/2000/svg';

function createRect({ backgroundColor, backgroundOpacity }) {
  const rect = document.createElementNS(NS, 'rect');
  rect.setAttribute('width', '100%');
  rect.setAttribute('height', '100%');
  rect.setAttribute('fill', backgroundColor);
  rect.setAttribute('fill-opacity', String(backgroundOpacity / 100));
  return rect;
}

function createText(
  { text, textSize, textColor, textFont, x, y, lineId },
  index,
) {
  const $text = document.createElementNS(NS, 'text');
  $text.setAttribute('font-size', textSize);
  $text.setAttribute('fill', textColor);
  $text.setAttribute('text-anchor', 'middle');
  $text.setAttribute('dominant-baseline', 'middle');
  $text.setAttribute('x', `${x}%`);
  $text.setAttribute('y', `${y}%`);
  $text.setAttribute('filter', `url(#shadow-${index})`);
  $text.setAttribute('style', `font-family: ${textFont};`);
  $text.setAttribute('data-line-id', lineId);
  $text.textContent = text;
  return $text;
}

function createShadowFilter(
  { textShadowColor, textShadowOpacity, textShadowDeviation },
  index,
) {
  const filter = document.createElementNS(NS, 'filter');
  filter.setAttribute('id', `shadow-${index}`);
  const feDropShadow = document.createElementNS(NS, 'feDropShadow');
  feDropShadow.setAttribute('dx', '0');
  feDropShadow.setAttribute('dy', '0');
  feDropShadow.setAttribute('stdDeviation', textShadowDeviation);
  feDropShadow.setAttribute('flood-opacity', String(textShadowOpacity / 100));
  feDropShadow.setAttribute('flood-color', textShadowColor);
  filter.appendChild(feDropShadow);
  return filter;
}

function createDesc() {
  const desc = document.createElementNS(NS, 'desc');
  desc.textContent =
    'Designed with Icon Generator - vivaxy. https://vivaxy.github.io/design/icon-generator/';
  return desc;
}

function createSVG(values) {
  const { width, height } = values.background;
  const $svg = document.createElementNS(NS, 'svg');
  $svg.setAttribute('width', width);
  $svg.setAttribute('height', height);
  $svg.setAttribute('style', `width: ${width}px; height: ${height}px;`);

  const $rect = createRect(values.background);
  const $desc = createDesc();
  $svg.appendChild($desc);
  $svg.appendChild($rect);
  values.texts.forEach(function (textLineValues, index) {
    const $text = createText(textLineValues, index);
    const shadowFilter = createShadowFilter(textLineValues, index);
    $svg.appendChild(shadowFilter);
    $svg.appendChild($text);
  });
  return $svg;
}

function loadImage(url) {
  return new Promise(function (resolve, reject) {
    const $img = document.createElement('img');
    $img.addEventListener('load', function () {
      resolve($img);
    });
    $img.addEventListener('error', function (e) {
      reject(e);
    });
    $img.src = url;
  });
}

function getSVGImageURL(svg) {
  const DATA_HEADER = 'data:image/svg+xml;utf8';
  const xml = new XMLSerializer().serializeToString(svg);
  return `${DATA_HEADER},${encodeURIComponent(xml)}`;
}

export default {
  init(events) {
    const $svgContainer = document.getElementById('svg');

    async function handleInputValueChange(values) {
      const { width, height } = values;
      const $svg = createSVG(values);
      $svgContainer.style.width = `${width}px`;
      $svgContainer.style.height = `${height}px`;
      $svgContainer.replaceChildren($svg);

      const svgURL = getSVGImageURL($svgContainer.querySelector('svg'));
      const $img = await loadImage(svgURL);

      const $canvas = document.createElement('canvas');
      $canvas.width = $img.width * window.devicePixelRatio;
      $canvas.height = $img.height * window.devicePixelRatio;
      const ctx = $canvas.getContext('2d');
      ctx.drawImage($img, 0, 0, $canvas.width, $canvas.height);
      const pngURL = $canvas.toDataURL('image/png', 1);
      events.emit(E.DOWNLOAD_URL_CHANGE, {
        svgURL,
        pngURL,
        fileName: encodeURIComponent(values.text),
      });
    }

    events.on(E.FORM_VALUES_CHANGE, handleInputValueChange);
  },
};
