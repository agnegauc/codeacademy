import { createTableSkeleton } from "./modules/createTableSkeleton.js";
import { populateTable } from "./modules/populateTable.js";
import { createCheckbox } from "./modules/createCheckbox.js";
import { createSearchForm } from "./modules/createSearchForm.js";

const state = {}; // turint šį globalų kintamąjį, nesvarbu, kokios funkcijos viduje jis bus redaguotas, vis vien pasiredaguos, todėl taps pasiekiamas outside of function.

createCheckbox();
createSearchForm();
createTableSkeleton();

document.querySelector("#isVipCheckbox").addEventListener("change", (event) => {
  populateTable(
    event.target.checked
      ? state.robots.filter((robot) => robot.vip)
      : state.robots
  );
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const searchInput = document.querySelector("#searchBox").value.toUpperCase(); // originally toLowerCase both
  const filteredList = state.robots.filter((robot) =>
    robot.name.toUpperCase().includes(searchInput)
  ); // full name contains search string; lower/upper case ignored
  populateTable(filteredList);
});

const getRobots = async () => {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me");
    state.robots = await response.json();
    populateTable(state.robots);
  } catch (error) {
    console.error(error);
  }
};

await getRobots();
