document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("p").textContent =
    document.querySelector("input").value * 1.8 + 32;
});
