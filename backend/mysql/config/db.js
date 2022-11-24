const mysql = require("mysql");
require("dotenv").config();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jansennista1",
  database: "jansendb",
});

module.exports = db;
