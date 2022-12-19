const mysql = require("mysql2/promise");
const express = require("express");
const app = express();

require("dotenv").config();

const PORT = +process.env.serverPort || 8_000;

// const MYSQL_CONFIG =
//   "mysql://doadmin:AVNS_cZydmvBKrLa2PRhtT23@code-academy-first-db-cluster-do-user-13098192-0.b.db.ondigitalocean.com:25060/defaultdb?ssl-mode=REQUIRED";

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
};

app.use(express.json());

app.get("/", async (_, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(`SELECT * FROM users`);

    await con.end();

    res.send(result[0]).end(); // [0] added because result is an array of two. First is the answer, second - buffer
  } catch (err) {
    res.send(err).end();
    return console.error(); // better to use instead of throw error
  }
});

// Filter users by firstName:

app.post("/users", async (req, res) => {
  const { firstName } = req.body;

  if (typeof firstName !== "string" || !firstName) {
    return res
      .status(400)
      .send(`Incorrect firstName provided: ${firstName}`)
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(
      `SELECT * FROM users WHERE firstName='${firstName}'`
      // `SELECT * FROM users WHERE firstName='${mysql.escape(firstName)}'`
    );

    console.log(`SELECT * FROM users WHERE firstName='${firstName}'`);

    await con.end();

    res.send(result[0]).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

// Select one user by id:

app.get("/user/:id", async (req, res) => {
  const id = +req.params.id.trim();

  if (id <= 0 || Number.isNaN(id) || typeof id !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a proper id in the URL: current id ${id} incorrect.`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(`SELECT * FROM users WHERE id=${id}`);

    await con.end();

    res.send(result[0]).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.post("/table", async (req, res) => {
  const name = req.body?.name.trim();

  if (!name) {
    return res.status(400).send(`Incorrect table name provided: ${name}`).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(
      `CREATE table ${name}(id int NOT NULL AUTO_INCREMENT, firstName varchar(35), PRIMARY KEY (id))`
    );

    await con.end();

    res.status(201).send("Table successfully created").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.delete("/table", async (req, res) => {
  const name = req.body?.name?.trim();

  if (!name) {
    return res.status(400).send(`Incorrect table name provided: ${name}`).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(`DROP table ${name}`);

    await con.end();

    res.status(202).send("Table successfully deleted").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.post("/user", async (req, res) => {
  const firstName = req.body?.firstName?.trim();

  if (!firstName) {
    // pridėti ilgio patikrą
    return res
      .status(400)
      .send(`Incorrect firstName provided: ${firstName}.`)
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(`INSERT INTO users (firstName) VALUES ('${firstName}')`);

    await con.end();

    res.status(201).send("User successfully created").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));
