const myName = "Agnė";

if (myName.length > 6) {
    console.log("Ilgas vardas")
} else {
    console.log("Trumpas vardas")
};

// 2 pratimas

const myAge = 25;

if (myAge > 100 || myAge <= 0) {
    console.log("Invalid age")
} else if (myAge >= 1 && myAge < 18) {
    console.log("Child")
} else {
    console.log("Adult")
};

// 3 pratimas

const vwGroup = ["VW", "Audi", "Bentley", "Bugatti", "Lamborghini", "Porsche"];

const bmwGroup = ["BMW", "Mini", "Rolls-Royce"];

const selectedCar = "Audi";

if (vwGroup.indexOf(selectedCar) === -1) { // indexOf returns the element's index in he array. If none, returns -1
    console.log("BMW Group")
} else {
    console.log("VW Group")
};