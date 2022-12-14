const mysql = require("mysql2/promise");
const express = require("express");
const app = express();

require("dotenv").config();

const PORT = +process.env.PORT || 8_080;
const MYSQL_CONFIG =
  "mysql://doadmin:AVNS_cZydmvBKrLa2PRhtT23@code-academy-first-db-cluster-do-user-13098192-0.b.db.ondigitalocean.com:25060/defaultdb?ssl-mode=REQUIRED";
// username is doadmin, password starts with AVNS

/*
const MYSQL_CONFIG = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DATABASE,
};
*/

app.use(express.json());

app.get("/", async (req, res) => {
  const con = await mysql.createConnection(MYSQL_CONFIG);

  const result = await con.execute(`SELECT * FROM users`);

  await con.end();

  res.send(result).end();
});

app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));
