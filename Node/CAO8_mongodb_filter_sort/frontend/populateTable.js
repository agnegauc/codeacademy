const displayPets = (pets) => {
  const tbody = document.body.querySelector("#petsList");
  tbody.textContent = "";

  pets.forEach((pet) => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdType = document.createElement("td");
    const tdAge = document.createElement("td");

    tdName.textContent = pet.name;
    tdType.textContent = pet.type;
    tdAge.textContent = pet.age;

    tr.append(tdName, tdType, tdAge);
    tbody.append(tr);
  });
};

const ageHeading = document.querySelector("#ageHeading");
let fetchURL = "http://localhost:8000/pets/byyoungest";
let selectedTypes = [];

const getPets = async () => {
  if (ageHeading.textContent === "Age (Asc)") {
    fetchURL = "http://localhost:8000/pets/byyoungest";
  } else fetchURL = "http://localhost:8000/pets/byoldest";

  try {
    const response = await fetch(fetchURL);
    const pets = await response.json();
    const filteredPets = pets.filter(
      (pet) =>
        pet.type === selectedTypes[0] ||
        pet.type === selectedTypes[1] ||
        pet.type === selectedTypes[2]
    );

    displayPets(filteredPets);
  } catch (error) {
    console.error(error);
  }
};

document.querySelector("#ageHeading").addEventListener("click", async () => {
  if (ageHeading.textContent === "Age (Asc)") {
    ageHeading.textContent = "Age (Dsc)";
  } else ageHeading.textContent = "Age (Asc)";

  await getPets();
});

document.querySelector("nav").addEventListener("click", async (event) => {
  const selectedType = event.target.textContent.toLowerCase();
  const isCurrentlySelected = selectedTypes.includes(selectedType);

  if (isCurrentlySelected) {
    selectedTypes = selectedTypes.filter((type) => type !== selectedType);
    event.target.classList.remove("selectedButton");
  } else {
    selectedTypes.push(selectedType);
    event.target.classList.add("selectedButton");
  }

  await getPets();
});
