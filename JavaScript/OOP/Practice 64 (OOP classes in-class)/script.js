class Product {
  price;
  unitsAvailable;

  // Kuriame klasei konstruktorių (negali būti bet koks pavadinimas, būtinai constructor):

  constructor(price, unitsAvailable) {
    this.price = price;
    this.unitsAvailable = unitsAvailable;
  }

  getSumRevenue() {
    return this.price * this.unitsAvailable;
  }
}

// getPrice yra klasės metodas (funkcija)

// Kuriame naują objektą:

const shirt = new Product(10, 150); // Paduodam price and unitsAvailable į parametrus

// Kviečiame funkciją:

console.log(shirt.getSumRevenue());
