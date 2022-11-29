const { MongoClient, ObjectId } = require("mongodb"); // ObjectId required jei naudoju objektų IDs (pvz. findOneAndUpdate...)
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

app.get("/", async (_, res) => {
  try {
    const con = await client.connect();
    const data = await con.db(DB).collection(COLLECTION).find().toArray();

    await con.close(); // atskirti tarpais dėl skaitomumo

    return res.send(data).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err); // add throw error after send({err}), remove return from the row above!
  }
});

app.post("/order", async (req, res) => {
  const { productName, quantity, createdDate } = req.body || {};

  if (!productName) {
    return res.status(400).send("Product name not provided").end();
  }

  if (typeof productName !== "string") {
    return res.status(400).send(`${productName} is not a string`).end();
  }

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(COLLECTION)
      .insertOne({
        productName,
        quantity,
        createdDate: new Date(createdDate).toISOString(),
      });

    await connection.close();

    return res.send(data).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

// Post many orders (with auto generated date):

app.post("/orders", async (req, res) => {
  const newOrdersInput = req.body; // Normally this one is enough. Eilutė žemiau - tik dėl to, kad norėjau pridėti datą automatiškai prie kiekvieno
  const newOrders = newOrdersInput.map((order) => ({
    ...order,
    createdDate: new Date().toISOString(),
  }));
  const areOrdersProvided = Array.isArray(newOrders) && newOrders?.length;

  // Tikriname, ar pateiktas duomenų gabaliukas yra užsakymas (ar parametrai yra):
  const isCorrectOrderInput = (newOrder) => {
    const { productName, quantity } = newOrder;
  };

  if (!areOrdersProvided) {
    res.status(404).send("Please provide an array of objects.");
  }

  newOrdersInput.forEach(isCorrectOrderInput); // same as newOrders.forEach((newOrder) => isCorrectOrder(newOrder));

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(COLLECTION)
      .insertMany(newOrders);

    await connection.close();

    return res.send(data).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

// Leidžiame atnaujinti nuo vieno iki n savybių kiekio:

app.patch("/order/:id", async (req, res) => {
  const { productName, quantity } = req.body;
  const { id } = req.params;
  const isProperProductName = productName && typeof productName === "string"; // vietoj if'ų tolimesnių patikriname čia
  const isProperQuantity =
    typeof quantity === "number" && !Number.isNaN(quantity); // vietoj if'ų tolimesnių patikriname čia

  // Jei nepateikia nei kiekio, nei productName:
  if (!productName && !quantity) {
    return res
      .status(400)
      .send({ message: "Product name and quantity were not provided" })
      .end();
  }

  try {
    const connection = await client.connect();
    const data = connection.db(DB);
    const updateValues = {};

    if (isProperProductName) {
      updateValues.productName = productName;
    }

    if (isProperQuantity) {
      updateValues.quantity = quantity;
    }

    const order = await data
      .collection(COLLECTION)
      .findOneAndUpdate({ _id: ObjectId(id) }, { $set: updateValues });

    await connection.close();

    res.send(order).end();
  } catch (error) {
    res.send({ error }).end();
    throw Error(error);
  }
});

// Patch many orders (of a single product):

app.patch("/orders/:productName", async (req, res) => {
  const { productName } = req.params;
  const { isSold } = req.body;

  if (!productName) {
    res.status(400).send("Products not provided.").end();
    return;
  }

  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(COLLECTION)
      .updateMany({ productName }, { $set: { isSold } });

    await con.close();

    res.send(data).end();
  } catch (error) {
    res.send({ error }).end();
    throw Error(error);
  }
});

app.delete("/order/:id", async (req, res) => {
  const { id } = req.params;
  // typeof could be added in the if below
  if (!id) {
    return res.status(400).send({ message: "No id provided" }).end(); // 400 - blogas body
  }

  try {
    const connection = await client.connect();
    const data = connection.db(DB);

    const order = await data
      .collection(COLLECTION)
      .deleteOne({ _id: ObjectId(id) });

    await connection.close();

    // Jei egzistuoja, parašyk, kad ištrynei
    if (order.deletedCount) {
      return res.status(200).send(order).end();
    } // status 404 - not found (užsakymas su šiuo ID neegzistuoja)
    res
      .status(404)
      .send({ message: "An order with the provided id does not exist." })
      .end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

// Delete many (the only thing changed --> deleteOne to deleteMany and now deleting by productName, not id)

app.delete("/orders/:productName", async (req, res) => {
  const { productName } = req.params;

  if (!productName) {
    res.status(400).send("Product not provided.").end();
    return;
  }

  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(COLLECTION)
      .deleteMany({ productName });

    await con.close();

    res.send(data).end();
  } catch (error) {
    res.send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));
