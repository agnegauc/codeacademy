const form = document.querySelector("#add-property-form");
const cities = ["Vilnius", "Kaunas", "Klaipeda", "Šiauliai", "Panevėžys"];

cities.forEach((city) => {
  const addCity = document.querySelector("#saleCities");
  const option = document.createElement("option");
  option.setAttribute("value", city);
  option.textContent = city;
  addCity.append(option);
});

function displayStatus(isOk, text) {
  const statusDiv = document.querySelector("#statusMessages");
  const statusText = document.createElement("h1");
  statusDiv.style.color = isOk ? "03d3b2" : "red";
  statusText.textContent = text;
  statusDiv.append(statusText);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const addFormData = new FormData(form); // FormData object will be populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values.
  document.querySelector("#statusMessages").textContent = "";

  try {
    const response = await fetch("https://radial-reinvented-shoe.glitch.me", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(addFormData)), // Sukuriame object su atsakymais ir paverčiam į stringą. The Object.fromEntries() method transforms a list of key-value pairs into an object.
    });
    if (response.ok) {
      displayStatus(response.ok, "Property successfully added.");
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    displayStatus(false, `Something went wrong. Server returned: ${error}.`);
  }
});
