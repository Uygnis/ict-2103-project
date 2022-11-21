const mysql = require("mysql");
require("dotenv").config();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pc_project",
});

module.exports = db;
