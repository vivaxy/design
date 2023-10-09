/**
 * @since 2023-10-09
 * @author vivaxy
 */
import { kebabCaseToCamelCase } from 'https://unpkg.com/@vivaxy/framework/utils/strings.js';
import * as E from '../enums/events.js';

export default {
  init(events) {
    const inputs = Array.from(
      document.querySelector('.input-group').querySelectorAll('input'),
    );

    function getValues() {
      const values = {};
      inputs.forEach(function (input) {
        const key = kebabCaseToCamelCase(input.id);
        const value = input.value;
        if (input.type === 'number') {
          values[key] = Number(value);
        } else {
          values[key] = value;
        }
      });
      return values;
    }

    function handleChange(events) {
      events.emit(E.INPUT_VALUE_CHANGE, getValues());
    }

    inputs.forEach(function (input) {
      input.addEventListener('change', function (e) {
        handleChange(events);
      });
    });

    handleChange(events);
  },
};
