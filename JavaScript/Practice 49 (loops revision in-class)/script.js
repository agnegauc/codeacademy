// Ex. 1

for (let i = 0; i <= 100; i++) {
  i % 2 === 1 ? console.log(i) : ""; // geriau daryti su if ir skliaustuose ne (i % 2 === 1), o įkelti į kintamąjį
}

// Ex. 2

let n = 80;

while (n > 0) {
  const isDivisibleByFive = n % 5 === 0;

  if (isDivisibleByFive) {
    console.log(n);
  }

  n--; // turi būti gale, kitaip neveiks. Tarpas prieš šitą reikalingas
}

// Ex. 3

const names = [
  "Agne",
  "Jonas",
  "Augustas",
  "Simas",
  "Rokas",
  "Justinas",
  "Martynas",
];

names.forEach((name) => {
  // Spausdinam kiekvieną vardą atskirai, o ne array
  console.log(name);
});

// Ex. 4

const otherNames = [
  "Agne",
  "Jonas",
  "Augustas",
  "Simas",
  "Rokas",
  "Justinas",
  "Martynas",
];

otherNames.forEach((name, i) => {
  if (i % 2 === 0) console.log(name); // Spausdinam kas antrą
});
