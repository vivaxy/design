/**
 * @since 150501 16:44
 * @author vivaxy
 */
Array.prototype.forEach.call(document.querySelectorAll('.page[data-animation="class-name"] .button'), function (button) {
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
