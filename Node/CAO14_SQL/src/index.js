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
  const name = mysql.escape(req.body?.name.trim());
  const cleanName = name.replaceAll("'", "");

  if (!name) {
    return res.status(400).send(`Incorrect table name provided: ${name}`).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(
      `CREATE table ${cleanName}(id int NOT NULL AUTO_INCREMENT, brand varchar(35), model varchar(35), size varchar(35), price decimal(35,2), PRIMARY KEY (id))`
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

// Question mark in req params makes the parameter optional:

app.get("/shirts/:size?", async (req, res) => {
  const size = req.params.size;
  const limit = +req.query.limit; // /shirts/M?limit=20
  const sizes = ["XS", "S", "M", "L", "XL"];

  const query =
    size && limit
      ? `SELECT * FROM shirts WHERE size = '${size}' ORDER BY price ASC LIMIT ${limit}`
      : `SELECT * FROM shirts ORDER BY price DESC LIMIT 5`;

  if (size && !sizes.includes(size)) {
    return res.status(400).send("Legit sizes: XS, S, M, L, XL").end();
  }

  if (
    limit &&
    (limit < 0 ||
      limit >= 10 ||
      Number.isNaN(limit) ||
      typeof limit !== "number")
  ) {
    return res
      .status(400)
      .send({ error: `Limit incorrect. Please choose a number from 1 to 10.` })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(query);

    await con.end();

    res.send(result[0]).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.delete("/table", async (req, res) => {
  const name = mysql.escape(req.body?.name.trim());
  const cleanName = name.replaceAll("'", "");

  if (!name) {
    return res.status(400).send(`Incorrect table name provided: ${name}`).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(`DROP TABLE ${cleanName}`);

    await con.end();

    res.status(201).send("Table successfully dropped").end();
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
