// Ex. 1 - atspausdiname kiekvieną array element

const cars = ["BMW", "VW", "Audi"];

cars.forEach((element) => {
  console.log(element);
});

// Ex. 2 - editinam array elements

console.log(cars.map((value, index) => `${index}: ${value}`));

// ALSO POSSIBLE WITH forEach: cars.forEach((value, index) => console.log(index + ": " + value));

// Ex. 3 - editinam array elements (capitalising)

const names = ["peTras", "Jonas", "aNTanaS"];
const editedNames = names.map(
  (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
);

console.log(editedNames);

// Ex. 4

const ageList = [1, 15, 66, 32, 17, 19];
const filteredList = ageList.filter((value) => value >= 18);

console.log(filteredList);

// Ex. 5 - return first element, which starts with a K

const cities = ["Vilnius", "Kaunas", "Klaipeda", "alytus"];

console.log(cities.find((value) => value.charAt(0) === "K")); // vėl tie ===

// Ex. 6 - ar BET VIENAS miestas prasideda iš mažosios raidės?

console.log(
  cities.some((value) => value.charAt(0) === value.charAt(0).toLowerCase())
);

// Ex. 6 - ar VISI miestai prasideda iš didžiosios?

console.log(
  cities.every((value) => value.charAt(0) === value.charAt(0).toUpperCase())
); // nepamiršti skliaustų po toUpperCase()

// Ex. 7 - sort string (default) A-Z

const namesList = ["Migle", "Gerda", "Emilie", "Agne", "Aldona"];

namesList.sort();
console.log(namesList);

// Ex. 8 - sort string (default) Z-A

console.log(namesList.reverse());
// OR: namesList.sort((a, b) => b > a ? 1 : -1);

// Ex. 9 - sort numbers mažėjimo tvarka

const listOfNumbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];

listOfNumbers.sort((a, b) => b - a); // didėjimo tvarka būtų a-b
console.log(listOfNumbers);

// Ex. 10 - didžiausias skaičius

console.log(listOfNumbers[0]);

// Ex. 11 - sudedam visus array skaičius

const favouriteNumbers = [1, 7, 8, 150, 2, 3, 9];
const sumOfNumbers = favouriteNumbers.reduce((a, v) => a + v); // a === accumulated value; v === value;

console.log(sumOfNumbers);

// Ex. 12 - kiek yra elementų su trimis simboliais? (efektyviau būtų su filter, bet išbandom reduce)

const carBrands = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

console.log(carBrands.reduce((a, v) => (v.length === 3 ? a + 1 : a), 0)); // reikia čia nulio, kad negrąžintų pirmos reikšmės tiesiogiai ("BMW")

// Ex. 13 - return the highest number using reduce

const anotherListOfNumbers = [14, 18, 2, 70];

console.log(anotherListOfNumbers.reduce((a, v) => (a > v ? a : v)));

// Ex. 14 - filter

const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

console.log(people.filter((value) => value.age >= 18)); // ne people.age, o value,age

// Ex. 15 - showing only names from objects (MAP!)

console.log(
  people.filter((value) => value.age >= 18).map((person) => person.name)
);

// Ex. 16

const filteredNamesList = people
  .filter((value) => value.age >= 18)
  .map((person) => person.name);

console.log(filteredNamesList.sort()); // sorted alphabetically

// Ex. 17 - cheapest object from array

const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "milk", price: 5 },
];

function getPrice(items) {
  items.sort((a, b) => a.price - b.price);
  return `Pigiausias: ${items[0].name}, brangiausias: ${
    items[items.length - 1].name
  }`;
}

console.log(getPrice(drinks));
