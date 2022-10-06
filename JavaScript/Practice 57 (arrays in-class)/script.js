// Konstruktoriai rašomi iš didžiosios. Tokiu būdu iškvietę funkciją gausime naują objektą:
function Car(price, color) {
  this.price = price; // būtent šios funkcijos, todėl rašome 'this'
  this.color = color;
}

// Kuriame dar vieną konstruktorių:

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

for (let i = 0; i < 20; i++) {
  const product = new RandomProduct();

  products.push(product);
}

// Atima patį pirmą masyvo elementą (nenašus though):
products.shift();

console.log(products);

// forEach metodas nieko negrąžina. "Kiekvienoje iteracijoje norėčiau turėti tokį produktą su tokiu indexu"
products.forEach((product, productNumber) =>
  console.log({ price: product.price, productNumber })
); // normally būtų tik product.price, bet objektų skliaustuose nesupranta, todėl priskiriam naują dalyką
