import { displayPost } from "./displayPost.js";

// Kai paspaudžiam mygtuką - vieną ištrina.

const deleteButton = document.querySelector("#deleteButton");

await displayPost();

deleteButton.addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
  //   const data = await response.json();
  const isPostDeleted = response.ok; // boolean

  //   console.log(data);
  console.log(isPostDeleted);
});
