/**
 * @since 150523 10:36
 * @author vivaxy
 */

var animate = function() {
  new NumberAnimation({
    container: document.querySelector('.number1'),
    targetNumber: 12345.67,
  });

  new NumberAnimation({
    container: document.querySelector('.number2'),
    targetNumber: 54321.09,
  });

  new NumberAnimation({
    container: document.querySelector('.number3'),
    baseNumber: 12345.67,
    targetNumber: 54321.09,
  });
};

// in ios : click event not fired
// http://stackoverflow.com/questions/14054272/click-event-listener-works-in-safari-in-osx-but-not-in-ios
window.addEventListener('touchstart', animate, false);

animate();
