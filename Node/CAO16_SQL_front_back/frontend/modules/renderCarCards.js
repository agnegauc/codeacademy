const displayCars = (cars) => {
  const container = document.body.querySelector("#cards-container");
  container.textContent = "";

  cars.forEach((car) => {
    const card = document.createElement("div");
    const imgContainer = document.createElement("div");
    const title = document.createElement("p");
    const image = document.createElement("img");
    const numberplates = document.createElement("h3");
    const deleteButton = document.createElement("p");

    title.textContent = car.title;
    numberplates.textContent = car.numberplates;
    deleteButton.textContent = "delete";
    image.src = car.image;
    card.className = "card";
    imgContainer.className = "img-container";
    title.className = "card-title";
    deleteButton.className = "card-delete";

    imgContainer.append(image);
    card.append(numberplates, title, imgContainer, deleteButton);
    container.append(card);
  });
};

const displayEmptyMessage = () => {
  const cardsContainer = document.body.querySelector("#cards-container");
  const message = document.createElement("p");

  message.textContent =
    "There are no cars at the moment. Please add a car or try again later.";

  cardsContainer.append(message);
};

const getCars = async () => {
  try {
    const response = await fetch("http://localhost:8000/cars");
    const cars = await response.json();

    if (cars.length < 1) {
      return displayEmptyMessage();
    } else displayCars(cars);
  } catch (error) {
    console.error(error);
  }
};

await getCars();
