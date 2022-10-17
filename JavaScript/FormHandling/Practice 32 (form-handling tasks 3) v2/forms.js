// Pratime codeAcademy buvo aprašyti šie variables ir toliau naudoti jie paprastumo dėlei.
// Mokymosi tikslais palikau pilnus variantus.

// const ageInput = document.querySelector("input");
// const form = document.querySelector("form");
// const priceDisplay = document.querySelector("h1");

document.querySelector("form").addEventListener("submit", priceCalculator);

function priceCalculator(event) {
  event.preventDefault();
  const price = 6;
  const result = document.querySelector("input").value;
  if (result < 16) {
    document.querySelector("h1").textContent = `Kaina ${(0.5 * price).toFixed(
      2
    )} €`;
  } else if (result > 60) {
    document.querySelector("h1").textContent = `Kaina ${(
      (1 / 3) *
      price
    ).toFixed(2)} €`;
  } else
    document.querySelector("h1").textContent = `Kaina ${price.toFixed(2)} €`;
}
