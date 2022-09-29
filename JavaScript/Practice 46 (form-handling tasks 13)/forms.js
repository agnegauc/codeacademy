document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  const firstDifference = Math.abs(firstNumber - 100);
  const secondDifference = Math.abs(secondNumber - 100);

  if (firstDifference < secondDifference) {
    alert(`${firstNumber}`);
  } else alert(`${secondNumber}`);
});
