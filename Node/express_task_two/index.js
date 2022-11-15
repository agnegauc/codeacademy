const express = require("express");

const app = express();
const PORT = 8080;

// Applying middleware to convert to json:
app.use(express.json());

// "Run this function when the route ("/thirt") is requested":
app.get("/tshirt", (req, res) => {
  // with res we're sending a response back to the client (with a status code) and SEND a data payload (intended message).
  res.status(200).send({
    tshirt: "👕",
    size: "large",
  }); // If we pass a JS object, it will send back the data as JSON by default.
});

// Adding a second (post) endpoint:
app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  // Checking if we have a logo in the request body. If not, send an error:
  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }

  res.send({
    tshirt: `👕 with this logo: ${logo}, id: ${id}`,
  });
});

app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));
