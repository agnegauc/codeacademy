// Ex. 1

const isLegalAge = true;

console.log(isLegalAge);
console.log(isLegalAge.toString());

// Ex. 2

const milkPrice = 2.99;

console.log(Number.isInteger(milkPrice) ? "Nereikia centų" : "Reikia centų");
console.log(milkPrice.toFixed(2));

// Ex. 3

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const numberInput = +document.querySelector("#number").value;
  const nameInput = document.querySelector("#name").value;

  const isInteger = Number.isInteger(numberInput);

  if (isInteger) {
    const numberDisplay = document.createElement("h1");

    numberDisplay.textContent = nameInput.repeat(numberInput);
    document.body.append(numberDisplay);
  } else alert("Ne sveikas skaičius");
});

// Ex. 4

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const nameLength = document.querySelector("#name").value.trim().length;
  alert(nameLength);
});
