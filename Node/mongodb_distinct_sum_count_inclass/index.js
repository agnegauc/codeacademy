/* To do: 
1. `users` kolekcijoje nustatyti unikalių vardų sąrašą (bent dešimt įrašų lentelėje). 
2. Nustatyti, kiek įrašų turi vardą X (kur X - pateiktas per užklausą. Apmąstykite, body ar params).
3. Nustatyti bendrą vartotojo vardu X užsakymų kiekį */

const { MongoClient } = require("mongodb");
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

app.get("/uniqueNames", async (_, res) => {
  try {
    const con = await client.connect();
    const db = con.db(DB);
    const collection = db.collection(COLLECTION);
    const uniqueNames = await collection.distinct("firstName");

    await con.close();

    res.send({ uniqueNames }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});
app.get("/countNames/:firstName", async (req, res) => {
  const { firstName } = req.params;
  try {
    const con = await client.connect();
    const db = con.db(DB);
    const collection = db.collection(COLLECTION);
    const nameCount = await collection.count({ firstName });

    await con.close();

    res.send({ nameCount }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.get("/sumOfOrders/:name", async (req, res) => {
  const { name } = req.params;

  const pipeline = [
    {
      $match: {
        firstName: name,
      },
    },
    {
      $group: {
        _id: "$firstName",
        totalOrders: { $sum: "$numberOfOrders" },
      },
    },
  ];

  try {
    const totalOrders = []; // ne let, o const (galima su masyvais ir objektais)
    const con = await client.connect();
    const db = con.db(DB);
    const collection = db.collection(COLLECTION);
    const aggregationCursor = collection.aggregate(pipeline);

    for await (const order of aggregationCursor) {
      totalOrders.push(order.totalOrders);
    }

    await con.close();

    res.send([...totalOrders]).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.get("/users", async (_, res) => {
  const pipeline = [
    {
      $match: {
        /* isAvailable: false*/
      },
    },
    {
      $group: {
        _id: "$firstName",
        totalOrders: { $sum: "$numberOfOrders" },
      },
    },
    {
      $sort: {
        totalOrders: -1,
      },
    },
  ];

  try {
    const docs = [];
    const con = await client.connect();
    const db = con.db(DB);
    const collection = db.collection(COLLECTION);

    // const prices = await collection.distinct(
    //   "price"
    //   //{ price: 14,}
    // );

    // pasikartojantys atvejai paliekami
    // const foundPrices = await collection.find({ price: 14 }).toArray();
    // console.log({ foundPrices });

    // const availableProductsCount = await collection.count({
    //   isAvailable: false,
    // });

    const aggregationCursor = collection.aggregate(pipeline);

    for await (const doc of aggregationCursor) {
      docs.push(doc);
    }

    await con.close();

    res.send({ docs }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));
