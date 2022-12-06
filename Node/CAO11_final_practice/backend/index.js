const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 8_080;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const SERVICESCOLLECTION = process.env.SERVICESCOLLECTION;
const USERSCOLLECTION = process.env.USERSCOLLECTION;

app.use(express.json());
app.use(cors());

app.get("/memberships", async (_, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(SERVICESCOLLECTION)
      .find()
      .toArray();

    await con.close();

    return res.send(data).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.post("/memberships", async (req, res) => {
  const { name, description } = req.body;
  const price = +req.body.price; // added this cos I send a string from frontend with fetch
  const isNumber = (value) => {
    return typeof value === "number" && !Number.isNaN(value);
  };

  if (!name || !price || !description) {
    res
      .status(400)
      .send("Service name, price and / description are not defined.")
      .end();
    return;
  }
  if (
    typeof name !== "string" ||
    typeof description !== "string" ||
    !isNumber(price)
  ) {
    res
      .status(400)
      .send({ message: "Invalid name, price and / or description." })
      .end();
    return;
  }
  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(SERVICESCOLLECTION)
      .insertOne({ name, price, description });

    await con.close();

    return res.send(data).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.delete("/memberships/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ message: "No id provided." }).end();
  }

  try {
    const con = await client.connect();
    const data = con.db(DB);

    const service = await data
      .collection(SERVICESCOLLECTION)
      .deleteOne({ _id: ObjectId(id) });

    await con.close();

    if (service.deletedCount) {
      return res.status(200).send(service).end();
    }
    res
      .status(404)
      .send({ message: "A membership with the provided id does not exist." })
      .end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));
