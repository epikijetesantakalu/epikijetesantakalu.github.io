const Text = document.getElementById('Text');
const Input = document.getElementById('Input');

const Words = [
  {english: 'turtle', japanese: 'かめ'}
];

window.onload = function() {
  RandomWord();
};

function RandomWord() {
  Text.innerText = Words[Math.floor(Math.random() * Words.length)].english;
};
