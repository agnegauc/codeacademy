const productsContainer = document.body.querySelector("#products-container");
const colorInput = document.body.querySelector("#color-input");
// Kintamuosius būtinai talpinti į viršų! Funkcijoje irgi.

productsContainer.style.height = "400px";

colorInput.addEventListener("input", (event) => {
  const color = event.target.value;

  productsContainer.style.border = `4px dotted ${color}`;
});
