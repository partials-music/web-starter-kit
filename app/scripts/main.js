import {playCadence} from './cadence';
import {play} from './piano';

var tonic = 60;
var quarterNoteDuration = 1000; // ms
function cadence(cadenceComplete) {
  playCadence(tonic, quarterNoteDuration, cadenceComplete);
}

function random() {
  var randomPitch = tonic + Math.round(Math.random() * 12);
  console.log(randomPitch);
  play(randomPitch);
}

function delayedRandom() {
  setTimeout(random, quarterNoteDuration * 2);
}

function question() {
  cadence(delayedRandom);
}

question();
