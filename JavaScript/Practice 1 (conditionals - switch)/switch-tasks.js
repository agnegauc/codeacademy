const rating = +prompt("How would you rate it?") // pliusas paverčia į skaičių. Reikia skaičiaus, nes rating gali būti tik stringas be pliuso

switch (rating) {
    case 5:
        console.log("Puiku");
        break;

    case 4:
        console.log("Gerai");
        break;

    case 3:
        console.log("Vidutiniškai");
        break;

    default:
        console.log("Blogai");
        break;
}

console.log(`Įvertinimas: ${rating}`);
