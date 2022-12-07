const state = {};

const renderPropertyCards = (properties) => {
  const propertyContainer = document.querySelector("#properties-container");
  propertyContainer.textContent = ""; // Select the whole block (in other practices - body) and make sure it's empty before forEach

  properties.forEach((property) => {
    const image = document.createElement("img");
    const price = document.createElement("h1");
    const city = document.createElement("p");
    const description = document.createElement("p");
    const cardContainer = document.createElement("div");

    image.src = property.image;
    price.textContent = `${property.price} €`;
    city.textContent = property.city;
    description.textContent = property.description;

    image.setAttribute("alt", "Property picture");
    cardContainer.setAttribute("class", "property-card");

    cardContainer.append(image, price, city, description);
    propertyContainer.append(cardContainer);
  });
};

// Map paima iš duomenų visus miestus; new Set išmeta pasikartojančius:
// console.log([...new Set(state.properties.map((entry) => entry.city))]);

const renderFilterButtons = (cities) => {
  // į parametrus (as cities) paduosim an array of cities that we will get later (logic in the commented console.log above)
  cities.forEach((city) => {
    const filterButton = document.createElement("button");
    const filtersContainer = document.querySelector("#filters-container");
    filterButton.textContent = city;
    filterButton.setAttribute("id", `${city}-container`);
    filtersContainer.append(filterButton);
  });
};

const getProperties = async () => {
  try {
    const response = await fetch("https://radial-reinvented-shoe.glitch.me");
    const fetchedProperties = await response.json();

    return fetchedProperties; // reikia returnint būtinai!
  } catch (error) {
    console.error(error);
  }
};

const properties = await getProperties(); // kviečiam būtinai su await

state.properties = properties;

renderPropertyCards(state.properties);
renderFilterButtons([...new Set(state.properties.map((entry) => entry.city))]);

document
  .querySelector("#filters-container")
  .addEventListener("click", (event) => {
    const currentlyDisplayedPropertiesCount = document.querySelector(
      "#properties-container"
    ).childElementCount;
    const totalPropertiesCount = state.properties.length;
    const city = event.target.innerText;

    if (currentlyDisplayedPropertiesCount === totalPropertiesCount) {
      renderPropertyCards(
        state.properties.filter((property) => property.city === city)
      );
    } else {
      renderPropertyCards(state.properties);
    }
  });
