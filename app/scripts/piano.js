import {getFileName, getClosestSample} from './sample-file-names';
import Howler from 'Howler';
import pitchNumberToFrequency from './pitch';
import loadSounds from './load-sounds';

function play(pitchNumbers) {
  var sounds = loadSounds(pitchNumbers);
  sounds.forEach(s => s.play())
}

function load(pitches) {
  return loadSounds(pitches);
}

export { play, load };
