const standardTicket = 6;
const studentTicket = standardTicket * 0.5;
const oldTicket = standardTicket - standardTicket * 0.3;

document.querySelector("form").addEventListener("submit", priceCalculator);

function priceCalculator(event) {
  event.preventDefault();
  const result = document.querySelector("input").value;
  if (result < 16) {
    document.querySelector("h1").textContent = `Kaina ${studentTicket} €`;
  } else if (result > 60) {
    document.querySelector("h1").textContent = `Kaina ${oldTicket} €`;
  } else document.querySelector("h1").textContent = `Kaina ${standardTicket} €`;
}
