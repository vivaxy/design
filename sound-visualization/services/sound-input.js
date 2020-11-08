/**
 * @since 2020-11-08 11:17
 * @author vivaxy
 */
import ASSERT from 'https://unpkg.com/@vivaxy/framework/utils/assert.js';
import e, { E } from '../objects/events.js';
import data from '../objects/data.js';

let analyser = null;

function handleGetUserMediaSuccess(stream) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  analyser = audioContext.createAnalyser();

  analyser.fftsize = 512;
  analyser.smoothingTimeConstant = 0.9;
  const bufferLength = analyser.frequencyBinCount;
  data.sound = new Uint8Array(bufferLength);

  const microphone = audioContext.createMediaStreamSource(stream);
  microphone.connect(analyser);
  analyser.connect(audioContext.destination);

  e.emit(E.AUDIO_SOURCE_ATTACHED);
}

function handleGetUserMediaFail(error) {
  ASSERT(false, error);
}

export function init() {
  const getUserMedia =
    navigator.mediaDevices.getUserMedia ||
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
  getUserMedia
    .call(navigator.mediaDevices, { audio: true })
    .then(handleGetUserMediaSuccess)
    .catch(handleGetUserMediaFail);

  e.on(E.TICK_LOOP, function() {
    if (analyser) {
      analyser.getByteFrequencyData(data.sound);
    }
  });
}
