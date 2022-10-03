// Ex. 1

const car = {
  doors: 4,
  color: "red",
  brand: "BMW",
};

console.log(car);

// Ex. 2

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const person = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
  };
  console.log(person);
});

// Ex. 3

const myName = document.createElement("h1");

myName.textContent = "Agne";
document.body.append(myName);
myName.style.color = "red";

// Ex. 4

const list = document.createElement("ul");
const listItem = document.createElement("li");

listItem.textContent = "BMW";
document.body.append(list);
document.querySelector("ul").append(listItem);
