import jwt from "jsonwebtoken";

// Jei defaultinis importas - nereikia objekto skliaustų. Vietoj jwt gali būti assafdas ir vis vien importuoti turėtų

const jwtSecret = "codeAcademy";

// rekomenduoja naudoti named eksportus:

export const getHome = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send({ error: "User unauthorised" }).end();
  }

  try {
    const payload = jwt.verify(token, jwtSecret);
  } catch (error) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ error: "User unauthorised" }).end();
    }
    return res.status(400).end();
  }

  res.send({ message: "Welcome" }).end();
};
