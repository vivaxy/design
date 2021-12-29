/**
 * @since 2021-12-29
 * @author vivaxy
 */
document.body.addEventListener('click', function() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.body.requestFullscreen();
  }
});
