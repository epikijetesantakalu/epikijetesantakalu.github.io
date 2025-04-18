const Text = document.getElementById('Text');
const Input = document.getElementById('Input');
const Result = document.getElementById('Result');

Input.addEventListener("keydown", test_event);

const Words = [
  {english: 'turtle', japanese: 'かめ'},
  {english: 'lover', japanese: 'あいじん'},
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
    if (Input.value = Words[WordID].japanese) {
      Result.value = Correct!
      RandomWord();
    }
    else {
      Result.value = Incorrect...
      RandomWord();
    }
  }  
  return false;
}
