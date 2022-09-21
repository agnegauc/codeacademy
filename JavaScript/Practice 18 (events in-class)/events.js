// Užvedus pelę, bus count++ (0 padidintas per 1 kiekvieną kartą užvedus pelę ant specialCodeElement)

// const specialCodeElement = document.getElementById("specialCode");
// let count = 0;

// specialCodeElement.addEventListener("mouseover", () => {
//   document.getElementById("count").innerText = count++;
//   if (count >= 10 && count < 20) {
//     specialCodeElement.style = "background-color: yellow";
//   } else if (count >= 20) {
//     specialCodeElement.style = "background-color: red";
//   }
// });

// Better way to color the code below, nes atskiriems dalykams daryti parašytos atskiros funkcijos.

const specialCodeElement = document.getElementById("specialCode");
let count = 0;

specialCodeElement.addEventListener("mouseover", () => {
  incrementCount();

  document.getElementById("count").innerText = count; // Nebereikia count++
});

const colorTheCode = () => {
  // Ši funkcija spalvina
  if (count >= 20) {
    specialCodeElement.style = "background-color: red";
  } else if (count >= 10) {
    specialCodeElement.style = "background-color: yellow";
  }
};

const incrementCount = () => {
  // Ši funkcija įdeda counterį
  count++;
  colorTheCode();
};
