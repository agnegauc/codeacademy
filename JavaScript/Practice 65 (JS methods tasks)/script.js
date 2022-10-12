// Ex. 1

function getSecondsFromMinutes(minutes) {
  return `${minutes * 60} seconds`;
}

console.log(getSecondsFromMinutes(2));

// Ex. 1 - different way

const minutesToSeconds = (minutes) => `${minutes * 60} seconds`;

console.log(minutesToSeconds(2));

// Ex. 2

const userAge = (age) => age * 365;

console.log(userAge(25));

// Ex. 3

const numberSquaredUp = (number) => number ** 2;
// or number * number

console.log(numberSquaredUp(6));

// Ex. 4

const lastLetter = (word) => word.charAt(word.length - 1);

console.log(lastLetter("Party"));

// Ex. 5

const reverseWord = (word) => word.split("").reverse().join("").toLowerCase();

console.log(reverseWord("Carry"));

// Ex. 6

const numbers = [-1, -100, -5, 10, 0, 11];
const negativeNumbers = numbers.filter((v) => v < 0);

console.log(Math.max(...negativeNumbers)); // Necessary to add split (...) cos otherwise wouldn't work

// Ex. 6 - different way

const maxNegativeNumber = (array) =>
  array.filter((v) => v < 0).sort((a, b) => b - a)[0];

console.log(maxNegativeNumber(numbers));

// Ex. 7

const listOfNumbers = []; // can be const and editable, because it's an array

function getRandomNumbers(numberOfItems) {
  for (let index = 0; index < numberOfItems; index++) {
    const result = Math.floor(Math.random() * 10) + 1;

    listOfNumbers.push(result);
  }
}

getRandomNumbers(4);

console.log(listOfNumbers);

// Ex. 7 - different way

const randomNumbers = (quantity) => {
  const generatedNums = [];

  for (let i = 0; i < quantity; i++) {
    generatedNums.push(Math.floor(Math.random() * 10) + 1);
  }
  return generatedNums;
};

console.log(randomNumbers(30));

// Ex. 8

const isSumOverHundred = (number1, number2) => number1 + number2 > 100; // Nereikia "? true : false"

console.log(isSumOverHundred(71, 30));

// Ex. 9
