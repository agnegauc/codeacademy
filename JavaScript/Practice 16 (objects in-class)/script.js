const racingCar = {
  // Objektų priskyrimui čia reikalingas lygybės ženklas po const kintamojo
  manufacturer: "BMW", // Priskyrimui dvitaškis čia
  enginePowerHP: 2000,
  dateOfManufacture: 2018,
  released: false, // booleanai nėra kabutėse
};

console.log(racingCar);

const consumerCar = {
  manufacturer: "VW",
  enginePowerHP: 160,
  dateOfManufacture: 2001,
  released: true,
};

console.log(consumerCar);

// Ex. 1

function compareEngines(car1, car2) {
  console.log(car1.enginePowerHP, car2.enginePowerHP);
}

compareEngines(racingCar, consumerCar);

// Ex. 2

function isFirstEngineBetter(car1, car2) {
  return car1.enginePowerHP > car2.enginePowerHP;
}

console.log(isFirstEngineBetter(racingCar, consumerCar));
console.log(isFirstEngineBetter(consumerCar, racingCar));

// Ex. 3

function isFirstEngineBetter2(engineOne, engineTwo) {
  console.log(engineOne, engineTwo);
  return engineOne > engineTwo;
}

console.log(
  isFirstEngineBetter2(racingCar.enginePowerHP, consumerCar.enginePowerHP)
);
console.log(
  isFirstEngineBetter2(consumerCar.enginePowerHP, racingCar.enginePowerHP)
);

// Ex. 4

function showMostPowerfulCar(carOne, carTwo) {
  const mostPowerfulEngine =
    carOne.enginePowerHP > carTwo.enginePowerHP
      ? carOne.manufacturer
      : carTwo.manufacturer;
  // Pridėjome if-else (? :) todėl, kad be jų grąžintų tik true / false (buvo boolean tipas, užvedus ant mostPowerfulEngine)
  console.log(mostPowerfulEngine);
  alert(`${mostPowerfulEngine} car is better`);
}

showMostPowerfulCar(racingCar, consumerCar);
