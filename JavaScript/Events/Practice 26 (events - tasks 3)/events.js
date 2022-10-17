// Ex. 9, JS events, Lesson 5

// Sukuriame naują H4 elementą:

const doNotClick = document.createElement("h4");
doNotClick.innerHTML = "Nespauskite mygtuko";
document.body.append(doNotClick);

// querySelectorAll grąžina array, dėl to turime papildomai rašyti forEach:

let allButtons = document.querySelectorAll("button");
allButtons.forEach((element) =>
  element.addEventListener("click", notListening)
);

// Iškviesta funkcija:

function notListening() {
  document.querySelector("h4").textContent = "Neklausote manęs";
}

// Ex. 10, JS events, Lesson 5

document.querySelector("h1").addEventListener("mousemove", doNotMove);

function doNotMove() {
  document.querySelector("h1").textContent = "Kiek galima neklausyti?!";
}
