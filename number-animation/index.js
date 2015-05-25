/**
 * @since 150523 10:36
 * @author vivaxy
 */

var animate = function () {
    new NumberAnimation({
        container: document.querySelector('.number1'),
        targetNumber: 12345.67
    });

    new NumberAnimation({
        container: document.querySelector('.number2'),
        targetNumber: 54321.09
    });
};

window.addEventListener('click', function () {
    alert(0);
    animate();
}, false);

animate();
