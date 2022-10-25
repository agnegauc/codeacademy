const populateTable = (robots) => {
  const tbody = document.querySelector("tbody");
  tbody.textContent = ""; // need to have this so that tbody would empty out every single time before it's populated

  robots.forEach((oneRobot) => {
    const id = document.createElement("td");
    const img = document.createElement("img");
    const firstname = document.createElement("td");
    const secondname = document.createElement("td");
    const city = document.createElement("td");
    const fav_color = document.createElement("td");
    const tr = document.createElement("tr");
    const [name, surname] = oneRobot.name.split(" ");

    id.textContent = oneRobot.id;
    img.src = oneRobot.image;
    firstname.textContent = name;
    secondname.textContent = surname;
    city.textContent = oneRobot.city;
    fav_color.textContent = oneRobot.fav_color;

    tr.append(id, img, firstname, secondname, city, fav_color);
    tbody.append(tr);
  });
};

export { populateTable };
