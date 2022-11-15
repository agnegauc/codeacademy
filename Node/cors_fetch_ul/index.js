const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;
const cars = ["Porsche", "BMW", "VW"];

app.use(cors());

app.get("/cars", (req, res) => {
  res.status(200).send(cars);
});

app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});
