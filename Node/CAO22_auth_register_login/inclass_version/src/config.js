import dotenv from "dotenv";
// The same as const dotenv = require("dotenv")

dotenv.config();

// export default {
//   SERVER_PORT: +process.env.SERVER_PORT || 8_080,
//   MYSQL_CONFIG: {
//     host: process.env.host,
//     user: process.env.user,
//     password: process.env.password,
//     database: process.env.database,
//     port: +process.env.port,
//   },
// };

// The above has been changed to named exports below as the above was not working
export const SERVER_PORT = process.env.SERVER_PORT || 8_080;

export const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
};
