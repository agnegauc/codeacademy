document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const repeatTimes = document.querySelector("input#number").value;
  const repeatContent = document.querySelector("input#name").value;

  for (let i = 0; i < repeatTimes; i++) {
    const listItem = document.createElement("li"); // To create a new element, it has to be a variable (const). Does not work if this line is incorporated in the code below
    listItem.innerText = repeatContent;
    document.querySelector("ul").append(listItem);
  }
});
