/**
 * @since 2020-11-15 15:55
 * @author vivaxy
 */
import piano from './wave-tables/piano.js';

function play(frequency) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();
  const wave = audioContext.createPeriodicWave(piano.real, piano.imag);
  const oscillator = audioContext.createOscillator();
  oscillator.setPeriodicWave(wave);
  oscillator.frequency.value = frequency;
  oscillator.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(0.5);
  audioContext.close();
}

const keyFrequencyMap = {
  C: 16.3515,
  Cs: 17.324,
  D: 18.354,
  Ds: 19.4455,
  E: 20.6015,
  F: 21.827,
  Fs: 23.1245,
  G: 24.4995,
  Gs: 25.9565,
  A: 27.5,
  As: 29.135,
  B: 30.868,
};

const $container = document.querySelector('.container');

function createSingleKey(key, octave) {
  const $key = document.createElement('button');
  $key.classList.add('key');
  $key.dataset.frequency = keyFrequencyMap[key] * 2 ** octave;
  return $key;
}

function createWhiteKey(key, octave) {
  const $whiteKey = createSingleKey(key, octave);
  $whiteKey.classList.add('white');
  return $whiteKey;
}

function createBlackKey(key, octave) {
  const $blackKey = createSingleKey(key, octave);
  $blackKey.classList.add('black');
  return $blackKey;
}

function createKey(key, octave) {
  if (key.length === 1) {
    return createWhiteKey(key, octave);
  }
  return createBlackKey(key, octave);
}

function createKeyboard() {
  const keys = [createKey('A', 0), createKey('As', 0), createKey('B', 0)];
  for (let i = 1; i < 8; i++) {
    for (const key of [
      'C',
      'Cs',
      'D',
      'Ds',
      'E',
      'F',
      'Fs',
      'G',
      'Gs',
      'A',
      'As',
      'B',
    ]) {
      keys.push(createKey(key, i));
    }
  }
  keys.push(createKey('C', 8));

  keys.forEach(function($key) {
    $container.appendChild($key);
  });
  $container.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
      play(Number(e.target.dataset.frequency));
    }
  });

  // if (
  //   window.innerWidth / window.innerHeight <
  //   $container.offsetWidth / $container.offsetHeight
  // ) {
  //   // window is narrow
  //   $container.style.transform = `scale(${window.innerWidth /
  //     $container.offsetWidth})`;
  // } else {
  //   // window is heigher
  //   $container.style.transform = `scale(${window.innerHeight /
  //     $container.offsetHeight})`;
  // }
}

createKeyboard();
