// Ex. 1

const headerText = document.querySelector("h1");

headerText.addEventListener("mouseover", (event) => {
  event.preventDefault();
  headerText.style.textAlign = "center";
  headerText.style.color = "red";
  headerText.style.fontSize = "4rem";
});

// Ex. 2 - codeAcademy way - jumping between top-left and bottom-right corner

// const button = document.querySelector("button");
// button.style.cssText = "position:absolute; top:0; left:0;";

// let thisSetupIsNumbered = 1; // must be 'let' for it to work. Better name 'isInOriginalPosition', but this one for learning
// button.addEventListener("click", (event) => {
//   button.style.cssText = thisSetupIsNumbered
//     ? "position:absolute; bottom:0; right:0;"
//     : "position:absolute; top:0; left:0;";
//   thisSetupIsNumbered = !thisSetupIsNumbered; // does not equal the opposite thing. Very smart!
// });

// Ex. 2 - my way

// const button = document.querySelector("button");
// button.style.cssText = "position:absolute; top:0; left:0;";

// let thisSetupIsNumbered = 1;
// function changePosition(event) {
//   console.log(thisSetupIsNumbered); // not necessary; added for learning purposes
//   if (thisSetupIsNumbered == 1) {
//     // must be == or === for it to work
//     button.style.cssText = "position:absolute; bottom:0; right:0;";
//     thisSetupIsNumbered = 2; // basically changes what's in the 30th row but only valid inside the function
//   } else {
//     button.style.cssText = "position:absolute; top:0; left:0;";
//     thisSetupIsNumbered = 1;
//   }
// }

// button.addEventListener("click", changePosition);

// Ex. 3 - my way - button jumping clockwise

// const button = document.querySelector("button");
// button.style.cssText = "position:absolute; top:0; left:0;";

// let thisSetupIsNumbered = 1;
// function changePosition(event) {
//   if (thisSetupIsNumbered == 1) {
//     button.style.cssText = "position:absolute; top:0; right:0;";
//     thisSetupIsNumbered = 2;
//   } else if (thisSetupIsNumbered == 2) {
//     button.style.cssText = "position:absolute; bottom:0; right:0;";
//     thisSetupIsNumbered = 3;
//   } else if (thisSetupIsNumbered == 3) {
//     button.style.cssText = "position:absolute; bottom:0; left:0;";
//     thisSetupIsNumbered = 4;
//   } else if (thisSetupIsNumbered == 4) {
//     button.style.cssText = "position:absolute; top:0; left:0;";
//     thisSetupIsNumbered = 1;
//   }
// }

// button.addEventListener("click", changePosition);

// Ex. 3 - codeAcademy way

const button = document.querySelector("button");
button.style.cssText = "position:absolute; top:0; left:0";

let corner = 0;
const cornerStyles = [
  "position:absolute; top:0; right:0;",
  "position:absolute; bottom:0; right:0;",
  "position:absolute; bottom:0; left:0;",
  "position:absolute; top:0; left:0;",
]; // an array, cornerStyles.length = 4
function changePosition(event) {
  if (corner < cornerStyles.length) {
    event.target.style.cssText = cornerStyles[corner];
    corner++;
  }
  if (corner === cornerStyles.length) {
    corner = 0;
  }
}

button.addEventListener("click", changePosition);
