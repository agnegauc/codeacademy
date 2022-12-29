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

// new table "items" created via MySQL workbench: CREATE table items (id int NOT NULL AUTO_INCREMENT, title varchar(35), PRIMARY KEY (id))

app.get("/items", async (req, res) => {
  const limitInput = req.query?.limit?.trim() || 0;
  const cleanLimit = +mysql.escape(limitInput).replaceAll("'", "");

  const query = limitInput
    ? `SELECT * FROM items LIMIT ${cleanLimit}`
    : `SELECT * FROM items`;

  if (
    Number.isNaN(cleanLimit) ||
    typeof cleanLimit !== "number" ||
    cleanLimit < 0
  ) {
    return res
      .status(400)
      .send({
        error: `Limit set incorrectly. Please try again`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(query);

    await con.end();

    res.send(result[0]).end();
  } catch (err) {
    res.send(err).end();
    return console.error(err);
  }
});

app.post("/items", async (req, res) => {
  const title = mysql.escape(req.body?.title.trim());
  const cleanTitle = title.replaceAll("'", "");
  const query = `INSERT INTO items (title) VALUES('${cleanTitle}')`;

  if (!title) {
    res.status(400).send("Title is not defined.");
  }

  if (typeof title !== "string") {
    res.status(400).send({ message: "Title is not a string." }).end();
    return;
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(query);

    await con.end();

    res.send("Data inserted into the table").end();
  } catch (err) {
    res.send(err).end();
    return console.err();
  }
});

app.delete("/items/:id", async (req, res) => {
  const id = mysql.escape(req.params.id?.trim());
  const cleanId = +id.replaceAll("'", "");

  if (cleanId < 0 || Number.isNaN(cleanId) || typeof cleanId !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a valid id.`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const query = `DELETE FROM items WHERE id = ${cleanId}`;

    await con.execute(query);

    await con.end();

    res.status(200).send("Deletion complete.").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.listen(SERVER_PORT, () =>
  console.info(`Server is running on port ${SERVER_PORT}`)
);
