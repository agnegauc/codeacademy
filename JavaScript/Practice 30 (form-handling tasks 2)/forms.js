document.querySelector("form").addEventListener("submit", evaluationOfResults);

function evaluationOfResults(event) {
  event.preventDefault();

  if (document.querySelector("input#age").value > 18) {
    console.log(`Vairuoti gali: ${document.querySelector("input#name").value}`);
  } else
    console.log(
      `Dar mokysis vairuoti: ${document.querySelector("input#name").value}`
    );
}
