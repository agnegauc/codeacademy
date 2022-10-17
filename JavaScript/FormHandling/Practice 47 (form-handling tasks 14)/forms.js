let counter = 0;
let randomNumber = Math.floor(Math.random() * 4 + 1);

document.querySelector("h1").textContent = randomNumber;

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  counter++; // counts how many times the form has been submitted
  const guessedNumber = document.querySelector("input").value; // value is a string, therefore == below (not ===)
  if (guessedNumber == randomNumber) {
    alert(`Atspėjai iš ${counter} karto!`);
  } else alert("Bandyk dar kartą!");
});
