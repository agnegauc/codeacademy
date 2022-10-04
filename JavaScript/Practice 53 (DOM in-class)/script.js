const heading = document.body.querySelector("#seo-heading"); // geriausia priskirti kintamajam, kad nereikėtų rašyti dar kartą; kodas būtų skaitomesnis
// document.body --> geriau pridėti body šioje vietoje dėl našumo. Tokiu būdu nagrinės tik dokumento body
const firstName = prompt("What's your name?");
const lastNameInput = document.body.querySelector("#last-name-input");

heading.textContent = firstName;

lastNameInput.addEventListener("change", (event) => {
  // dar yra "keydown", "input"...
  // nereikia event.preventDefault(), nes puslapis nepersikrauna; su "keydown" preventDefault visai neveiks
  const lastName = event.target.value.trim(); // trim() padės išvengti tarpų
  heading.textContent = `${firstName} ${lastName}`;
});

// Vietoj addEventListener, funkciją iškviesti galime per HTML (see HTML):
const onSubmit = (event) => {
  event.preventDefault();

  alert("Successful");
};
