function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.appearInTable = function () {
    const firstNameColumn = document.createElement("td");
    const lastNameColumn = document.createElement("td");
    const tableRow = document.createElement("tr");

    firstNameColumn.textContent = firstName;
    lastNameColumn.textContent = lastName;

    tableRow.append(firstNameColumn, lastNameColumn);
    document.body.querySelector("tbody").append(tableRow);
  };
}

const capitalise = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.querySelector("#fullname").value.trim();
  const firstName = capitalise(fullName.split(" ")[0].trim());
  const lastName = capitalise(
    fullName.split(" ")[fullName.split(" ").length - 1].trim()
  );

  const person = new Person(firstName, lastName);
  person.appearInTable();
});
