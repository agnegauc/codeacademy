const productsContainer = document.body.querySelector("#products-container");
const colorInput = document.body.querySelector("#color-input");
const headingElement = document.createElement("h1"); // šiaip if'e būtų našiau, bet iškėlus čia lieka tik vienas h1, o ne daug vienas po kito einančių.
const userCustomColor = prompt("What's the colour?");
const colors = ["red", "green", "blue", "yellow"];
let colorChangeTimes = 0; // must be 'let' and must be 0
// Kintamuosius būtinai talpinti į viršų! Funkcijoje irgi.

colors.push(userCustomColor); // pushinam prompt'o value į colors masyvą; nereikia .value šioje vietoje

colorInput.addEventListener("input", (event) => {
  const color = event.target.value.trim().toLowerCase(); // or toLocaleLowerCase, kad būtų atsižvelgiama į specifiškus simbolius (su Locale geriau)
  const isValueColor = colors.includes(color); // be kabučių, nes kitamasis

  // Jei vartotojo įvesta spalva yra actual spalva, tuomet tegu nustato:
  if (isValueColor) {
    colorChangeTimes++; // Skaičiuojame, kiek kartų keičiame spalvą.

    headingElement.textContent = `Pakeitėte spalvą kartų: ${colorChangeTimes}.`;

    document.body.prepend(headingElement);

    productsContainer.style.border = `4px dotted ${color}`;
  }
});
