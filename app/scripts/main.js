import { play, load } from './piano';

var key = 60;
var tempo = 2000;

function chord(semitoneDistances) {
  return semitoneDistances.map(distance => key + distance);
}

function playProgression(chords, tempo) {
  for (var i = 0; i < chords.length; i++) {
    let chord = chords[i];
    setTimeout( _ => play(chord), tempo * i);
  }
}

var I = chord([0, 4, 7]);
var IV = chord([0, 5, 9]);
var V7 = chord([-5, -1, 2]);
var cadence = [I, IV, V7, I];

load(I);
load(IV);
load(V7);

// give the chords time to load
setTimeout ( _ => playProgression(cadence, tempo), 1000);
