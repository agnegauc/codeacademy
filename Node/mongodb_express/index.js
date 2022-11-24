const express = require("express");
const { MongoClient, ObjectId } = require("mongodb"); // galime requirint, nes įsirašėme lokaliai
require("dotenv").config();

const app = express();
const PORT = 8_000;
const URI = process.env.URI;
const DB = process.env.DB; // jei iš dotenv, tai kintamasis didžiosiomis raidėmis
const COLLECTION = process.env.COLLECTION;
const client = new MongoClient(URI);

app.use(express.json());

app.get("/users", async (_, res) => {
  try {
    const connection = await client.connect(); // typically con
    const data = await connection
      .db(DB) // if DB ne kintamajame: .db("node-mongo-trial")
      .collection(COLLECTION) // .collection("users")
      .find()
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/user", async (_, res) => {
  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(COLLECTION)
      .insertOne({ firstName: "Petras", lastName: "Slekys" }); // Postinam ne tai, ką įrašytume į body Postman'e, o tai, kas šioje eilutėje
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

// Postinti tai, ką įrašysime body Postman'e:

app.post("/bodyUser", async (req, res) => {
  const { firstName, lastName } = req.body; // reikalinga ši eilutė; req parametruose negali būti _
  if (!firstName || !lastName) {
    res.status(400).send("firstName and lastName are not defined!").end();
    return; // nes nenorime, kad eitų toliau
  }
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    res.status(400).send("firstName and lastName are not a string!").end();
    return;
  }
  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(COLLECTION)
      .insertOne({ firstName, lastName }); // ištrinti definitions, nes papostins tai, kas parašyta čia, o ne bodyje
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

// With dynamic route:

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(COLLECTION)
      .findOne({ _id: ObjectId(id) }); // .find --> .findOne, .toArray nebereikia; importuojam ObjectId in line 2. ObjectId yra kaip kontstruktorius, tik nereikia žodelio new
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

// With req.query (kas po klaustuku), e.g. /filtered-users?firstName=Petras&lastName=Slekys (tokiu atveju reikia paduoti abu; galima ir tik iki &)

app.get("/filtered-users", async (req, res) => {
  const { firstName, lastName } = req.query;

  try {
    const connection = await client.connect(); // typically con
    const data = await connection
      .db(DB) // if DB ne kintamajame: .db("node-mongo-trial")
      .collection(COLLECTION) // .collection("users")
      .find({ firstName, lastName })
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

// Kuriame naują "lentelę" mongodb:

app.post("/collections", async (req, res) => {
  const { tableName } = req.body;

  if (!tableName) {
    return res.status(400).send({ message: "No table name provided" }).end(); // galima returnint ir kitoj eilutėj
  }

  try {
    const con = await client.connect();
    const db = con.db(DB);

    await db.createCollection(tableName); // ištrinti: .dropCollection(tableName)

    await con.close();
    res.status(201).end();
  } catch (error) {
    res.send({ message: error }).end();
  }
});

// Find one and update (with something specified in code):

app.patch("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const con = await client.connect();
    const db = con.db(DB);

    const user = await db
      .collection("users")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { lastName: "UpdatedLastName" } }
      );

    await con.close();
  } catch (error) {
    return res.send(error).end();
  }

  res.send(user).end();
});

// Find one and update (with what we specify in the body via Postman):

app.patch("/updateUser/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  try {
    const con = await client.connect();
    const db = con.db(DB);

    const user = await db
      .collection("users")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { firstName, lastName } }
      );

    await con.close();

    res.send(user).end();
  } catch (error) {
    return res.send(error).end();
  }
});

app.listen(PORT, () => {
  console.log("Server is running");
});
