const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/amazon_data/post
router.post("/post", (req, res) => {
  const item_ID = req.params.item_ID;
  const CPU_Name = req.params.CPU_Name;
  const GPU_Name = req.params.GPU_Name;
  const ram = req.params.ram;
  const price = req.params.price;
  const Listing = req.params.Listing;
  const qry1 = 'INSERT INTO amazon(item_ID, CPU_Name, GPU_Name, ram, price, Listing) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(qry1, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/amazon_data/get
router.get("/get", (req, res) => {
  db.query("SELECT * FROM amazondata", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/get/:item_ID
router.get("/get/:item_ID", (req, res) => {
  const item_ID = req.params.item_ID;
  console.log(req.params);
  const qry2 = `SELECT * FROM amazon WHERE item_ID = ${item_ID}`;
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
  db.query("SELECT COUNT(item_ID) FROM amazondata", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/update/:item_ID
router.patch("/update/:item_ID", (req, res) => {
  const item_ID = req.params.item_ID;
  // const CPU_Name = req.params.CPU_Name;
  // const GPU_Name = req.params.GPU_Name;
  // const ram = req.params.ram;
  // const price = req.params.price;
  // const Listing = req.params.Listing;
  const {CPU_Name, GPU_Name, ram, price, Listing} = req.body;
  const qry3 = 'UPDATE amazon SET (CPU_Name, GPU_Name, ram, price, Listing) VALUES (?, ?, ?, ?, ?) WHERE item_ID = ${item_ID}';
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records updated: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/amazon_data/delete/:item_ID
router.delete("/delete/:item_ID", (req, res) => {
  const item_ID = req.params.item_ID;
  const {CPU_Name, GPU_Name, ram, price, Listing} = req.body;
  const qry4 = 'DELETE * FROM amazon WHERE item_ID = ${item_ID}'
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});

module.exports = router;
