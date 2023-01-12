import dotenv from "dotenv";
import jwt from "jsonwebtoken";
// Jei defaultinis importas - nereikia objekto skliaustų. Vietoj jwt gali būti assafdas ir vis vien importuoti turėtų

dotenv.config();

const jwtSecret = process.env.jwtSecret;

// rekomenduoja naudoti named eksportus (i.e. prirašyti export prieš kintamąjį):
export const getHome = (req, res) => {
  const token = req.cookies.token;

  let payload = null;

  console.log(req.cookies, token); // for learning purposes

  if (!token) {
    return res.status(401).send({ error: "User unauthorised" }).end();
  }

  try {
    const payload = jwt.verify(token, jwtSecret); // jsonwebtoken tikrina, ar pateikta informacija atitinka algoritmą

    res.send(`Welcome ${payload.userName}`).end();
  } catch (error) {
    if (err instanceof jwt.JsonWebTokenError) {
      // galimai token'as yra pažeistas
      return res.status(401).send({ error: "User unauthorised" }).end();
    }
    return res.status(400).end();
  }
};
