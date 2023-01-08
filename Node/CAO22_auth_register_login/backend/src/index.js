const express = require("express");
const cors = require("cors");

const { SERVER_PORT } = require("./config");

const auth = require("./routes/v1/auth");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/v1/auth/", auth);

app.get("/", (req, res) => {
  res.send({ msg: "Server is running" });
});

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
