const mysql = require("mysql2/promise");
const express = require("express");
const app = express();

require("./config"); // instead of require("dotenv").config();

const SERVER_PORT = +process.env.SERVER_PORT || 8_080;

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
};

app.use(express.json());

app.post("/table", async (req, res) => {
  const name = req.body?.name.trim();

  if (!name) {
    return res.status(400).send(`Incorrect table name provided: ${name}`).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(
      `CREATE table ${name}(id int NOT NULL AUTO_INCREMENT, brand varchar(35), model varchar(35), size varchar(35), price decimal(35,2), PRIMARY KEY (id))`
    );

    await con.end();

    res.status(201).send("Table successfully created").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.get("/", async (_, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(`SELECT * FROM users`);

    await con.end();

    res.send(result[0]).end();
  } catch (err) {
    res.send(err).end();
    return console.error(err);
  }
});

app.post("/shirt", async (req, res) => {
  const brand = req.body?.brand?.trim();
  const model = req.body?.model?.trim();
  const size = req.body?.size?.trim();
  const price = req.body?.price;

  // Pridėti if'us

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(
      `INSERT INTO shirts (brand, model, size, price) VALUES ('${brand}','${model}','${size}',${price})`
    );

    await con.end();

    res.status(201).send("Item successfully created").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.get("/shirts", async (_, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(
      `SELECT * FROM shirts ORDER BY price ASC LIMIT 5`
    );

    await con.end();

    res.send(result[0]).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

// If the route is different than the previously defined ones:

app.get("*", async (_, res) => {
  res.status(404).send("Invalid URL").end();
});

app.listen(SERVER_PORT, () =>
  console.info(`Server is running on port ${SERVER_PORT}`)
);
