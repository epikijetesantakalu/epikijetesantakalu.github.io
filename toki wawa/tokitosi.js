const A1NounText = document.getElementById('A1nimi');

const A1MButton = document.getElementById('A1M');
const A1FButton = document.getElementById('A1F');
const A1NButton = document.getElementById('A1N');

const A1Nouns = [
  {name: 'Beispiel', gender: 'N'},
  {name: 'Frau', gender: 'F'},
  {name: 'Mann', gender: 'M'},
  {name: 'Bank', gender: 'F'},
  {name: 'Büro', gender: 'N'},
  {name: 'Bus', gender: 'M'},
  {name: 'Computer', gender: 'M'},
  {name: 'E-Mail', gender: 'F'},
  {name: 'Familie', gender: 'F'},
  {name: 'Flughafen', gender: 'M'},
  {name: 'Gitarre', gender: 'F'},
  {name: 'Hobby', gender: 'N'},
  {name: 'Hotel', gender: 'N'},
  {name: 'Information', gender: 'F'},
  {name: 'Kaffee', gender: 'M'},
  {name: 'Kino', gender: 'N'},
  {name: 'Konzert', gender: 'N'},
  {name: 'Kultur', gender: 'F'},
  {name: 'Museum', gender: 'N'},
  {name: 'Musik', gender: 'F'},
  {name: 'Pilot', gender: 'M'},
  {name: 'Pilotin', gender: 'F'},
  {name: 'Pizza', gender: 'F'},
  {name: 'Problem', gender: 'N'},
  {name: 'Restaurant', gender: 'N'},
  {name: 'Sport', gender: 'M'},
  {name: 'Student', gender: 'M'},
  {name: 'Studentin', gender: 'F'},
  {name: 'Supermarkt', gender: 'M'},
  {name: 'Taxi', gender: 'N'},
  {name: 'Telefon', gender: 'N'},
  {name: 'Theater', gender: 'N'},
  {name: 'Toilette', gender: 'F'},
  {name: 'Universität', gender: 'F'},
  {name: 'Zentrum', gender: 'N'},
  {name: 'Hilfe', gender: 'F'},
  {name: 'Tasche', gender: 'F'},
  {name: 'Adresse', gender: 'F'},
  {name: 'Buchstabe', gender: 'M'},
  {name: 'Hausnummer', gender: 'F'},
  {name: 'Mama', gender: 'F'},
  {name: 'Name', gender: 'M'},
  {name: 'Straße', gender: 'F'},
  {name: 'Tante', gender: 'F'},
  {name: 'Deutschlehrer', gender: 'M'},
  {name: 'Deutschlehrerin', gender: 'F'},
  {name: 'Familienname', gender: 'M'},
  {name: 'Kurs', gender: 'M'},
  {name: 'Sprache', gender: 'F'},
  {name: 'Taxifahrer', gender: 'M'},
  {name: 'Taxifahrerin', gender: 'F'},
  {name: 'Forname', gender: 'M'},
  {name: 'Polizei', gender: 'F'},
  {name: 'Sprachkurs', gender: 'M'},
  {name: 'Tourist', gender: 'M'},
  {name: 'Touristin', gender: 'F'},
  {name: 'Vater', gender: 'M'},
  {name: 'Arbeit', gender: 'F'},
  {name: 'Auto', gender: 'N'},
  {name: 'Café', gender: 'N'},
  {name: 'Fahrradgeschäft', gender: 'N'},
  {name: 'Foto', gender: 'N'},
  {name: 'Freund', gender: 'M'},
  {name: 'Freundin', gender: 'F'},
  {name: 'Mutter', gender: 'F'},
  {name: 'Nummer', gender: 'F'},
  {name: 'Papa', gender: 'M'},
  {name: 'Pass', gender: 'M'},
  {name: 'Polizist', gender: 'M'},
  {name: 'Polizistin', gender: 'F'},
  {name: 'Einladung', gender: 'F'},
  {name: 'Geburtstag', gender: 'M'},
  {name: 'Geschenk', gender: 'N'},
  {name: 'Person', gender: 'F'},
  {name: 'Zahl', gender: 'F'},
  {name: 'Fundbüro', gender: 'N'},
  {name: 'Handy', gender: 'N'},
  {name: 'Handynummer', gender: 'F'},
  {name: 'Radio', gender: 'N'},
  {name: 'Telefonnummer', gender: 'F'},
  {name: 'Amt', gender: 'N'},
  {name: 'Dialog', gender: 'M'},
  {name: 'Heimatland', gender: 'N'},
  {name: 'Nachname', gender: 'M'},
  {name: 'Onkel', gender: 'M'},
  {name: 'Passnummer', gender: 'F'},
  {name: 'Postleitzahl', gender: 'F'},
  {name: 'Tochter', gender: 'F'},
  {name: 'Reisepassnummer', gender: 'F'},
  {name: 'Wohnort', gender: 'M'},
  {name: 'Flugzeug', gender: 'N'},
  {name: 'Getränk', gender: 'N'},
  {name: 'Lampe', gender: 'F'},
  {name: 'Land', gender: 'N'},
  {name: 'Party', gender: 'F'},
  {name: 'Apfelsaft', gender: 'M'},
  {name: 'Bier', gender: 'N'},
  {name: 'Cola', gender: 'F'},
  {name: 'Eis', gender: 'N'},
  {name: 'Fahrradladen', gender: 'M'},
  {name: 'Kühlschrank', gender: 'M'},
  {name: 'Limo', gender: 'F'},
  {name: 'Limonade', gender: 'F'},
  {name: 'Milch', gender: 'F'},
  {name: 'Orangensaft', gender: 'M'},
  {name: 'Saft', gender: 'M'},
  {name: 'Speisekarte', gender: 'F'},
  {name: 'Tee', gender: 'M'},
  {name: 'Wasser', gender: 'N'},
  {name: 'Wein', gender: 'M'},
  {name: 'Zucker', gender: 'M'},
  {name: 'Ananas', gender: 'F'},
  {name: 'Durst', gender: 'M'},
  {name: 'Hunger', gender: 'M'},
  {name: 'Käse', gender: 'M'},
  {name: 'Mozzarella', gender: 'M'},
  {name: 'Salami', gender: 'F'},
  {name: 'Salat', gender: 'M'},
  {name: 'Schinken', gender: 'M'},
  {name: 'Speisekarte', gender: 'F'},
  {name: 'Sushi', gender: 'N'},
  {name: 'Thunfisch', gender: 'M'},
  {name: 'Tomate', gender: 'F'},
  {name: 'Vegetarier', gender: 'M'},
  {name: 'Vegetarierin', gender: 'F'},
];

