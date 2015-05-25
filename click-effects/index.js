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
    button.addEventListener('webkitAnimationEnd', function () {
        this.classList.remove('clicked');
    });
    button.addEventListener('transitionend', function () {
        this.classList.remove('clicked');
    });
    button.addEventListener('webkitTransitionEnd', function () {
        this.classList.remove('clicked');
    });
});