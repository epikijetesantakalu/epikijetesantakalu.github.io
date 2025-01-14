const A1NounText = document.getElementById('A1nimi');

const A1Nouns = [
  {name: 'Beispiel', Gender: 'N'},
];

window.onload = function() {
  A1NounText.innerText = A1Nouns[0].name;
};
