/**
 * @since 15-09-04 13:58
 * @author vivaxy
 */
'use strict';
import EventEmitter from './event-emitter.js';

class Range extends EventEmitter {
    constructor() {
        super();
        this._initialize();
    }

    _initialize() {

    }

    _addRangeInput(type) {
        let input = document.createElement('input');
        input.addEventListener('change', ()=> {
            
        }, false);
        document.body.appendChild(input);
    }
}