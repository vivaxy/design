/**
 * @since 150425 18:30
 * @author vivaxy
 */
'use strict';
import Cast from './cast.js';

let data = ['author : vivaxy', 'date : 2015-04-25'];

let callbackFactory = (index, callback) => {
    return ()  => {
        new Cast(data[index]).end(callback);
    };
};

let cb = () => {
};

data.forEach((value, index) => {
    cb = callbackFactory(data.length - index - 1, cb);
});

setInterval(cb, 5000);
