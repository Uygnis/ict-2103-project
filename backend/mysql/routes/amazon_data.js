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
  const qry1 = 'SELECT * FROM amazon, cpu_benchmark_passmark, gpu_score WHERE amazon.CPU_NAME = cpu_benchmark_passmark.cpuName AND amazon.GPU_NAME = gpu_score.Device';
  db.query(qry1, (err, result) => {
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

//localhost:5001/api/mysql/amazon_data/q=:query
router.get("/q=:query", async (req, res) => {
  const query = req.params.query;
  console.log(req.params);
  const qry3 = 'SELECT * FROM amazon WHERE Listing LIKE %${query}%';
  db.query(qry3, (err, result) => {
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
  db.query('SELECT COUNT(*) FROM amazon', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/update/:item_ID
router.patch("/update/:item_ID", (req, res) => {
  const item_ID = req.params.item_ID;
  const {CPU_Name, GPU_Name, ram, price, Listing} = req.body;
  const qry4 = 'UPDATE amazon SET (CPU_Name, GPU_Name, ram, price, Listing) VALUES (?, ?, ?, ?, ?) WHERE item_ID = ${item_ID}';
  db.query(qry4, (err, result) => {
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
  const qry5 = 'DELETE * FROM amazon WHERE item_ID = ${item_ID}'
  db.query(qry5, (err, result) => {
    if (err) {
     console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/amazon_data/join
router.get("/join", (req, res) => {
  db.query('SELECT * FROM amazon INNER JOIN cpu_benchmark_passmark ON amazon.CPU_NAME = cpu_benchmark_passmark.cpuName INNER JOIN gpu_score ON amazon.GPU_NAME = gpu_score.Device', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/filter/:cpuMark
router.get("/filter/:cpuMark", (req, res) => {
  const cpuMark = req.params.cpuMark;
  const qry6 = 'SELECT * FROM amazon INNER JOIN cpu_benchmark_passmark ON amazon.CPU_NAME = cpu_benchmark_passmark.cpuName INNER JOIN gpu_score ON amazon.GPU_NAME = gpu_score.Device WHERE cpu_benchmark_passmark.cpuMark >= ${cpuMark}';
  db.query(qry6, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/amazon_data/sort
router.get("/sort", (req, res) => {
  const OpenCL = req.params.OpenCL
  const qry7 = 'SELECT * FROM amazon INNER JOIN cpu_benchmark_passmark ON amazon.CPU_NAME = cpu_benchmark_passmark.cpuName INNER JOIN gpu_score ON amazon.GPU_NAME = gpu_score.Device ORDER BY gpu_Score.OpenCL DESC';
  db.query(qry7, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

module.exports = router;
