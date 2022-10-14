function Car(brand, model, engine, price) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.sound = function () {
    alert("wroom");
  };
  this.basePrice = price; // neprivalo vadintis taip pat, tik taip, kaip parametruose
  this.getPrice = function () {
    let finalPrice = "";

    switch (this.engine) {
      case "electric":
        finalPrice = this.basePrice + 10_000; // do not need const here but need to define the variable above switch with let!
        break;
      case "diesel":
        finalPrice = this.basePrice + 5_000;
        break;
      default:
        finalPrice = this.basePrice;
    }
    return finalPrice;
  };
}

const firstCar = new Car("BMW", "Series 3", "electric", 5000);

console.log(firstCar);

firstCar.sound(); // reikia iškviesti funkciją, jei norime, kad ji veiktų

console.log(firstCar.getPrice());
