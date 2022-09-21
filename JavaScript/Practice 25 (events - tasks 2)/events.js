// Ex. 3, JS events, Lesson 5

document.querySelector("button").addEventListener("click", aboutMe);

function aboutMe() {
  const infoAbout = document.createElement("h2");
  infoAbout.innerHTML = "This is information about me";
  document.body.append(infoAbout);
}

// Ex. 4, JS events, Lesson 5

document.querySelector("button").addEventListener("click", increaseByOne);

function increaseByOne() {
  const increasedNumber =
    parseInt(document.querySelector("h1").textContent) + 1; // parseInt to convert string to number
  document.querySelector("h1").textContent = increasedNumber;
}

// Ex. 6, JS events, Lesson 5

document.querySelector("button").addEventListener("click", randomNumberToH3);

function randomNumberToH3() {
  const random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  const creatingH3 = document.createElement("h3");
  creatingH3.textContent = random;
  document.body.append(creatingH3);
}

// Ex. 7, JS events, Lesson 5

document.getElementById("adult").addEventListener("click", adultResult);
document.getElementById("underage").addEventListener("click", underageResult);

function adultResult() {
  alert("Galite pirkti alų");
}

function underageResult() {
  alert("Nepilnametis - nieko neturim");
}

// Ex. 8, JS events, Lesson 5

const randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber);

document.getElementById("one").addEventListener("click", firstAnswer);
document.getElementById("two").addEventListener("click", secondAnswer);
document.getElementById("three").addEventListener("click", thirdAnswer);

function firstAnswer() {
  if (randomNumber === 1) {
    alert("Yay");
  } else alert("Nay");
}
function secondAnswer() {
  if (randomNumber === 2) {
    alert("Yay");
  } else alert("Nay");
}
function thirdAnswer() {
  if (randomNumber === 3) {
    alert("Yay");
  } else alert("Nay");
}
