/**
 * @since 2023-10-09
 * @author vivaxy
 */
import EventEmitter from 'https://unpkg.com/@vivaxy/framework/class/event-emitter2.js';
import forms from './services/forms/index.js';
import svg from './services/svg.js';
import buttons from './services/buttons.js';

const events = new EventEmitter();

svg.init(events);
forms.init(events);
buttons.init(events);
