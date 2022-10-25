const createSearchForm = () => {
  const searchBox = document.createElement("input");
  const searchButton = document.createElement("button");
  const form = document.createElement("form");

  searchBox.setAttribute("id", "searchBox");
  searchBox.setAttribute("type", "search"); // input type search; not sure what it gives, was in the requirements
  searchButton.setAttribute("type", "submit");
  searchButton.textContent = "Search";

  form.append(searchBox, searchButton);
  document.body.append(form);
};

export { createSearchForm };
