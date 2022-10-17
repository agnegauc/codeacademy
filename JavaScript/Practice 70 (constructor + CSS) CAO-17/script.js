function Car(carBrand, model, mileage, price, image) {
  this.carBrand = carBrand;
  this.model = model;
  this.mileage = mileage;
  this.price = price;
  this.image = image;
  this.appendPage = () => {
    const description = document.createElement("h6");
    const img = document.createElement("img");
    const container = document.createElement("div"); // Needed to create a separate div for flex to work + to be able to click on the box and get an alert
    container.addEventListener("click", () => alert(`Price: ${this.price}`));

    container.classsName = "container"; // This is how to set attributes
    img.src = this.image; // Kitaip kažkaip su setAttribute() gal
    description.textContent = `${this.carBrand} ${this.model}`;

    container.append(img, description); // querySelector doesn't seem to work here; maybe because I created the element
    document.querySelector("div.wrapper").append(container);
  };
  this.displayAlert = () => alert(this.price);
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const carBrand = document.querySelector("#carBrand").value;
  const model = document.querySelector("#model").value;
  const price = document.querySelector("#price").value;
  const image = document.querySelector("#image").value;

  const car = new Car(carBrand, model, mileage, price, image);

  car.appendPage();
});
