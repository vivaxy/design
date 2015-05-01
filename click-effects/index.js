/**
 * @since 150501 16:44
 * @author vivaxy
 */
Array.prototype.slice.call(document.querySelectorAll('.button')).forEach(function (button, index) {
    button.addEventListener('click', function () {
        this.classList.add('clicked');
    });
    button.addEventListener('animationend', function () {
        this.classList.remove('clicked');
    });
});
