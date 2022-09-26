document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const repeatTimes = document.querySelector("input").value;
  let output = ""; // Attention!

  for (let i = 0; i < repeatTimes; i++) {
    output += "*";
    const newPara = document.createElement("p");
    newPara.textContent = output;
    document.querySelector("div").append(newPara);
  }
});
