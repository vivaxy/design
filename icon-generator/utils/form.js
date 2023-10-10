/**
 * @since 2023-10-10
 * @author vivaxy
 */
import {
  camelCaseToSentenceCase,
  camelCaseToKebabCase,
} from 'https://unpkg.com/@vivaxy/framework/utils/strings.js';
import * as E from '../enums/events.js';

export function handleInputChange(e, events, { group, lineId, key, type }) {
  formatValue(e.target);
  events.emit(E.INPUT_VALUE_CHANGE, {
    group,
    lineId,
    key,
    value: type === 'number' ? Number(e.target.value) : e.target.value,
  });
}

function formatValue(input) {
  const min = input.getAttribute('min');
  const value = Number(input.value);
  if (min !== null) {
    if (value < min) {
      input.value = min;
    }
  }
  const max = input.getAttribute('max');
  if (max !== null) {
    if (value > max) {
      input.value = max;
    }
  }
}

export function createInputLine(options) {
  const { key, value, type } = options;
  const id = camelCaseToKebabCase(key);
  const inputAttrs = { type, value: value, id };
  ['min', 'max', 'step'].forEach(function (key) {
    if (options[key] !== undefined) {
      inputAttrs[key] = options[key];
    }
  });

  return {
    tag: 'span',
    attrs: {
      class: 'input-item',
    },
    children: [
      {
        tag: 'label',
        attrs: {
          htmlFor: id,
        },
        children: [`${camelCaseToSentenceCase(key)}: `],
      },
      {
        tag: 'input',
        attrs: inputAttrs,
      },
    ],
  };
}

let lineId = 0;

export function getNextLineId() {
  return lineId++;
}
