import express from "express";
import cors from "cors";
import { SERVER_PORT } from "./config.js"; // reikia objekto skliaustų, kai dealiname ne su defaultiniu export, o su named
import auth from "./routes/v1/auth.js";

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
