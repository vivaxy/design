/**
 * @since 2023-10-10
 * @author vivaxy
 */
import createElement from 'https://unpkg.com/@vivaxy/framework/ui/create-element.js';
import textLine from './text-line.js';
import * as E from '../../enums/events.js';
import { defaultTextValues } from '../../utils/default-values.js';
import { getNextLineId } from '../../utils/form.js';

export default {
  init(events, textsValues) {
    const $root = document.getElementById('texts-form');
    const $element = createElement({
      tag: 'div',
      children: [
        {
          tag: 'h4',
          children: [
            'Texts',
            {
              tag: 'button',
              attrs: {
                id: 'add-text-line',
                style: {
                  'margin-left': '4px',
                },
              },
              children: ['+'],
            },
          ],
        },
      ],
    });
    textsValues.forEach(function (initialValues, index) {
      const lineDOM = textLine.init(events, initialValues, index);
      $element.appendChild(lineDOM);
    });

    $element
      .querySelector('#add-text-line')
      .addEventListener('click', function () {
        const lineDOM = textLine.init(
          events,
          defaultTextValues,
          getNextLineId(),
        );
        $element.appendChild(lineDOM);
        events.emit(E.ADD_TEXT_LINE, defaultTextValues);
      });

    $root.appendChild($element);
  },
};
