const displayUsers = (users) => {
  const ul = document.body.querySelector("#namesList");
  ul.textContent = "";

  users.forEach((user) => {
    const li = document.createElement("li");

    li.textContent = `${user.firstName} ${user.lastName}`;

    ul.append(li);
  });
};

const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:8000/users");
    const users = await response.json();

    displayUsers(users);
  } catch (error) {
    console.error(error);
  }
};

await getUsers();

const addUser = async () => {
  const addFormData = new FormData(document.querySelector("form")); // FormData object will be populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values.
  const firstNameInputValue = document
    .querySelector("#firstNameInput")
    .value.trim();
  const lastNameInputValue = document
    .querySelector("#lastNameInput")
    .value.trim();
  console.log(firstNameInputValue, lastNameInputValue);
  try {
    const response = await fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(addFormData)), // Sukuriame object su atsakymais ir paverčiam į stringą. The Object.fromEntries() method transforms a list of key-value pairs into an object.
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

document.querySelector("button").addEventListener("click", addUser);
