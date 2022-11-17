const displayCars = (cars) => {
  const ul = document.body.querySelector("#unordered-list");
  ul.textContent = "";

  cars.forEach((car) => {
    const li = document.createElement("li");

    li.textContent = car;

    ul.append(li);
  });
};

const getCars = async () => {
  try {
    const response = await fetch("http://localhost:8080/cars"); // ne https
    const cars = await response.json();

    displayCars(cars);
  } catch (error) {
    console.error(error);
  }
};

await getCars();
