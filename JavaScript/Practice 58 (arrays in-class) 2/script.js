// Konstruktoriai rašomi iš didžiosios. Tokiu būdu iškvietę funkciją gausime naują objektą:
function Car(price, color) {
  this.price = price; // būtent šios funkcijos, todėl rašome 'this'
  this.color = color;
}

const car = {
  price: 20_000,
  color: "red",
};
const products = [car]; // Gali būti const, nors ir keisim jį, nes yra masyvas

// Jei rašome new, bus sukurtas naujas objektas pagal konstruktorių
const premiumCar = new Car(100_000, "red");
const flower = {
  price: 20,
  color: "pink",
};

products.push(premiumCar);

// Priskiriame = 20, kad jei vėliau nepakeisim, default'as būtų 20
const addProducts = (productsAmount = 20) => {
  function RandomProduct() {
    const randomNumber = Math.random();

    this.price = randomNumber * 9_000 + 1_000;

    if (Math.round(randomNumber)) {
      // rezultatas 0 arba 1, todėl truthy arba falsy
      this.color = "black";
    } else {
      this.isAvailable = true;
    }
  }

  for (let i = 0; i < productsAmount; i++) {
    const product = new RandomProduct();
    products.push(product);
  }
};

const removeFirstProduct = () => {
  products.shift();
};

removeFirstProduct();
addProducts(15); // kviečiame funkciją

console.log(products);

// forEach metodas nieko negrąžina. "Kiekvienoje iteracijoje norėčiau turėti tokį produktą su tokiu indexu"
products.forEach((product, productNumber) =>
  console.log({ price: product.price, productNumber })
); // normally būtų tik product.price, bet objektų skliaustuose nesupranta, todėl priskiriam naują dalyką

const getProductWithNewInMiddle = (product) => {
  const halfLength = Math.round(products.length / 2);
  const modifiedProducts = [
    ...products.slice(0, halfLength), // Šitie daugtaškiai padeda vietoj kelių skirtingų masyvų gauti vieną didelį (spread'as)
    product,
    ...products.slice(halfLength),
  ];

  return modifiedProducts; // šiaip čia buvo console.log(modifiedProducts), bet pridėjom return, kad galėtume išimti ir įdėti į kintamąjį (assuming, kad jo reikšmę naudosime kažkur vėliau)
};

const rearrangedProducts = getProductWithNewInMiddle(flower);
console.log(rearrangedProducts);
