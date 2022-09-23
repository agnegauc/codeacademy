// My way:

// const yearsOfEmployment = document.querySelector("input");
// const bonus = 50;
// const displayBonus = document.querySelector("p");

// document.querySelector("form").addEventListener("submit", bonusCalculator);

// function bonusCalculator(event) {
//   event.preventDefault();
//   if (yearsOfEmployment.value > 10 && yearsOfEmployment.value < 20) {
//     displayBonus.textContent = `Jūsų bonusas: ${bonus + 50} eurų`;
//   } else if (yearsOfEmployment.value >= 20) {
//     displayBonus.textContent = `Jūsų bonusas: ${bonus + 100} eurų`;
//   } else displayBonus.textContent = `Jūsų bonusas: ${bonus} eurų`;
// }

// (Paprastesnis) codeAcademy way:

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const yearsOfEmployment = document.querySelector("input").value;

  let bonus = 50; // keisis funkcijoje, todėl "let"

  if (yearsOfEmployment > 10) {
    bonus += 50; // pridedam 50
  }
  if (yearsOfEmployment >= 20) {
    // jei čia būtų else if, tuomet pirmo if sąlygoje reiktų pridėti "<20"
    bonus += 100;
  }

  document.querySelector("p").textContent = `Jūsų bonusas: ${bonus} eurų`;
});
