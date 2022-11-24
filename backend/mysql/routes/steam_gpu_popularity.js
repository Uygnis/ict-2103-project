const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/steam_gpu_popularity/post
router.post("/post", (req, res) => {
  const gpu_product_name = req.params.gpu_product_name;
  const manufacturer = req.params.manufacturer;
  const MAR = req.params["MAR (%)"];
  const MAY = req.params["MAY (%)"];
  const JUN = req.params["JUN (%)"];
  const JUL = req.params["JUL (%)"];
  const CHANGE = req.params["CHANGE (%)"];
  const qry1 = 'INSERT INTO steam_gpu_popularity(gpu_product_name, manufacturer, MAR, MAY, JUN, JUL, CHANGE) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(qry1, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/steam_gpu_popularity/get
router.get("/get", (req, res) => {
  db.query("SELECT * FROM steam_gpu_popularity", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/steam_gpu_popularity/get/:gpu_product_name
router.get("/get/:gpu_product_name", (req, res) => {
  const gpu_product_name = req.params.gpu_product_name;
  //console.log(req.params);
  const qry2 = `SELECT * FROM steam_gpu_popularity WHERE gpu_product_name = ${gpu_product_name}`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/steam_gpu_popularity/getQty
router.get("/getQty", (req, res) => {
  db.query("SELECT COUNT(gpu_product_name) FROM steam_gpu_popularity", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/steam_gpu_popularity/update/:gpu_product_name
router.patch("/update/:gpu_product_name", (req, res) => {
  const gpu_product_name = req.params.gpu_product_name;
  const {manufacturer, MAR, MAY, JUN, JUL, CHANGE} = req.body;
  const qry3 = 'UPDATE steam_gpu_popularity SET (manufacturer, MAR, MAY, JUN, JUL, CHANGE) VALUES (?, ?, ?, ?, ?) WHERE gpu_product_name = ${gpu_product_name}';
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records updated: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/steam_gpu_popularity/delete/:gpu_product_name
router.delete("/delete/:gpu_product_name", (req, res) => {
  const gpu_product_name = req.params.gpu_product_name;
  const {manufacturer, MAR, MAY, JUN, JUL, CHANGE} = req.body;
  const qry4 = 'DELETE * FROM steam_gpu_popularity WHERE gpu_product_name = ${gpu_product_name}'
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});

module.exports = router;
