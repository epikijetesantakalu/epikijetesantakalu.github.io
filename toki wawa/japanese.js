const Text = document.getElementById('Text');
const Input = document.getElementById('Input');
const Result = document.getElementById('Result');

Input.addEventListener("keydown", test_event);

const Words = [
  {english: 'turtle', japanese: 'かめ'},
  {english: 'lover', japanese: 'あいじん'},
  {english: 'cherry blossom', japanese: 'さくら'},
  {english: 'I', japanese: 'わたし'},
  {english: 'recent', japanese: 'さいきん'},
  {english: 'how', japanese: 'どう'},
  {english: 'hello(formal)', japanese: 'こんにちは'},
  {english: 'hello(informal)', japanese: 'やっほー'},
];

let WordID;

window.onload = function() {
  RandomWord();
};

function RandomWord() {
  WordID = Math.floor(Math.random() * Words.length);
  Text.innerText = Words[WordID].english;
};

function test_event(e) {
  if (e.key === "Enter") {
    if (Input.value === Words[WordID].japanese) {
      Result.innerText = 'Correct!'
      Input.value = '';
      RandomWord();
    }
    else {
      Result.innerText = 'Incorrect...The correcat answer was ' + Words[WordID].japanese;
      Input.value = '';
      RandomWord();
    }
  }  
  return false;
}
