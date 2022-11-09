const express = require("express");

const app = express(); // kviečiam express
const PORT = 3_000;

app.use(express.json()); // gali būti daug app.use() kvietimų skirtingų

// Vietoj req parametruose rašom underscore, nes req parametras yra nenaudojamas, jis tik placeholder
app.post("/", (_, res) => {
  res.send({ message: "Sveiki atvykę į projektą!" }); // atsakymas išsiųs tam tikrą informaciją (šiuo atveju message)
});

app.listen(PORT, () => {
  console.log("Server is running");
}); // express appso listen metodas. Užėjus ant listen yra ?. ir tai reiškia, kad nebūtina nieko įterpti į vidų. Šįkart įterpiau