let A1NounID;

window.onload = function() {
  A1RandomNoun();
};

function A1RandomNoun() {
  A1NounID = Math.floor(Math.random() * A1Nouns.length);
  A1NounText.innerText = A1Nouns[A1NounID].name;
};

A1MButton.addEventListener('click', () => {
  if(A1Nouns[A1NounID].gender === 'M') {
    A1NounText.innerText = 'Richtig!';
    setTimeout(A1RandomNoun, 1000);
  } else if(A1Nouns[A1NounID].gender === 'F') {
    A1NounText.innerText = `Falsch..."die ${A1Nouns[A1NounID].name}" ist richtig.`;
    setTimeout(A1RandomNoun, 1000);
  } else {
    A1NounText.innerText = `Falsch..."das ${A1Nouns[A1NounID].name}" ist richtig.`;
    setTimeout(A1RandomNoun, 1000);
  }
});

A1FButton.addEventListener('click', () => {
  if(A1Nouns[A1NounID].gender === 'F') {
    A1NounText.innerText = 'Richtig!';
    setTimeout(A1RandomNoun, 1000);
  }  else if(A1Nouns[A1NounID].gender === 'M') {
    A1NounText.innerText = `Falsch..."der ${A1Nouns[A1NounID].name}" ist richtig.`;
    setTimeout(A1RandomNoun, 1000);
  } else {
    A1NounText.innerText = `Falsch..."das ${A1Nouns[A1NounID].name}" ist richtig.`;
    setTimeout(A1RandomNoun, 1000);
  }
});

A1NButton.addEventListener('click', () => {
  if(A1Nouns[A1NounID].gender === 'N') {
    A1NounText.innerText = 'Richtig!';
    setTimeout(A1RandomNoun, 1000);
  } else if(A1Nouns[A1NounID].gender === 'M') {
    A1NounText.innerText = `Falsch..."der ${A1Nouns[A1NounID].name}" ist richtig.`;
    setTimeout(A1RandomNoun, 1000);
  } else {
    A1NounText.innerText = `Falsch..."die ${A1Nouns[A1NounID].name}" ist richtig.`;
    setTimeout(A1RandomNoun, 1000);
  }
});