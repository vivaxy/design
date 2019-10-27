/**
 * @since 2019-10-27 04:17
 * @author vivaxy
 */
if ('serviceWorker' in navigator) {
  register();
}

async function register() {
  await navigator.serviceWorker.register('./service-worker.js');
}
