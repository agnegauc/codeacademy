const nameArray = [];

function addNameToList(event) {
  event.preventDefault();
  const name = ` ${event.target.value}`; // Vietoj document.querySelector("input").value
  nameArray.push(name);
  document.querySelector("p").textContent = nameArray;
}

document.querySelector("input").addEventListener("blur", addNameToList); // Kažkodėl netiko "form" vietoj "input" čia

// codeAcademy solution:

// function addNameToList(event) {
//   const name = event.target.value.trim();
//   const outputElement = document.querySelector("p");
//   if (name) {
//     outputElement.innerText += `${name}, `;
//   }
// }

// document.getElementById('name').addEventListener('blur', addNameToList);
