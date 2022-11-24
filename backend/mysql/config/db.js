const mysql = require("mysql");
require("dotenv").config();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "897_XYChew",
  database: "test",
});

module.exports = db;
