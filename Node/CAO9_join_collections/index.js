const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 8_080;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const CATEGORIESCOLLECTION = process.env.CATEGORIESCOLLECTION;
const PRODUCTSCOLLECTION = process.env.PRODUCTSCOLLECTION;

app.use(express.json());
app.use(cors());

// Getting different products with respective categories from another collection:

app.get("/products", async (_, res) => {
  const productsWithTitle = [];

  try {
    const con = await client.connect();
    const db = con.db(DB);
    const products = await db.collection(PRODUCTSCOLLECTION).find().toArray();

    for (const product of products) {
      const category = await db
        .collection(CATEGORIESCOLLECTION)
        .findOne({ _id: ObjectId(product.categoryId) });

      productsWithTitle.push({
        ...product,
        category: { title: category.title, _id: product.categoryId },
      });
    }

    await con.close();

    res.send(productsWithTitle).end();
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

// Kiekvienos kategorijos produktų kainų suma:

app.get("/categoryvalue", async (_, res) => {
  const pipeline = [
    {
      $match: {},
    },
    {
      $group: {
        _id: "$categoryId",
        totalPrice: { $sum: "$price" },
      },
    },
    {
      $sort: {
        totalPrice: 1,
      },
    },
    { $project: { _id: 0 } },
    // :0 in $project excludes/supresses a field. It can also add a new field or reset the value of an existing field.
  ];

  try {
    const categoryPriceSum = [];
    const con = await client.connect();
    const db = con.db(DB);
    const collection = db.collection(PRODUCTSCOLLECTION);

    const aggregationCursor = collection.aggregate(pipeline);

    for await (const doc of aggregationCursor) {
      categoryPriceSum.push(doc);
    }

    await con.close();

    res.send({ categoryPriceSum }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

// using lookup:

app.get("/products-with-category-title", async (_, res) => {
  const pipeline = [
    {
      $lookup: {
        from: "categories",
        let: { searchId: { $toObjectId: "$categoryId" } },

        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$_id", "$$searchId"],
              },
            },
          },

          { $project: { _id: 0, title: 1 } },
        ],

        as: "category", // if I name it categoryId, it replaces the categoryId in "products"
      },
    },
  ];

  const productsWithCategoryTitle = [];

  try {
    const con = await client.connect();
    const productsCollection = await con.db(DB).collection(PRODUCTSCOLLECTION);

    const productsAndCategoriesCursor = productsCollection.aggregate(pipeline);

    for await (const doc of productsAndCategoriesCursor) {
      productsWithCategoryTitle.push(doc);
    }

    await con.close();

    res.send(productsWithCategoryTitle).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));
