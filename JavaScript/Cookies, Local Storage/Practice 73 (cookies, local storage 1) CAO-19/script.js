// Set:

localStorage.setItem("myName", "Agne");
localStorage.setItem("mySurname", "Gauciute");

console.log(localStorage);

// Get:

const mySurnameIs = localStorage.getItem("mySurname");

console.log(mySurnameIs);

// Remove:

localStorage.removeItem("myName");

console.log(localStorage);

// Add cookie and overwrite cookie values under exact name (e.g. if you set a new "username:", JohnDoe will be overwritten):

document.cookie = "username=JohnDoe";
document.cookie = "environment=Space";
document.cookie = "age=18";

console.log(document.cookie);

console.log(document.cookie.includes("JohnDoe"));

/* Įrašyti vardą į formą; vardas išsaugojamas į cookies. 
Jei vardas jau egzistuoja - išmeta tik vardą ir mygtuką, su kuriuo cookies ištrinamas. 
Jei neegzistuoja - rodoma forma. 
P.S. Tokį komentarą palikti su Shift + Option + A */

const form = document.querySelector("form");
const output = document.querySelector("#output");
const nameField = document.querySelector("div > span");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredName = document.querySelector("input").value;
  const includedInCookies = document.cookie.includes(enteredName);

  if (includedInCookies) {
    nameField.textContent = enteredName;
    output.classList.remove("hidden");
    form.classList.add("hidden");
  } else {
    document.cookie = "name=" + enteredName;
  }
});

document.querySelector("#delete").addEventListener("click", (event) => {
  document.cookie = "name=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  nameField.textContent = "";
  output.classList.add("hidden");
  form.classList.remove("hidden");
});
