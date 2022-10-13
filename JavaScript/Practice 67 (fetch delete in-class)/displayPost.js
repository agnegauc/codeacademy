// Random postą į HTML:

const displayPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const randomNumber = Math.round(Math.random() * 100); // susigeneruojam random number
  const post = posts[randomNumber]; // iš array pasirenkame tik tą elementą

  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = JSON.stringify(post);

  document.body.append(paragraphElement);
};

export { displayPost };
