const express = require("express"); // importuojame viską
const mysql = require("mysql2/promise");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

const { MYSQL_CONFIG } = require("../../config");

const router = express.Router();

const userSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

router.post("/register", async (req, res) => {
  let userData = req.body;
  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: "Incorect data sent" });
  }

  // Jei duomenys teisingi, kreipiamės į duomenų bazę:
  try {
    const hashedPassword = bcrypt.hashSync(userData.password);

    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await con.execute(
      `INSERT INTO authusers (email, password) VALUES (${mysql.escape(
        userData.email
      )}, '${hashedPassword}')`
    );
    await con.end();

    return res.send(data);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ error: "Unexpected error. Please try again" });
  }
});

router.post("/login", async (req, res) => {
  let userData = req.body;
  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: "Incorect email or password" });
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await con.execute(
      `SELECT * FROM authusers WHERE email=${mysql.escape(userData.email)}`
    );
    await con.end();

    // Jei nėra nė vieno vartotojo:
    if (data.length === 0) {
      return res
        .status(400)
        .send({ error: "User with this email address does not exist." });
    }

    const isAuthed = bcrypt.compareSync(userData.password, data[0].password);

    if (isAuthed) {
      return res.send("OK");
    }

    return res.status(400).send({ error: "Incorect email or password" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ error: "Unexpected error. Please try again" });
  }
});

module.exports = router;
