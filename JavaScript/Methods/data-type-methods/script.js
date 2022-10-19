// Pratimas 1

const showFormatedNumbers = () => {
  const value = Math.random() * 15;

  console.log(value);

  console.log(value.toFixed(2)); // du skaičiai po kablelio (string)

  console.log(value.toFixed(0)); // sveikas skaičius (string)

  console.log(parseInt(value)); // sveikas skaičius, suapvalintas į mažesnę pusę (number)

  console.log(Math.round(value));
};

showFormatedNumbers();

// Pratimas 2

const showFormatedStrings = () => {
  const value = "Šiandien trečiadienis     ";

  console.log(value);

  console.log(value.split(" ")[1]); // grąžina stringo masyvą

  console.log(`${value.trim()} 5`);

  console.log(`${value} 5`);

  console.log(value.slice(0, 3)); // end kintamojo neįskaito

  console.log(value.toLocaleLowerCase());

  console.log(value.includes("tre"));

  console.log(value.replace("trečia", "ketvirta"));
};

showFormatedStrings();

const showFormattedData = () => {
  const oddNumbers = [1, 2, 3, 4, 5].filter((number) => number % 2 === 1);

  console.log(oddNumbers);

  console.log(
    [1, 2, 3, 4, 5].filter((number) => {
      if (number % 2 === 1) {
        return number;
      }
    })
  );

  const multipliedNumbers = [1, 2, 3, 4, 5].map((number) => number * 2);

  console.log(multipliedNumbers);

  const isPositiveNumbers = [1, 2, -4, 4, 5].every((number) => number > 0);

  console.log(isPositiveNumbers);

  const hasNegativeNumbers = [-1, 2, -4, 4, 5].some((number) => number < 0);

  console.log(hasNegativeNumbers);

  const possibleNegativeNumber = [1, 2, -4, 4, 5].find((number) => number < 0);

  console.log(possibleNegativeNumber);

  [1, 2, -4, 4, 5].forEach((number) => console.log(number));
};

showFormattedData();
