// Kompleksiniai selektoriai - 1 pratimas

document.querySelector("p.bluetext span").textContent = "blue";

// Kompleksiniai selektoriai - 2 pratimas

const firstItem = document.querySelector("li:first-child").textContent;

const secondItem = document.querySelector("li:nth-child(2)").textContent;

document.querySelector("li:first-child").textContent = secondItem;

document.querySelector("li:nth-child(2)").textContent = firstItem;

