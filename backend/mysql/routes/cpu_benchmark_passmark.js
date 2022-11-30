const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/cpu_benchmark_passmark/post
router.post("/post", (req, res) => {
  const cpuName = req.params.cpuName;
  const manufacturer = req.params.manufacturer;
  const price = req.params.price;
  const cpuMark = req.params.cpuMark;
  const cpuValue = req.params.cpuValue;
  const threadMark = req.params.threadMark;
  const threadValue = req.params.threadValue;
  const testDate = req.params.testDate;
  const qry1 = 'INSERT INTO cpu_benchmark_passmark(cpuName, manufacturer, price, cpuMark, cpuValue, threadMark, threadValue, testDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(qry1, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_passmark/get
router.get("/get", (req, res) => {
  db.query("SELECT * FROM cpu_benchmark_passmark", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_passmark/get/:id
router.get("/get/:id", (req, res) => {
  const cpuName = req.params.id;
  const qry2 = `SELECT * FROM cpu_benchmark_passmark WHERE cpuName = ${id}`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_passmark/getQty
router.get("/getQty", (req, res) => {
  db.query("SELECT COUNT(cpuName) as cpuName FROM cpu_benchmark_passmark", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

module.exports = router;