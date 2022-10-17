// Practice 1

const myName = "Agne";

const header = document.createElement("h2");

header.textContent = myName;

document.body.append(header);

// Practice 2

document.getElementById("name").innerHTML = myName;

// Practice 3

document.querySelector("li:nth-child(3)").textContent = "Sūris";