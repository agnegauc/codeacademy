// Ex. 1

document.querySelector("input").addEventListener("input", (event) => {
  const inputLength = document.querySelector("input").value.length; // also possible: event.target.value.length
  if (inputLength <= 2) {
    document.body.style.backgroundColor = "red";
  } else document.body.style.backgroundColor = "green";
});

// Ex. 2

// const colourSelection = ["red", "green", "blue", "yellow"];

// document.querySelector("button").addEventListener("click", (event) => {
//   event.preventDefault();
//   const randomColourIndex = Math.floor(Math.random() * 4);
//   document.querySelector("button").style.backgroundColor =
//     colourSelection[randomColourIndex]; // also possible: event.target.style.backgroundColor
// });

// Ex. 3 - same as Ex. 2 but with RGB instead of an array

document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  const randomRed = Math.floor(Math.random() * 255);
  const randomGreen = Math.floor(Math.random() * 255);
  const randomBlue = Math.floor(Math.random() * 255);
  document.querySelector(
    "button"
  ).style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
});
