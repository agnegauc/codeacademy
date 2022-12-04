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

const getPets = async () => {
  if (ageHeading.textContent === "Age (Asc)") {
    fetchURL = "http://localhost:8000/pets/byyoungest";
  } else fetchURL = "http://localhost:8000/pets/byoldest";

  try {
    const response = await fetch(fetchURL);
    const pets = await response.json();

    displayPets(pets);
  } catch (error) {
    console.error(error);
  }
};

await getPets();

document.querySelector("#ageHeading").addEventListener("click", async () => {
  if (ageHeading.textContent === "Age (Asc)") {
    ageHeading.textContent = "Age (Dsc)";
  } else ageHeading.textContent = "Age (Asc)";

  await getPets();
});
