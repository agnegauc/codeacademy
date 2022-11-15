const express = require("express");
require("dotenv").config(); // nereikia dėti į kintamąjį, nes nereikės mums naudoti šios eilutės reikšmės

const PORT = +process.env.PORT || 6_000;
const app = express();
const users = []; // pushinsim here

// Padarome, kad su objektais draugautų šis projektas:
app.use(express.json());
// JSON - javascript object notation; iš esmės objektas, tik aišku sudėtingiau

app.post("/create-user", (req, res) => {
  const { age, firstName, userId } = req.body; // tą patį reiškia, kas: const age = req.body.age ,†ik geriau. Taip pat galime kelis į vieną susikelti
  if (typeof age !== "number" || Number.isNaN(age)) {
    // Number.isNaN(age) - tikrina, ar age is not a number. Priešingas būtų: !Number.isNaN(age)
    res.status(400).send({ message: "Invalid user data" }).end(); // 400 yra error code tiesiog, widely known
    return; // pridedam, kad nebebūtų vykdomas kodas toliau, nes res.end() tik užbaigia, bet toliau judėtų
  }

  if (typeof firstName !== "string" || typeof userId !== "string") {
    res.status(400).send({ message: "Invalid user data" }).end();
    return;
  }

  const user = { age, firstName, userId };

  users.push(user);

  res.send(users).end(); // Gali būti ir res.end(), bet nematysime tada, ką papostinom after posting
});

app.get("/users", (req, res) => {
  res.send(users).end(); // Geroji praktika - pridėti .end()
});

app.get("/user/:userId", (req, res) => {
  const { userId } = req.params; // userId in POST is string, cos here it's a string
  const user = users.find((curUser) => curUser.userId === userId);

  res.send(user).end();
});

// Pasijungiam, kad serveris mūsų klausytųsi:
app.listen(PORT, () => console.log("Server is running"));
