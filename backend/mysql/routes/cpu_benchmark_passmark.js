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
  const qry1 = `INSERT INTO cpu_benchmark_passmark(cpuName, manufacturer, price, cpuMark, cpuValue, threadMark, threadValue, testDate) VALUES ("${cpuName}", "${manufacturer}", "${price}", "${cpuMark}", "${cpuValue}", "${threadMark}", "${threadValue}", "${testDate}")`;
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
  const qry2 = `SELECT * FROM cpu_benchmark_passmark WHERE cpuName = "${id}"`;
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

//localhost:5001/api/mysql/cpu_benchmark_passmark/update/:id
router.patch("/update/:id", (req, res) => {
  const cpuName = req.params.id;
  const {manufacturer, price, cpuMark, cpuValue, threadMark, threadValue, testDate} = req.body;
  const qry3 = `UPDATE cpu_benchmark_passmark SET (manufacturer = "${manufacturer}", price = "${price}", cpuMark = "${cpuMark}", cpuValue = "${cpuValue}", threadMark = "${threadMark}", threadValue = "${threadValue}", testDate = "${testDate}") WHERE cpuName = "${id}"`;
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records updated: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_passmark/delete/:id
router.delete("/delete/:id", (req, res) => {
  const cpuName = req.params.id;
  const {manufacturer, price, cpuMark, cpuValue, threadMark, threadValue, testDate} = req.body;
  const qry4 = `DELETE * FROM cpu_benchmark_passmark WHERE cpuName = "${id}"`;
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_passmark/getMaxCpuMark
router.get("/getMaxCpuMark", (req, res) => {
  db.query('Select MAX(cpuMark) FROM cpu_benchmark_passmark', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_passmark/avg
router.get("/avg", (req, res) => {
  db.query('Select AVG(price), manufacturer FROM cpu_benchmark_passmark WHERE price IS NOT NULL GROUP BY Manufacturer', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

module.exports = router;