// My version:

// const year = document.querySelector("input");

// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (year.value % 100 === 0 && year % 400 === 0) {
//     document.querySelector("p").textContent = "Leap year";
//   } else if (year.value % 4 === 0) {
//     document.querySelector("p").textContent = "Leap year";
//   } else document.querySelector("p").textContent = "Not leap";
// });

// codeAcademy version:

function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0; // Sąlyga to be leap year
}

document.querySelector("form").addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const year = document.querySelector("input").value;
  if (isLeapYear(year)) {
    document.querySelector("p").textContent = "Leap year";
  } else document.querySelector("p").textContent = "Not leap";
}
