// Pratimas 1

console.log(Math.cos(0));

// Pratimas 2

const randomNumber = Math.floor(Math.random() * 5) + 1;

console.log(randomNumber);

// Pratimas 3

const randomNumberTwo = Math.floor(Math.random() * (12 - 5 + 1)) + 5;  // nuo 5 iki 12 (įskaitant abu)

console.log(randomNumberTwo);

// Pratimas 4

const randomNumberThree = Math.floor(Math.random() * 5) + 1;

if (randomNumberThree === 1) {
    alert("Winner");
} else {
    alert("Try again");
};