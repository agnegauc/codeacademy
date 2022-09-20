// Ex. 1

function showName(myName) {
  alert(myName); // Ne visos funkcijos turi turėti return
}

showName("Agne");

// Ex. 2

function randomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

console.log(randomNumber());

// Ex. 3

function nameLength(name, surname) {
  return name.length + surname.length;
}

console.log(nameLength("Agne", "Gauciute"));

// Ex. 4

alphabet = ["a", "b", "c", "d", "e"];

function getLetterByIndex(index, array) {
  return array[index];
}

console.log(getLetterByIndex(0, alphabet));

// Ex. 5

function arithmetic(n1, n2, operator) {
  if (operator === "sum") {
    return n1 + n2;
  } else if (operator === "sub") {
    return n1 - n2;
  } else if (operator === "div") {
    return n1 / n2;
  } else {
    return 0;
  }
}

console.log(arithmetic(1, 2));

// Ex. 6

function generateRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

function getRaisedToThePowerOfTwo(number) {
  return Math.pow(number, 2);
}

console.log(getRaisedToThePowerOfTwo(generateRandomNumber()));
