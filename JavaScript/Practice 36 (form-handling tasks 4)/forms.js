const ageInput = document.querySelector("input#age"); // negali čia būti .value, nes eventListeneris veda į funkciją, tai value nuskaitys tik funkcijoje
const isConvicted = document.querySelector("input#conviction");

// Function'e parašytas isConvicted.checked returns true or false

document.querySelector("form").addEventListener("submit", military);

function military(event) {
  event.preventDefault();
  if (ageInput.value >= 18 && ageInput.value <= 30 && !isConvicted.checked) {
    // ! reiškia NOT
    document.querySelector("h1").textContent = "Į kariuomenę eiti reikės";
  } else
    document.querySelector("h1").textContent = "Į kariuomenę eiti nereikės";
}
