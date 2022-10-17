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

// 4 pratimas

const car = "Mini";

switch (car) {
    case "BMW":
    case "Mini":
    case "Rolls-Royce":
        console.log("BMW Group");
        break;
    case "VW":
    case "Bentley":
    case "Audi":
        console.log("VW Group");
        break;
    default:
        console.log("Undefined")
        break;
}

// 5 pratimas

const userInput = "Obuolys";

switch (userInput) {
    case "Mandarinas":
    case "Apelsinas":
    case "Bananas":
    case "Obuolys":
        console.log("Vaisius");
        break;
    case "Agurkas":
    case "Moliūgas":
    case "Cukinija":
    case "Baklažanas":
        console.log("Daržovė");
        break;
    default:
        console.log("Nei vaisius, nei daržovė");
        break;
}

// 6 pratimas

let weekDay = new Date().getDay(); // getDay returns 1 for Monday. There are also functions like getDate (day of the month), getFullYear etc, just include 'new' and ()
switch (weekDay) {
    case 0:
        weekDay = 'Sekmadienis';
        break;
    case 1:
        weekDay = 'Pirmadienis';
        break;
    case 2:
        weekDay = 'Antradienis';
        break;
    case 3:
        weekDay = 'Trečiadienis';
        break;
    case 4:
        weekDay = 'Ketvirtadienis';
        break;
    case 5:
        weekDay = 'Penktadienis';
        break;
    case 6:
        weekDay = 'Šeštadienis';
        break;
}

console.log(weekDay);

// 7 pratimas

const myNameIs = "Agne";

console.log(myNameIs.length < 5 ? "Short name" : "Long name"); // nepamiršti .length , kai kalbam apie # of characters

// 8 pratimas

const clientAge = 100; // nepamiršti, jog skaičiams nereikia kabučių

const legalAge = 18;

console.log(clientAge <= 0 || clientAge > 100 ? "Invalid age" : (clientAge >= legalAge ? "Can drive" : "Cannot drive"));

// code academy pasiūlytas variantas:
// clientAge <= 0 || clientAge > 100 ? console.log("Invalid age") : clientAge >= legalAge ? console.log("Can drive") : console.log("Cannot drive");


// 9 pratimas

const phone = "iPhone";

const isIphoneUser = phone === "iPhone"; // Klausiame, ar telefonas yra iPhone ir tikimės true / false

console.log(isIphoneUser);