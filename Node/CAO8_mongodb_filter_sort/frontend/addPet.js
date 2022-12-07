const addPet = async (event) => {
  event.preventDefault();

  const addFormData = new FormData(document.querySelector("form")); // FormData object will be populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values.

  try {
    const response = await fetch("http://localhost:8000/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(addFormData)), // Sukuriame object su atsakymais ir paverčiam į stringą. The Object.fromEntries() method transforms a list of key-value pairs into an object.
    });
  } catch (error) {
    console.error(error);
  }
};

document.querySelector("button").addEventListener("click", addPet);
