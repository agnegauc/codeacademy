const productsContainer = document.body.querySelector("#products-container");
const colorInput = document.body.querySelector("#color-input");
// Kintamuosius būtinai talpinti į viršų! Funkcijoje irgi.

colorInput.addEventListener("input", (event) => {
  const color = event.target.value.trim().toLowerCase(); // or toLocaleLowerCase, kad būtų atsižvelgiama į specifiškus simbolius (su Locale geriau)

  productsContainer.style.border = `4px dotted ${color}`;

  switch (color) {
    case "red":
      console.log("red");
      break;
    case "green":
      console.log("green");
      break;
    case "blue":
      console.log("blue");
      break;
    case "purple": // po šito nėra break, todėl šiuo atveju bus console.log("yellow")
    case "yellow":
      console.log("yellow");
      break;
    default:
      console.log("Nepriimtina spalva");
  }
});
