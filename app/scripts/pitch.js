var A4 = {
  frequency: 440,
  pitchNumber: 69
};

function pitchNumberToFrequency(n) {
  var distanceFromA4 = A4.pitchNumber - n;
  var frequency = Math.pow(2, distanceFromA4 / 12) * A4.frequency;
  return frequency;
}

export default pitchNumberToFrequency;
