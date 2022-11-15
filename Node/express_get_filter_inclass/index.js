const express = require("express");

const app = express();
const PORT = 8_080;

app.use(express.json());

let users = [{ name: "Agne", colour: "green", id: 1 }];

app.get("/", (_, res) => {
  res.send(users).end();
});

app.post("/create-user", (req, res) => {
  const { name, colour, id } = req.body;

  const isNumber = (value) => {
    return typeof value === "number" && !Number.isNaN(value);
  };

  if (typeof name !== "string" || typeof colour !== "string" || !isNumber(id)) {
    res.status(400).send({ message: "Invalid user data" }).end();
    return;
  }

  const user = { name, colour, id };

  users.push(user);
  res.send(users).end();
});

app.get("/user/:id", (req, res) => {
  const id = +req.params.id; // { id } = req.params doesn't work in this case, cos id by default is a string, but we need a number

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).send("User does not exist").end();
  }

  res.send(user).end();
});

app.delete("/user/:id", (req, res) => {
  const id = +req.params.id;

  const userToBeDeleted = users.find((user) => user.id === id);

  if (userToBeDeleted) {
    users = users.filter((user) => user.id !== id);

    return res.send(userToBeDeleted).end();
  }

  res.status(404).send({ message: "User does not exist" }).end();
});

// Filter by criteria with req.query:
app.get("/date", (req, res) => {
  const { locale } = req.query ?? "lt-LT"; // same as locale = req.query.locale
  const formattedDate = new Date().toLocaleDateString(locale);

  res.send(formattedDate);
});

app.listen(PORT, () => console.log(`Server is working on port ${PORT}`));

// PATCH demo versija su netobulumais:
// https://github.com/andriuszaz/codeacademy-praktika/blob/main/NodeJs/999-inclass-practice/11_15-GET-POST-DELETE-PATCH-dynamic-routing-filter-by-criteria/index.js#L98
