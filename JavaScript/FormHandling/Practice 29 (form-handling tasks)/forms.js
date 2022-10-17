// Ex. 1

document.querySelector("form").addEventListener("submit", myFunction);

// event = submit event'as (nebūtinai turi vadintis event)

function myFunction(event) {
  event.preventDefault(); // sustabdo defaultinį programos veikimą - perkrauti puslapį - ir tada veikia console.log
  console.log(event); // nepasileidžia be preventDefault, nes yra perkraunamas puslapis. Logina patį submit eventą (patikriname, kad funkcija pasileidžia po subit event'o)
}

// Ex. 2 - input to h1

document.querySelector("form").addEventListener("submit", printToHTML);

function printToHTML(event) {
  event.preventDefault();
  const result = document.querySelector("input").value;
  document.querySelector("h1").textContent = `Mano vardas ${result}`;
}

// Ex. 3 - input to alert

document.querySelector("form").addEventListener("submit", alertInput);

function alertInput(event) {
  event.preventDefault();
  alert(document.querySelector("input").value);
}
