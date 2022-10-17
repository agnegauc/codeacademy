const specialCodeElement = document.getElementById("specialCode");
let count = 0;

// Adding this commented "for" loop to Practice 18:

// for (let index = 0; index < 100; index++) {
//   document.getElementById("count").append(index);
// }

// With the following "for" console-logins A, S ir D raides:

for (const element of ["A", "S", "D"]) {
  console.log(element);
}

specialCodeElement.addEventListener("mouseover", () => {
  incrementCount();

  document.getElementById("count").innerText = count;
});

const colorTheCode = () => {
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

// Ex. 2, intervalas runninasi konsolėj kas 10 milisekundžių iki 9 (nes sakom jei 10, stabdyti intervalą)

let i = 0;
const interval = setInterval(() => {
  console.log(i++);
  if (i === 10) {
    clearInterval(interval);
  }
}, 10);
