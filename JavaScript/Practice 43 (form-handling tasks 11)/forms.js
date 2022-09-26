document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const numberOfRows = document.querySelector("input").value;

  let output = "";
  for (let n = 0; n < numberOfRows - 1; n++) {
    output += "C";
  }
  for (let n = 0; n < numberOfRows - 1; n++) {
    output += "C<br>";
  }
  for (let n = 0; n < numberOfRows; n++) {
    output += "C";
  }
  document.querySelector("p").innerHTML = output; // Būtinai innerHTML, not textCotent, nes kitaip <br> paims kaip tekstą!
});
