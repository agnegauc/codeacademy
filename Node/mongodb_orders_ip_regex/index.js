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

// Using regex (partial match, i.e. can search by Blo instead of Blouse):

app.get("/orders/:product", async (req, res) => {
  const { product } = req.params;

  // add if

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(COLLECTION)
      .find({ productName: { $regex: product } })
      .toArray();

    await connection.close();

    return res.send(data).end();
  } catch (err) {
    res.status(500).send({ err }).end();
  }
});

// Using IP:

app.patch("/order/:id", async (req, res) => {
  const { id } = req.params;
  const { productName } = req.body;

  const userIp =
    req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  if (!productName) {
    res.status(400).send("Product name was not provided.").end();
    return;
  }

  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(COLLECTION)
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { productName, updatedBy: userIp } }
      );

    await con.close();

    res.send(data).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));
