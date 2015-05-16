/**
 * @since 150516 19:08
 * @author vivaxy
 */
var div = document.querySelector('.letter1'),
    letters = div.innerText,
    fragment = document.createDocumentFragment(),
    spans = [];

Array.prototype.slice.call(letters).forEach(function (letter, index) {
    var span = document.createElement('span');
    span.innerText = letter;
    spans.push(span);
    fragment.appendChild(span);
});

div.innerHTML = '';
div.appendChild(fragment);

spans.forEach(function (span, index) {
    setTimeout(function () {
        span.classList.add('drop');
    }, index * 300);
});

div.addEventListener('click', function () {
    spans.forEach(function (span, index) {
        span.classList.remove('drop');
        setTimeout(function () {
            span.classList.add('drop');
        }, index * 300);
    });
}, false);
