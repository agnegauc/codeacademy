const express = require("express");

require("dotenv").config(); // nereikia dėti į kintamąjį, nes nereikės mums naudoti šios eilutės reikšmės

const app = express();
const PORT = +process.env.PORT || 6_000;

// Padarome, kad su objektais draugautų šis projektas:
app.use(express.json());
// JSON - javascript object notation; iš esmės objektas, tik aišku sudėtingiau

app.post("/create-user", (req, res) => {
  console.log(req.body); // rodys per postman įrašytą body console log'e
  const { age, firstName, userId } = req.body; // tą patį reiškia, kas: const age = req.body.age ,†ik geriau. Taip pat galime kelis į vieną susikelti

  if (typeof age !== "number" || Number.isNaN(age)) {
    // Number.isNaN(age) - tikrina, ar age is not a number. Priešingas būtų: !Number.isNaN(age)
    res.status(400).end(); // 400 yra error code tiesiog, widely known
    return; // pridedam, kad nebebūtų vykdomas kodas toliau, nes res.end() tik užbaigia, bet toliau judėtų
  }

  if (typeof firstName !== "string" || typeof userId !== "string") {
    res.status(400).end();
    return;
  }
  res.end(); // operacija baigta tik kai yra result
});

// Pasijungiam, kad serveris mūsų klausytųsi:

app.listen(PORT, () => console.log("Server is running"));
