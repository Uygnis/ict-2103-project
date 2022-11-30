const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/amazon_data/get
router.get("/get", (req, res) => {
  db.query('SELECT * FROM amazon INNER JOIN cpu_specs ON amazon.CPU_NAME = cpu_specs.cpu_Name INNER JOIN gpu_specs ON amazon.GPU_NAME = gpu_specs.Device', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/get/:id
router.get("/get/:id", (req, res) => {
  const item_ID = req.params.item_ID;
  console.log(req.params);
  const qry1 = `SELECT * FROM amazon WHERE item_ID = ${id}`;
  db.query(qry1, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/q=:query
router.get("/q=:query", async (req, res) => {
  const query = req.params.query;
  console.log(req.params);
  const qry2 = `SELECT * FROM amazon JOIN cpu_specs ON amazon.CPU_NAME = cpu_specs.modelName JOIN gpu_specs ON amazon.GPU_NAME = gpu_specs.productName WHERE Listing LIKE "%${query}%"`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/getPriceMax
router.get("/getPriceMax", (req, res) => {
  db.query('Select MAX(Price) FROM amazon', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/getPriceMin
router.get("/getPriceMin", (req, res) => {
  db.query('SELECT MIN(price) FROM amazon', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/getQty
router.get("/getQty", (req, res) => {
  db.query('SELECT COUNT(*) As item_ID FROM amazon', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/filter/:cpuMark
router.get("/filter/:cpuMark", (req, res) => {
  const cpuMark = req.params.cpuMark;
  const qry3 = `SELECT * FROM amazon INNER JOIN cpu_benchmark_passmark ON amazon.CPU_NAME = cpu_benchmark_passmark.cpuName INNER JOIN gpu_specs ON amazon.GPU_NAME = gpu_specs.productName WHERE cpu_benchmark_passmark.cpuMark >= ${cpuMark}`;
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/sort
router.get("/sort", (req, res) => {
  const OpenCL = req.params.OpenCL
  const qry4 = 'SELECT * FROM amazon INNER JOIN cpu_specs ON amazon.CPU_NAME = cpu_specs.cpu_Name INNER JOIN gpu_sore ON amazon.GPU_NAME = gpu_score.Device ORDER BY gpu_score.OpenCL DESC';
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

module.exports = router;
