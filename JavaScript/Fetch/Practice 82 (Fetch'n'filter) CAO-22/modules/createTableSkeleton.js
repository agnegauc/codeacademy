const createTableSkeleton = () => {
  const id = document.createElement("th");
  const img = document.createElement("th");
  const firstname = document.createElement("th");
  const secondname = document.createElement("th");
  const city = document.createElement("th");
  const fav_color = document.createElement("th");
  const tr = document.createElement("tr");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const table = document.createElement("table");

  id.textContent = "id";
  img.textContent = "Image";
  firstname.textContent = "First name";
  secondname.textContent = "Second name";
  city.textContent = "City";
  fav_color.textContent = "Favourite colour";

  tr.append(id, img, firstname, secondname, city, fav_color);
  thead.append(tr);
  table.append(thead, tbody);
  document.body.append(table);
};

export { createTableSkeleton };
