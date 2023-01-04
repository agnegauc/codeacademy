const addCar = async (event) => {
  event.preventDefault();

  const addFormData = new FormData(document.querySelector("form"));

  try {
    const response = await fetch("http://localhost:8000/car/tralala", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(addFormData)),
    });

    if (response.ok) {
      document.body.querySelector("#form").reset();

      alert("New car added successfully!");
    }

    if (response.status >= 400) {
      const msg = await response.json();

      alert(msg.error);
    }
  } catch (error) {
    if (error.message === "Failed to fetch") {
      alert("No connection with the server");
    } else alert(error.message);
  }
};

document.querySelector("button").addEventListener("click", await addCar);
