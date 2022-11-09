const express = require("express");

require("dotenv").config(); // konfigūruoja, kad galėtume naudoti .env failą (npm i dotenv prieš tai į terminalą)

const app = express();
const PORT = +process.env.PORT || 4_000; // padarom fallback'ą, in case .env nieko nenurodyta ar nurodyta neteisingai
// pridėjome pliusą, nes .env gali būti tik arba stringas, arba undefined

console.log(PORT); // undefined before we configure dotenv library

app.use(express.json());

app.post("/", (_, res) => {
  res.send({ message: "Welcome to my project" });
});

app.listen(PORT, () => {
  console.log("Server is running");
});
