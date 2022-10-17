document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const rowCount = document.querySelector("input").value;

  let output = "";
  for (let n = 0; n < rowCount; n++) {
    const listItem = document.createElement("p");
    document.querySelector("div").append(listItem);
    listItem.textContent = "L";
  }
  for (let n = 0; n < rowCount; n++) {
    output += "L    ";
    document.querySelector("p:last-child").textContent = output;
  }
});

// codeAcademy version:

// function drawL(event) {
//   const size = Number(event.target.value);
//   const outputElement = document.getElementById('output');

//   let output = '';
//   for (i = 0; i < size - 1; i++) {
//     output += 'L<br>';
//   }
//   for (i = 0; i < size; i++) {
//     output += 'L'
//   }
//   outputElement.innerHTML = output;
// }

// document.getElementById('size').addEventListener('input', drawL)
