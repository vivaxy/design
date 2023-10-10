/**
 * @since 2023-10-10
 * @author vivaxy
 */
import { camelCaseToKebabCase } from 'https://unpkg.com/@vivaxy/framework/utils/strings.js';
import createElement from 'https://unpkg.com/@vivaxy/framework/ui/create-element.js';
import { createInputLine, handleInputChange } from '../../utils/form.js';
import * as E from '../../enums/events.js';

const inputs = [
  {
    key: 'text',
    type: 'string',
  },
  {
    key: 'x',
    type: 'number',
    min: 0,
    max: 100,
  },
  {
    key: 'y',
    type: 'number',
    min: 0,
    max: 100,
  },
  {
    key: 'textSize',
    type: 'number',
    min: 0,
    step: 1,
  },
  {
    key: 'textFont',
    type: 'string',
  },
  {
    key: 'textColor',
    type: 'color',
  },
  {
    key: 'textShadowColor',
    type: 'color',
  },
  {
    key: 'textShadowOpacity',
    type: 'number',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    key: 'textShadowDeviation',
    type: 'number',
    min: 0,
    step: 1,
  },
];

export default {
  init(events, initialValues, lineId) {
    const $element = createElement({
      tag: 'div',
      attrs: {
        class: 'text-line',
      },
      children: [
        {
          tag: 'h5',
          children: [
            `Text ${lineId}`,
            {
              tag: 'button',
              attrs: {
                class: 'remove-text-line',
                style: {
                  'margin-left': '4px',
                },
              },
              children: ['-'],
            },
          ],
        },
        ...inputs.map(function (options) {
          return createInputLine({
            ...options,
            value: initialValues[options.key],
          });
        }),
      ],
    });

    inputs.forEach(function ({ key, type, lineId }) {
      const id = camelCaseToKebabCase(key);
      const $input = $element.querySelector(`#${id}`);
      $input.addEventListener('change', function (e) {
        handleInputChange(e, events, {
          group: 'texts',
          lineId,
          key,
          type,
        });
      });
    });

    const $removeTextLine = $element.querySelector('.remove-text-line');
    $removeTextLine.addEventListener('click', function () {
      $element.parentNode.removeChild($element);
      events.emit(E.REMOVE_TEXT_LINE, lineId);
    });

    return $element;
  },
};
