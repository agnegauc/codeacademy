// Ex. 5

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.querySelector("#full-name").value;
  const firstName = fullName.split(" ")[0].trim();
  const surname = fullName.split(" ")[1].trim();
  const firstNameDisplay = document.createElement("h1");
  const surnameDisplay = document.createElement("h1");

  firstNameDisplay.textContent = firstName;
  surnameDisplay.textContent = surname;
  document.body.append(firstNameDisplay, surnameDisplay);
});

// Ex. 6

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.querySelector("#full-name").value;
  const firstName = fullName.split(" ")[0].trim();
  const surname = fullName.replace(firstName, "").slice(1).trim();
  const firstNameDisplay = document.createElement("p");
  const surnameDisplay = document.createElement("p");

  firstNameDisplay.textContent = firstName;
  surnameDisplay.textContent = surname;
  document.body.append(firstNameDisplay, surnameDisplay);
});

// Ex. 7 (callback functions)

// The following two are callback functions:

function alertName(firstName2) {
  alert(firstName2);
}

function consoleName(firstName2) {
  console.log(firstName2);
}

// Main function:

function coreFunction(nameInput, callback) {
  const capitalisedName =
    nameInput.charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase(); // Capitalise name

  callback(capitalisedName);
}

coreFunction("agne", alertName);
