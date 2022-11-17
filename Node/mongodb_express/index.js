const express = require("express");
const { MongoClient } = require("mongodb"); // galime requirint, nes įsirašėme lokaliai
require("dotenv").config();

const app = express();
const PORT = 6_000;
const URI = process.env.URI;
const client = new MongoClient(URI);

app.use(express());

app.get("/", async (_, res) => {
  const connection = await client.connect(); // typically con
  const data = await connection
    .db("node-mongo-trial")
    .collection("users")
    .find()
    .toArray();
  await connection.close();
  return res.send(data);
});

app.listen(PORT, () => {
  console.log("Server is running");
});
