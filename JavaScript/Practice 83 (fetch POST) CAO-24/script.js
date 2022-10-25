const state = {};

const fetchProperties = async () => {
  try {
    const response = await fetch("https://radial-reinvented-shoe.glitch.me");
    state.properties = await response.json();
    renderPropertyCards(state.properties);
    renderFilterButtons([
      ...new Set(state.properties.map((entry) => entry.city)),
    ]);
  } catch (error) {
    console.error(error);
  }
};

fetchProperties();

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
