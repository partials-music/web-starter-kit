import loadSounds from './load-sounds';

function play(pitchNumbers) {
  var sounds = load(pitchNumbers);
  sounds.forEach(s => s.play());
}

function load(pitches) {
  return loadSounds(pitches);
}

export {play, load};
