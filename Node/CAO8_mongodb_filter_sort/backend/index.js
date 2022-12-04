const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 8_080;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const COLLECTION = process.env.COLLECTION;

app.use(express.json());
app.use(cors());

app.get("/pets", async (_, res) => {
  try {
    const con = await client.connect();
    const data = await con.db(DB).collection(COLLECTION).find().toArray();

    await con.close();

    return res.send(data).end(); // ar čia reikia return?
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.post("/pets", async (req, res) => {
  const { name, type } = req.body;
  const age = +req.body.age; // added this cos I send a string from frontend with fetch
  const isNumber = (value) => {
    return typeof value === "number" && !Number.isNaN(value);
  };

  if (!name || !type || !age) {
    res
      .status(400)
      .send("The pet's name, type and / or age are not defined!")
      .end();
    return;
  }
  if (typeof name !== "string" || typeof type !== "string" || !isNumber(age)) {
    res.status(400).send({ message: "Invalid name, type and / or age" }).end();
    return;
  }
  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(COLLECTION)
      .insertOne({ name, type, age });

    await con.close();

    return res.send(data).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

// The below one has to be above /pets/:type due to route

app.get("/pets/byoldest", async (_, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(COLLECTION)
      .find()
      .sort({
        age: -1,
      })
      .toArray();

    await con.close();

    return res.send(data).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.get("/pets/byyoungest", async (_, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(COLLECTION)
      .find()
      .sort({
        age: 1,
      })
      .toArray();

    await con.close();

    return res.send(data).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.get("/pets/:type", async (req, res) => {
  const { type } = req.params;

  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(COLLECTION)
      .find({ type })
      .toArray();

    await con.close();

    return res.send(data).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));
