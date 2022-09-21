// [{}] masyvas, kuriame yra objektai

const items = [
  { productName: "Tamsios spalvos akiniai" },
  { productName: "Šviesios spalvos akiniai" },
  { productName: "Žalios spalvos akiniai" },
  { productName: "Geltonos spalvos akiniai" },
];

const getConcatenatedItems = () => {
  const initialValue = "";
  const concatenatedString = items.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.productName.split(" ")[0], // Stringas negali turėti productName, o currentValue jau yra objektas. Sudėti productNames nebeturės savo atskiro productName
    initialValue
  );

  return concatenatedString;
};

console.log(getConcatenatedItems()); // Grąžina sudėtus product names visus kaip vieną string'ą (dėl .split - tik jų pirmus žodžius be tarpų)

// pirmi žodžiai su tarpu (14 eilutė):

// `${previousValue} ${currentValue.productName.split(" ")[0]}`
