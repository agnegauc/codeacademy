// Importuojame modulį 'casual' į index.js:

const casual = require("casual");

// Don't need function call operator here cos most of generators use properties mechanism, so can write just:
const sentence = casual.sentence;
const name = casual.name;
const city = casual.city;

console.log({ sentence, name, city });
