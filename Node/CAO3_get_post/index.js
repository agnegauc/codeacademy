const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8_000;
let cars = ["Porsche", "BMW", "VW"]; // should be "let" if you want it to update

app.use(cors());

app.use(express.json()); // necessary if you want to post

app.get("/", (_, res) => {
  res.status(200).send(cars).end();
});

app.post("/car", (req, res) => {
  const car = req.body.car;

  cars.push(car);

  res.status(200).send(cars).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
