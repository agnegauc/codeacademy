import { deleteCar } from "./modules/deleteCar.js";
import { getCars } from "./modules/renderCarCards.js";

await getCars();

document.querySelectorAll(".card-delete").forEach((car) => {
  car.addEventListener("click", deleteCar);
});
