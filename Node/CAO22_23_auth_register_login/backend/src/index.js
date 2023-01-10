const express = require("express");
const cors = require("cors");

const { SERVER_PORT } = require("./config");

const auth = require("./routes/v1/auth");
const content = require("./routes/v1/content");

const app = express();

app.use(express.json()); // also called middleware
app.use(cors());

app.use("/v1/auth", auth);
app.use("/v1/content", content);

app.get("/", (_, res) => {
  res.send({ msg: "Server is running" });
});

app.all("*", (_, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
