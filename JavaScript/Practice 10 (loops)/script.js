// 1 pratimas

for (let i = 0; i < 10; i++) {
    console.log("Agne"); // po console.log ir prieš } reikia kabliataškio
};

// 2 pratimas

const myName = "Agne";

const repeatCount = 5;

for (let i = 0; i < repeatCount; i++) {
    console.log(`${myName}.${i}`); // Nepamiršti, kad veiks tik su būtent tokiomis kabutėmis. Vietoj taško gali būti tarpas ar bet kas kita
};

// 3 pratimas

for (let i = 10; i > 0; i--) {
    console.log(i);
};

// 4 pratimas (do... while)

let i = 0;

do {
    console.log("Agne");
    i++
} while (i < 3);

// 5 pratimas (while)

let p = 0;

while (p < 3) {
    console.log("Mano Vardas");
    p++
};

// 6 pratimas

let combo = ""; // apibrėžta in "do"

let times = 3;

const nameNow = "Petras";

do {
    combo += nameNow;
    times--
} while (times > 0);

console.log(combo);