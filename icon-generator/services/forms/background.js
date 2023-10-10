/**
 * @since 2023-10-10
 * @author vivaxy
 */
import createElement from 'https://unpkg.com/@vivaxy/framework/ui/create-element.js';
import { camelCaseToKebabCase } from 'https://unpkg.com/@vivaxy/framework/utils/strings.js';
import { handleInputChange, createInputLine } from '../../utils/form.js';

const form = {
  title: 'Background',
  inputs: [
    {
      key: 'width',
      type: 'number',
      min: 1,
      step: 1,
    },
    {
      key: 'height',
      type: 'number',
      min: 1,
      step: 1,
    },
    {
      key: 'backgroundColor',
      type: 'color',
    },
    {
      key: 'backgroundOpacity',
      type: 'number',
      min: 0,
      max: 100,
      step: 1,
    },
  ],
};

export default {
  init(events, initialValues) {
    const $root = document.getElementById('background-form');
    const $element = createElement({
      tag: 'div',
      children: [
        {
          tag: 'h4',
          children: [form.title],
        },
        ...form.inputs.map(function (options) {
          return createInputLine({
            ...options,
            value: initialValues[options.key],
          });
        }),
      ],
    });

    form.inputs.forEach(function ({ key, type }) {
      const id = camelCaseToKebabCase(key);
      const $input = $element.querySelector(`#${id}`);
      $input.addEventListener('change', function (e) {
        handleInputChange(e, events, {
          group: 'background',
          key,
          type,
        });
      });
    });
    $root.appendChild($element);
  },
};
