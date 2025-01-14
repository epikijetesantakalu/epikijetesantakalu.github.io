const A1NounText = document.getElementById('A1nimi');

const A1Nouns = [
  {name: 'Beispiel', Gender: 'N'},
];

window.onload = function() {
  A1nounText.innerText = A1Nouns[0].name
};
