// Ex. 1 Parašykite pažadą, kuris visada resolvinsis po 5 sekundžių. Kai resolve - išoka alert "Veikia"

const fakePromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 5_000);
});

fakePromise.then(() => alert("Veikia"));

console.log(
  "Šitas kodas pasileis pirmas, nors ir yra paskutinis. Tai būtent mūsų asinchroniškumas"
);

// Ex. 2 Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolvinsis po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

const secondFakePromise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 5) + 1;

  setTimeout(() => {
    if (random === 1) {
      reject();
    } else {
      resolve();
    }
  }, 5_000);
});

secondFakePromise
  .then(() => console.log("Veikia")) // resolve
  .catch(() => console.log("Oops, pažadas buvo atmestas")); // reject

/* Ex. 3 Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(), 
kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna antrasis then() ir ją alertina. 
Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą. */

// secondFakePromise
//   .then(() => "This is message")
//   .then((message) => alert(message))
//   .catch(() => alert("Oops, pažadas buvo atmestas"));
