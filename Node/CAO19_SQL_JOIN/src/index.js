const mysql = require("mysql2/promise");
const express = require("express");
const app = express();

require("./config");

const SERVER_PORT = +process.env.SERVER_PORT || 8_080;

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
};

app.use(express.json());

/* Pagal paduodamą ID grąžins specifinį užsakymą su 
    užsakymo id, kliento vardu, el paštu bei 
    produkto pavadinimu, nuotrauka ir kaina. */

app.get("/orders/:id?", async (req, res) => {
  const id = req.params?.id;
  const idToNumber = +req.params.id;
  const query = idToNumber
    ? `SELECT orders.id, customer_name, customer_email, products.title, products.image, products.price FROM orders JOIN products ON (product_id=products.id) WHERE orders.id= ${idToNumber}`
    : `SELECT * FROM orders`;

  if (
    (typeof id !== "undefined" &&
      (typeof idToNumber !== "number" || Number.isNaN(idToNumber))) ||
    idToNumber <= 0
  ) {
    return res
      .status(400)
      .send({
        error: `Incorrect id provided. Please try again.`,
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

/* Additional task - ways to add IP address:
const userIp = req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress; */

/* Additional task - add timestamp (pagal serverio laiką, ne vartotojo - t.y. ne front-end'inį, jis gali būti pakeistas):
ALTER TABLE orders ADD time_stamp DATETIME NOT NULL DEFAULT (current_timestamp()); */

app.listen(SERVER_PORT, () =>
  console.info(`Server is running on port ${SERVER_PORT}`)
);
