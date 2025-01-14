const A1NounText = document.getElementById('A1nimi');

const A1Nouns = [
  {name: 'Beispiel', Gender: 'N'},
  {name: 'Frau', Gender: 'F'},
  {name: 'Mann', Gender: 'M'},
  {name: 'Bank', Gender: 'F'},
  {name: 'Büro', Gender: 'N'},
  {name: 'Bus', Gender: 'M'},
  {name: 'Computer', Gender: 'M'},
  {name: 'E-Mail', Gender: 'F'},
  {name: 'Familie', Gender: 'F'},
  {name: 'Flughafen', Gender: 'M'},
  {name: 'Gitarre', Gender: 'F'},
  {name: 'Hobby', Gender: 'N'},
  {name: 'Hotel', Gender: 'N'},
  {name: 'Information', Gender: 'F'},
  {name: 'Kaffee', Gender: 'M'},
  {name: 'Kino', Gender: 'N'},
  {name: 'Konzert', Gender: 'N'},
  {name: 'Kultur', Gender: 'F'},
  {name: 'Museum', Gender: 'N'},
  {name: 'Musik', Gender: 'F'},
  {name: 'Pilot', Gender: 'M'},
  {name: 'Pilotin', Gender: 'F'},
  {name: 'Pizza', Gender: 'F'},
  {name: 'Problem', Gender: 'N'},
  {name: 'Restaurant', Gender: 'N'},
  {name: 'Sport', Gender: 'M'},
  {name: 'Student', Gender: 'M'},
  {name: 'Studentin', Gender: 'F'},
  {name: 'Supermarkt', Gender: 'M'},
  {name: 'Taxi', Gender: 'N'},
  {name: 'Telefon', Gender: 'N'},
  {name: 'Theater', Gender: 'N'},
  {name: 'Toilette', Gender: 'F'},
  {name: 'Universität', Gender: 'F'},
  {name: 'Zentrum', Gender: 'N'},
  {name: 'Hilfe', Gender: 'F'},
  {name: 'Tasche', Gender: 'F'},
  {name: 'Adresse', Gender: 'F'},
  {name: 'Buchstabe', Gender: 'M'},
  {name: 'Hausnummer', Gender: 'F'},
  {name: 'Mama', Gender: 'F'},
  {name: 'Name', Gender: 'M'},
  {name: 'Straße', Gender: 'F'},
  {name: 'Tante', Gender: 'F'},
  {name: 'Deutschlehrer', Gender: 'M'},
  {name: 'Deutschlehrerin', Gender: 'F'},
  {name: 'Deutsch', Gender: 'N'},
  {name: 'Familienname', Gender: 'M'},
  {name: 'Kurs', Gender: 'M'},
  {name: 'Sprache', Gender: 'F'},
  {name: 'Taxifahrer', Gender: 'M'},
  {name: 'Taxifahrerin', Gender: 'F'},
  {name: 'Forname', Gender: 'M'},
];

window.onload = function() {
  A1NounText.innerText = A1Nouns[0].name;
};
