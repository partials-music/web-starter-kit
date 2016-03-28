import {play, load} from './piano';

function playProgression(chords, tempo, progressionComplete = function () {}) {
  var chordsPlayed = 0;
  chords.forEach(function(chord, i) {
    setTimeout(function() {
      chordsPlayed++;
      play(chord);
      if (chordsPlayed == chords.length) {
        progressionComplete();
      }
    }, tempo * i)
  });
}


function playCadence(tonic, quarterNoteDuration, cadenceComplete) {
  function chord(semitoneDistances) {
    return semitoneDistances.map(distance => tonic + distance);
  }

  var I = chord([0, 4, 7]);
  var IV = chord([0, 5, 9]);
  var V7 = chord([-5, -1, 2]);
  var cadence = [I, IV, V7, I];

  playProgression(cadence, quarterNoteDuration, cadenceComplete);
}

export {playCadence};
