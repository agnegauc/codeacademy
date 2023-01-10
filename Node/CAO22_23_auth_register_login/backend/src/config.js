require("dotenv").config();

module.exports = {
  SERVER_PORT: +process.env.SERVER_PORT || 8_080,
  jwtSecret: process.env.JWT_SECRET,
  MYSQL_CONFIG: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: +process.env.port,
  },
};
