const deleteCar = async (event) => {
  let carId = event.target.id;

  try {
    const response = await fetch(`http://localhost:8000/cars/${carId}`, {
      method: "DELETE",
    });

    const isCarDeleted = response.ok;

    if (isCarDeleted) {
      alert("Car successfully removed from the list.");
      location.reload();
    }
  } catch (err) {
    console.log(err);
  }
};

export { deleteCar };
