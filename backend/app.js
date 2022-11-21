require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const pool = require("./config/db.js");

const app = express();
app.use(express.json());
app.use(cors());
app.listen(process.env.PORT, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
const mongoString = process.env.ATLAS_URI;

mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const mongoRoutes = require("./mongodb/routes/routes");
app.use("/api/mongo", mongoRoutes);

app.listen(process.env.DB_PORT, () => {
  console.log(`Server Started at ${process.env.DB_PORT}`);
});

//MYSQL DB Connection
pool.getConnection( (err, conn) => {
  if (err) throw err;
  const qry = 'SELECT * FROM project.amazon';
  conn.query(qry, (err, result) => {
    conn.release();
    if (err) throw err;
    console.log(result);
  });
});
