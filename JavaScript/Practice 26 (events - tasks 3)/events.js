// Ex. 9, JS events, Lesson 5

const doNotClick = document.createElement("h4");
doNotClick.innerHTML = "Nespauskite mygtuko";
document.body.append(doNotClick);

let allButtons = document.querySelectorAll("button");
allButtons.addEventListener("click", notListening);

function notListening() {
  document.querySelector("h4").textContent = "Neklausote manęs";
}

// let elements = document.querySelectorAll(".box, .container");
// elements.forEach(element => {
//   element.style.background = "lightgreen";
// });
