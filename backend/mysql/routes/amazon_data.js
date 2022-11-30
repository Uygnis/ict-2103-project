const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/amazon_data/get
router.get("/get", (req, res) => {
  db.query('SELECT * FROM amazon JOIN cpu_specs ON amazon.CPU_Name = cpu_specs.modelName JOIN gpu_specs ON amazon.GPU_Name = gpu_specs.productName', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/get/:id
router.get("/get/:id", (req, res) => {
  const item_ID = req.params.id;
  console.log(req.params);
  const qry1 = `SELECT * FROM amazon JOIN cpu_specs ON amazon.CPU_Name = cpu_specs.modelName JOIN gpu_specs ON amazon.GPU_Name = gpu_specs.productName WHERE item_ID = "${item_ID}"`;
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
  const qry2 = `SELECT * FROM amazon JOIN cpu_specs ON amazon.CPU_Name = cpu_specs.modelName JOIN gpu_specs ON amazon.GPU_Name = gpu_specs.productName WHERE Listing LIKE "%${query}%"`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/gt=:cpuMark
router.get("/gt=:cpuMark", (req, res) => {
  const cpuMark = req.params.cpuMark;
  const qry3 = `SELECT * FROM amazon JOIN cpu_benchmark_passmark ON amazon.CPU_NAME = cpu_benchmark_passmark.cpuName JOIN gpu_specs ON amazon.GPU_Name = gpu_specs.productName WHERE cpu_benchmark_passmark.cpuMark >= ${cpuMark}`;
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/getPriceMax
router.get("/getPriceMax", (req, res) => {
  db.query('Select MAX(Price) FROM amazon JOIN cpu_specs ON amazon.CPU_Name = cpu_specs.modelName JOIN gpu_specs ON amazon.GPU_Name = gpu_specs.productName', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/getPriceMin
router.get("/getPriceMin", (req, res) => {
  db.query('SELECT MIN(price) FROM amazon JOIN cpu_specs ON amazon.CPU_NAME = cpu_specs.modelName JOIN gpu_specs ON amazon.GPU_NAME = gpu_specs.productName', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/getQty
router.get("/getQty", (req, res) => {
  db.query('SELECT COUNT(*) As item_ID FROM amazon JOIN cpu_specs ON amazon.CPU_Name = cpu_specs.modelName JOIN gpu_specs ON amazon.GPU_Name = gpu_specs.productName', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

module.exports = router;
