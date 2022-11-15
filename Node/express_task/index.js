const express = require("express"); // importuojame express

// inicializuojame express kaip programėlę pavadinimu 'app' (app bus express instancija):
const app = express();

app.get("/", (req, res) => {
  res.send("OK").end();
});
// App (t.y. express instancija) klausosi GET signalo į "/" URL. Jei užtiks, paleis antrą parametrą - arrow funkciją.
// Arrow funkcija turi du parametrus - request ir response. Request tai ką vartotojas paduoda, o response - ką mes grąžiname atgal.
// Response gražiname paprastą tekstą "OK".
// Serveris dar nepradėjo klausytis, nes nežino, kur. Todėl turime parašyti:
app.listen(8080, () => console.log("The server is running on port 8080")); // ši eilutė pasako, kad ne tik reikia perskaityti kodą ir jį palikti, bet nuolat klausytis - būti įjungtam. The way to fire up my API on a server.

// Matysime "OK" http://localhost:8080/ arba per Postman
