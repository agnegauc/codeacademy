// If "onclick" was added to HTML as in-line code

function sayHello() {
  alert("Hello!");
  document.querySelector("button").textContent = "Hello"; // Perrašo button'o tekstą upon click
}

// Should rather do it like this:

document.querySelector("button:nth-child(2)").addEventListener("click", sayBye); // addEventListener turi du parametrus. Pirmas - koks event'o pavadinimas, antras - kokią funkciją paleisti, kai įvyks "click"

function sayBye() {
  document.querySelector("button:nth-child(2)").textContent = "Bye";
}

// Event: copy

document.querySelector("p").addEventListener("copy", disappear);

function disappear() {
  document.querySelector("p").innerHTML =
    "<span style ='display:hidden'></span>";
}

// Event: mouseover

document.querySelector("h1").addEventListener("mouseover", hover);

function hover() {
  document.querySelector("h1").innerHTML =
    "<span style ='color:red'>To red upon hover</span>";
}
