/**
 * @since 2023-10-10
 * @author vivaxy
 */
import background from './background.js';
import texts from './texts.js';
import * as E from '../../enums/events.js';
import {
  defaultBackgroundValues,
  defaultTextValues,
} from '../../utils/default-values.js';
import { getNextLineId } from '../../utils/form.js';

const LOCAL_STORAGE_KEY = 'vivaxy/icon-generator';

let values = {};
const stringValues = localStorage.getItem(LOCAL_STORAGE_KEY);
try {
  if (!stringValues) {
    throw new Error('Values not found from storage');
  }
  values = JSON.parse(stringValues);
} catch (e) {
  values = {
    background: defaultBackgroundValues,
    texts: [
      {
        ...defaultTextValues,
        lineId: getNextLineId(),
      },
    ],
  };
}

export default {
  init(events) {
    background.init(events, values.background);
    texts.init(events, values.texts);
    events.on(E.INPUT_VALUE_CHANGE, function ({ group, lineId, key, value }) {
      let valueGroup = values[group];
      if (group === 'texts') {
        valueGroup = valueGroup.find(function ({ lineId: id }) {
          return lineId === id;
        });
      }
      valueGroup[key] = value;
      events.emit(E.FORM_VALUES_CHANGE, values);
    });

    events.on(E.REMOVE_TEXT_LINE, function (lineId) {
      const index = values.texts.findIndex(function ({ lineId: id }) {
        return lineId === id;
      });
      values.texts.splice(index, 1);
      events.emit(E.FORM_VALUES_CHANGE, values);
    });

    events.on(E.ADD_TEXT_LINE, function (textLineValues) {
      values.texts.push(textLineValues);
      events.emit(E.FORM_VALUES_CHANGE, values);
    });

    // store previous values
    events.on(E.FORM_VALUES_CHANGE, function (values) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
    });

    events.emit(E.FORM_VALUES_CHANGE, values);
  },
};
