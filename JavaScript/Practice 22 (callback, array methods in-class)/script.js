const showAlert = (callback) => {
  alert();
  callback();
};

// callbackas

const logGreeting = () => {
  console.log("Laba diena.");
};

showAlert(logGreeting);

// filter:

const productAvailabilityList = [true, true, false, true, false, false];

const availableProducts = productAvailabilityList.filter((product) => product);

console.log({ productAvailabilityList, availableProducts });

// forEach. Šis metodas negrąžina nieko (nereturnina)

const printOddProducts = () => {
  productAvailabilityList.forEach(
    (product, i) => i % 2 === 1 && console.log(product)
  );
};

printOddProducts();

// map: forEach'o brolis, kuris returnina

const getRaisedToThePowerOfX = (numbers, x = 2) => {
  return numbers.map((number) => Math.pow(number, x));
};

console.log(getRaisedToThePowerOfX([1, 2, 3], 5));

// find: jei randa - sustoja ir grąžina rastą elementą. Jei norime rasti kelis - reikia filtruoti

console.log([3, 4, 8, 5].find((number) => number === 8));

// some: tikrina, ar yra tokia reikšmė ir grąžina true / false

console.log([3, 4, 8, 5].some((number) => number === 8)); // true

console.log([3, 4, 8, 5].some((number) => number === 9)); // false

// every: grąžina true / false, jei atitinka sąlyga

console.log([3, 4, 8, 5].every((number) => number > 0));

console.log([3, 4, 8, 5].every((number) => number !== 5));

// sort: rikiuoja ne tik skaičius. Reikėtų pateikti papildomą funkciją, kad suprastų, kaip rikiuoti (pvz. sortAscendingly žemiau)

const sortAscendingly = (x, y) => {
  if (typeof x === "number" && typeof y === "number") {
    return x - y;
  }

  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
};

console.log([-7, 8, 1, 0, -10].sort(sortAscendingly));

console.log(["名前", "苗字", "knyga", "akis", "juokas"].sort(sortAscendingly));

const cars = [
  {
    name: "BMW",
    engineHorsePower: 1000,
  },
  {
    name: "VW",
    engineHorsePower: 500,
  },
  {
    name: "Tesla",
    engineHorsePower: 2000,
  },
];

const sortCarsByHorsePower = (nextCar, curCar) => {
  console.log({ curCar, nextCar }); // tik tam, kad pasižiūrėtume
  return curCar.engineHorsePower - nextCar.engineHorsePower;
};

console.log(cars.sort(sortCarsByHorsePower));
