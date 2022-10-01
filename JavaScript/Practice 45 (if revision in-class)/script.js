const userName = prompt("Enter your name");
const userAge = +prompt("Enter your age"); // pliusas, kad pavirstų į skaičių. Otherwise visi prompts - stringai
const userRegion = navigator.language.toLocaleLowerCase(); // reiškia tiesiog to lower case, bet geriau dėl nosinių ir kitų spec. simbolių
const hasAppropriateAge = userAge >= 16;
const isLithuanianUser = userRegion === "lt";
// visus const stengiamės sukelti į viršų į vieną krūvą

console.log({ userName, userAge });

if (hasAppropriateAge && isLithuanianUser) {
  const firstThreeLetters = userName.slice(0, 3);
  const randomNumber = parseInt(1_000 + Math.random() * 8_999);
  const giftCode = `${firstThreeLetters}${randomNumber}`; // Galima rašyti ir į alert'ą žemiau, bet geriau sukurti kintamąjį dėl skaitomumo

  alert(`Jums priklauso nuolaidų kodas: ${giftCode}`);
}
