const { MongoClient } = require("mongodb");
require("dotenv").config();
const uri = process.env.ATLAS_URI;

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db("amazon_listing");
        console.log(`app listening to port ${process.env.PORT}`);
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
