/**
 * @since 20180613 20:16
 * @author vivaxy
 */
import * as eventTypes from '../enums/event-types.js';
import * as layerIndexes from '../enums/layer-indexes.js';
import Button from '../class/button.js';

function init(events) {
  // https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=6596
  const clearButton = new Button({
    label: 'Clear',
    image: createImage('./assets/clear.png'),
    left: 0,
    top: 0,
    width: 32,
    height: 32,
  });
  const deleteButton = new Button({
    label: 'Delete',
    image: createImage('./assets/delete.png'),
    left: 0,
    top: 32,
    width: 32,
    height: 32,
  });

  events.on(eventTypes.ON_RENDER_PREPARING, onRenderPreparing);
  events.on(eventTypes.ON_CANVAS_TOUCH_START, onCanvasTouchStart);
  events.on(eventTypes.ON_CANVAS_TOUCH_END, onCanvasTouchEnd);

  function onRenderPreparing(eventId, eventData) {
    eventData.layers.push({
      layerIndex: layerIndexes.BUTTON,
      actions: clearButton.render(),
    });
    eventData.layers.push({
      layerIndex: layerIndexes.BUTTON,
      actions: deleteButton.render(),
    });
  }

  let startWithInButton = null;

  function onCanvasTouchStart(eventId, eventData) {
    if (clearButton.coordsInButton(eventData)) {
      startWithInButton = clearButton;
      eventData.button = clearButton;
    } else if (deleteButton.coordsInButton(eventData)) {
      startWithInButton = deleteButton;
      eventData.button = deleteButton;
    }
  }

  function onCanvasTouchEnd(eventId, eventData) {
    if (startWithInButton) {
      if (startWithInButton.coordsInButton(eventData)) {
        eventData.button = startWithInButton;

        if (startWithInButton === clearButton) {
          events.emit(eventTypes.CLEAR);
        } else if (startWithInButton === deleteButton) {
          events.emit(eventTypes.DELETE);
        }

        startWithInButton = null;
      }
    }
  }

  function createImage(src) {
    const image = new Image();
    image.src = src;
    image.addEventListener('load', handleImageLoad);
    return image;
  }

  function handleImageLoad() {
    events.emit(eventTypes.APPLY_RENDER);
  }
}

export default { init };
