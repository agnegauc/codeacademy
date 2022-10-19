// Ex. 1

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge() {
    if (this.age >= 18) {
      console.log("Able to drink");
    } else console.log("Cannot drink");
  }
}

const user = new Person("Ranjeet", 18);
user.compareAge();

// Ex. 2 - return numbers only

const mixedList = [1, 4, "a", "g", "z", 6];
const filteredList = mixedList.filter((v) => typeof v === "number");

console.log(filteredList);

// Another way of doing it (my way; not suitable if numbers can have decimal values cos integer means sveikasis skaičius):

const list = mixedList.filter((v) => Number.isInteger(v));

// Ex. 3 - repeat & join tryout

const regularInput = "Petras 123 Slekys";
const doubledInput = regularInput
  .split("")
  .map((v) => v.repeat(2))
  .join("");

console.log(doubledInput);

// Ex. 3 - funkcija, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).

const doubledLetters = (input) =>
  input
    .split("")
    .map((v) => (v.match(/[a-z]/i) ? v.repeat(2) : v)) // checking w/ regular expression whether the element ("P") is a letter. If yes, returning the letter itself.
    .join(""); // Number after repeat - how many times

console.log(doubledLetters(regularInput));

// Ex. 4 (not fully right cos does not take into account spaces that might be entered)

const postcodeInput = "ab123";
const postcodeInputCorrected = [...postcodeInput].map((s) => Number(s) || s);
const isPostcode = (input) => {
  const howManyNumbers = input.filter((v) => typeof v === "number").length;
  const howManyLetters = input.filter((v) => typeof v === "string").length;

  if (
    (howManyNumbers === 3 && howManyLetters === 2) ||
    (howManyNumbers === 5 && howManyLetters === 0)
  ) {
    console.log("Valid postcode");
  } else console.log("Invalid postcode");
};

isPostcode(postcodeInputCorrected);

// Ex. 4 - the correct way with regular expression

const isValidPostCode = (postCode) =>
  /^[0-9]{5}|[0-9]{3}[A-Za-z]{2}$/.test(postCode);
console.log(isValidPostCode("abc123"));
console.log(isValidPostCode("12345"));
console.log(isValidPostCode("123ab"));

// Ex. 5 - prie kiekvieno array elemento pridėti "7", nebent elementas baigiasi "7". My way:

const chords = ["Dm7", "G", "E7", "A"];

const editedArray = chords.map((v, i) =>
  v.charAt(chords[i].length - 1) !== "7" ? v.concat("7") : v
);

console.log(editedArray);

// Ex. 5 - CAO way:

const jazzify = (array) =>
  array.map((element) =>
    element.endsWith("7") ? element : element.concat("7")
  );
console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
