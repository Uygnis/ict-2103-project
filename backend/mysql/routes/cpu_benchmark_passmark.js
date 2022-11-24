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
  const cores = req.params.cores;
  const socket = req.params.socket;
  const category = req.params.category;
  const qry1 = 'INSERT INTO cpu_benchmark_passmark(cpuName, manufacturer, price, cpuMark, cpuValue, threadMark, threadValue, cores, testDate, socket, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
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

//localhost:5001/api/mysql/cpu_benchmark_passmark/get/:cpuName
router.get("/get/:cpuName", (req, res) => {
  const cpuName = req.params.cpuName;
  //console.log(req.params.cpuName);
  const qry2 = `SELECT * FROM cpu_benchmark_passmark WHERE cpuName = ${cpuName}`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_passmark/getQty
router.get("/getQty", (req, res) => {
  db.query("SELECT COUNT(cpuName) FROM cpu_benchmark_passmark", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_passmark/update/:cpuName
router.patch("/update/:cpuName", (req, res) => {
  const cpuName = req.params.cpuName;
  const {manufacturer, price, cpuMark, cpuValue, threadMark, threadValue, cores, testDate, socket, category} = req.body;
  const qry3 = 'UPDATE cpu_benchmark_passmark SET (manufacturer, price, cpuMark, cpuValue, threadMark, threadValue, cores, testDate, socket, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) WHERE cpuName = ${cpuName}';
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records updated: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_passmark/delete/:cpuName
router.delete("/delete/:cpuName", (req, res) => {
  const cpuName = req.params.cpuName;
  const {manufacturer, price, cpuMark, cpuValue, threadMark, threadValue, cores, testDate, socket, category} = req.body;
  const qry4 = 'DELETE * FROM cpu_benchmark_passmark WHERE cpuName = ${cpuName}'
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});

module.exports = router;