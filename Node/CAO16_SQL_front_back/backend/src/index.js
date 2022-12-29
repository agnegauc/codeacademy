const mysql = require("mysql2/promise");
const express = require("express");
const app = express();

require("./config"); // instead of require("dotenv").config();

const SERVER_PORT = +process.env.SERVER_PORT || 8_080;

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
};

app.use(express.json());

// via MySQL Workbench:

// CREATE table cars (id int NOT NULL AUTO_INCREMENT, title varchar(35), image varchar(200), price decimal (8, 2), numberplates varchar(6),PRIMARY KEY (id))
// INSERT INTO cars (title,image,price,numberplates) VALUES ('BMW', 'https://www.bmwusa.com/content/dam/bmwusa/common/fma/new-secondary-fmas-assets/non-cookied/secondary-fma-4/mobile/BMW-HP-X5-Secondary-FMA-Mobile.jpg',222,'ABC123');

app.listen(SERVER_PORT, () =>
  console.info(`Server is running on port ${SERVER_PORT}`)
);
