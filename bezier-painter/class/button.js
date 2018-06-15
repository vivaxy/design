/**
 * @since 20180613 20:15
 * @author vivaxy
 */

import * as layerActions from '../enums/layer-actions.js';
import * as layerFunctions from '../enums/layer-functions.js';
import * as layerProperties from '../enums/layer-properties.js';

const iconPadding = 4;
const borderWidth = 1;

export default class Button {
  constructor({ label, top, left, width, height, image }) {
    this.label = label;
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;

    this.image = image;
  }

  render() {
    return [
      {
        type: layerActions.PROPERTY,
        prop: layerProperties.STROKE_STYLE,
        value: '#333',
      },
      {
        type: layerActions.PROPERTY,
        prop: layerProperties.LINE_WIDTH,
        value: borderWidth,
      },
      {
        type: layerActions.FUNCTION,
        func: layerFunctions.STROKE_RECT,
        params: [this.left, this.top, this.width, this.height],
      },
      {
        type: layerActions.PROPERTY,
        prop: layerProperties.FILL_STYLE,
        value: '#eee',
      },
      {
        type: layerActions.FUNCTION,
        func: layerFunctions.FILL_RECT,
        params: [this.left + borderWidth, this.top + borderWidth, this.width - borderWidth * 2, this.height - borderWidth * 2],
      },
      {
        type: layerActions.FUNCTION,
        func: layerFunctions.DRAW_IMAGE,
        params: [this.image, this.left + iconPadding + borderWidth, this.top + iconPadding + borderWidth, this.width - iconPadding * 2 - borderWidth * 2, this.height - iconPadding * 2 - borderWidth * 2],
      },
    ];
  }

  coordsInButton({ x, y }) {
    return x > this.left && y > this.top && x < this.left + this.width && y < this.top + this.height;
  }

};
