/* Forma su vienu input - fullName. Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname). 
Vardą ir pavardę įdeda į objektą, o objektą - į array. Šį array išsaugo localStorage. 
Po forma sukurkite lentelę, kurioje bus atvaizduota informacija iš localStorage. */

const LOCAL_STORAGE_ITEM_KEY = "users";

const capitalise = (input) => {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

const renderUsersTable = () => {
  const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM_KEY));
  const tbody = document.querySelector("tbody");
  tbody.textContent = ""; // necessary because it adds all of the users again, so we'd have double / tripple users
  users.forEach((user) => {
    const name = document.createElement("td");
    name.textContent = user.firstNameCapitalised;

    const surname = document.createElement("td");
    surname.textContent = user.lastNameCapitalised;

    const tr = document.createElement("tr");
    tr.append(name, surname); // td to tr
    tbody.append(tr); // tr to body
  });
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fullNameDivided = document
    .querySelector("input")
    .value.trim()
    .split(" ");
  const firstName = fullNameDivided[0].trim();
  const lastName = fullNameDivided[fullNameDivided.length - 1]; // omitting any middle names

  const firstNameCapitalised = capitalise(firstName);
  const lastNameCapitalised = capitalise(lastName);
  const fullNameObject = { firstNameCapitalised, lastNameCapitalised };

  const usersInlocalStorage = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_ITEM_KEY)
  ); // getting what's currently in the storage
  if (usersInlocalStorage && usersInlocalStorage.length) {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      JSON.stringify([...usersInlocalStorage, fullNameObject])
    ); // if there's anything in the storage atm, take that and add our object to the array
  } else {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      JSON.stringify([fullNameObject])
    );
  }
  renderUsersTable();
});
