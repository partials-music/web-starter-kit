import {getFileName, getClosestSample} from './sample-file-names';
import Howler from 'Howler';
import pitchNumberToFrequency from './pitch';

var sounds = [];

function src(fileName) {
  return `/sounds/piano/${fileName}`;
}

function getSound(pitchNumber) {
  var sound = sounds[pitchNumber];
  if (!sound) {
    var fileName = getFileName(pitchNumber);

    if (fileName) {
      sound = new Howl({
        preload: true,
        src: [src(fileName)]
      });

    } else {
      var sample = getClosestSample(pitchNumber);
      var desiredFrequency = pitchNumberToFrequency(pitchNumber);
      var sampleFrequency = pitchNumberToFrequency(sample.pitchNumber);
      var frequencyRatio = sampleFrequency / desiredFrequency;
      sound = new Howl({
        src: [src(sample.fileName)],
        rate: frequencyRatio
      });
    }
    sounds[pitchNumber] = sound;
  }
  return sound;
}

function loadSounds(pitchNumbers) {
  return pitchNumbers.map(n => getSound(n));
}

export default loadSounds;
