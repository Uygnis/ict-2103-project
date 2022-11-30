const mysql = require("mysql");
require("dotenv").config();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jansennista1",
  database: "jansendb",
});

//Amazon_data.index(
//({item_ID: integer, CPU_Name: VARCHAR, GPU_Name: VARCHAR})
//)

module.exports = db;
