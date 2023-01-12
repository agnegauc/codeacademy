import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { getHome } from "./getHome.js";
import { signIn } from "./signIn.js";

const app = express();

const PORT = 8_000;

app.use(express.json()); // middleware
app.use(cookieParser());
app.use(cors({ origin: "http://127.0.0.1:5500", credentials: true }));

app.get("/home", getHome);
app.post("/sign-in", signIn);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
