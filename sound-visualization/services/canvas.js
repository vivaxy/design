/**
 * @since 2020-11-08 11:41
 * @author vivaxy
 */
import e, { E } from '../objects/events.js';
import data from '../objects/data.js';

let ctx = null;
let audioSourceAttached = false;
let barWidth = null;
export function init() {
  const $canvas = document.getElementById('canvas');
  $canvas.width = window.innerWidth * window.devicePixelRatio;
  $canvas.height = window.innerHeight * window.devicePixelRatio;
  ctx = $canvas.getContext('2d');
  ctx.fillStyle = `rgb(200, 200, 200)`;

  e.on(E.AUDIO_SOURCE_ATTACHED, function() {
    audioSourceAttached = true;
    barWidth = $canvas.width / data.sound.length;
    console.log('barWidth', barWidth);
  });

  e.on(E.TICK_LOOP, function() {
    if (audioSourceAttached) {
      draw();
    }
  });
}

function draw() {
  const WIDTH = ctx.canvas.width;
  const HEIGHT = ctx.canvas.height;
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  const { sound } = data;

  for (let i = 0; i < sound.length; i++) {
    const x = i * barWidth;
    const height = (sound[i] * HEIGHT) / 255;
    ctx.fillRect(x - barWidth / 2, HEIGHT - height, barWidth, height);
  }
}
