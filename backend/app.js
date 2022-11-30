require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.listen(process.env.PORT, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
// app.listen(process.env.DB_PORT, () => {
//   console.log(`Server Started at ${process.env.DB_PORT}`);
// });
const mongoString = process.env.ATLAS_URI;

mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
//MONGO DB Connection STRING
const mongoRoutes = require("./mongodb/routes/routes");
app.use("/api/mongo", mongoRoutes);

//MYSQL DB Connection STRING
 const sqlRoutes = require("./mysql/routes/routes");
app.use("/api/mysql", sqlRoutes);
