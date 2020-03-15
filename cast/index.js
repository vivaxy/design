/**
 * @since 150425 18:30
 * @author vivaxy
 */
import Cast from './cast.js';

let data = ['Author: vivaxy', 'Date: 2015-04-25'];

const callbackFactory = (index, callback) => {
  return () => {
    new Cast(data[index]).end(callback);
  };
};

let cb = () => {};

data.forEach((value, index) => {
  cb = callbackFactory(data.length - index - 1, cb);
});

setInterval(cb, 1000);
