/**
 * @since 2016-10-13 13:52
 * @author vivaxy
 */

var range1 = document.querySelector('.js-range-1');
var range1label = document.querySelector('.js-range-1-label');
var range2 = document.querySelector('.js-range-2');
var range2label = document.querySelector('.js-range-2-label');

range1.addEventListener('input', () => {
    range1label.innerHTML = range1.value;
});

range2.addEventListener('input', () => {
    range2label.innerHTML = range2.value;
});

range1label.innerHTML = range1.value;
range2label.innerHTML = range2.value;
