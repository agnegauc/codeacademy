const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8_080;
const URI = process.env.URI;
const DB = process.env.DB;
const COLLECTION = process.env.COLLECTION;
const client = new MongoClient(URI);

app.use(express.json());
app.use(cors());

app.get('/', async (_, res) => {
  try {
    const con = await client.connect();
    const data = await con.db(DB).collection(COLLECTION).find().toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post('/addPerson', async (req, res) => {
  const { firstName, lastName, age } = req.body;
  if (!firstName || !lastName || !age) {
    res.status(400).send('firstName, lastName and/or age are undefined!').end();
    return;
  }
  if (
    typeof firstName !== 'string' ||
    typeof lastName !== 'string' ||
    typeof age !== 'number'
  ) {
    res
      .status(400)
      .send(
        'firstName and lastName are not a string and/or age is not a number!',
      )
      .end();
    return;
  }
  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(COLLECTION)
      .insertOne({ firstName, lastName, age });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
