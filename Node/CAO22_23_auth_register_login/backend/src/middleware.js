const jwt = require("jsonwebtoken");

const { jwtSecret } = require("./config");

module.exports = {
  isLoggedIn: (req, res, next) => {
    try {
      // bandau paimti vartotojo duomenis. Tokenas išaugotas headeriuose kaip Bearer Token
      const token = req.headers.authorization?.split(" ")[1];
      const user = jwt.verify(token, jwtSecret); // galima tiesiog jwt.verify..., be const user =
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send({ error: "Invalid token" }).end();
    }
  },
};
