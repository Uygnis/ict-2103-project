const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/amazon_data/get
router.get("/get", (req, res) => {
  db.query("SELECT * FROM amazondata", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/get/:id
router.get("/get/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  const qry2 = `SELECT * FROM amazon WHERE item_ID = ${id}`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/getPriceMax
router.get("/getPriceMax", (req, res) => {
  db.query("Select MAX(Price) FROM amazon", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/getPriceMin
router.get("/getPriceMin", (req, res) => {
  db.query("SELECT MIN(price) FROM amazon", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/getQty
router.get("/getQty", (req, res) => {
  db.query("SELECT COUNT(item_ID) FROM amazon", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/update/:id
router.get("/update/:id", (req, res) => {
  db.query("INSERT item_ID FROM amazon", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

module.exports = router;
