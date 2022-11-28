const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8_000;
const users = [{ firstName: "Agne", lastName: "Gau" }];

app.use(express.json());
app.use(cors());

app.get("/users", (_, res) => {
  res.status(200).send(users).end();
});

app.post("/user", (req, res) => {
  const { firstName, lastName } = req.body;

  users.push({ firstName, lastName });

  res.send(users).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
