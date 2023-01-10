import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const jwtSecret = process.env.jwtSecret;

export const signIn = (req, res) => {
  const { userName, password } = req.body; // objekto skliausiuose vadinasi destructuring

  const expiresIn = 60; // expiresIn turetu buti .env faile
  const issuedAt = new Date().getTime(); // dabartinė data + laikas

  const users = {
    Jonas: "kaledos",
    Andrius: "velykos",
  };

  if (typeof userName !== "string" || typeof password !== "string") {
    return res.status(400).send({ error: "Data is incorrect" });
  }

  if (!userName || !password) {
    return res
      .status(400)
      .send({ error: "Please provide userName and password" });
  }

  if (password !== users[userName]) {
    // = users.Jonas arba users.Andrius (vardas nustatomas pagal pateikta userName, kad gautume to userName slaptažodį)
    return res.status(400).send({ error: "Incorrect login data" });
  }

  // Pirmo objekto (argumento) viduje - info, kurią bandome užšifruoti (payload); antras argumentas - secretas (mūsų slaptas passwordas, kurį naudos tik mūsų sistema):
  const token = jwt.sign({ userName, issuedAt }, jwtSecret, {
    algorithm: "HS256",
    expiresIn,
  }); // kartais vadinama access token

  res.cookie("token", token, { maxAge: expiresIn * 1_000 });

  res.send("Signed in succesfuly").end();
};
