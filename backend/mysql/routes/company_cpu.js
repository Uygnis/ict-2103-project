const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/company_cpu/post
router.post("/post", (req, res) => {
  const cpuName = req.params.cpuName;
  const manufacturer = req.params.manufacturer;
  const price = req.params.price;
  const cpuMark = req.params.cpuMark;
  const cpuValue = req.params.cpuValue;
  const threadMark = req.params.threadMark;
  const threadValue = req.params.threadValue;
  const testDate = req.params.testDate;
  const qry1 = 'INSERT INTO company_cpu(cpuName, manufacturer, price, cpuMark, cpuValue, threadMark, threadValue, testDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(qry1, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/company_cpu/get
router.get("/get", (req, res) => {
  db.query("SELECT * FROM company_cpu", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/company_cpu/get/:cpuName
router.get("/get/:cpuName", (req, res) => {
  const cpuName = req.params.cpuName;
  const qry2 = `SELECT * FROM company_cpu WHERE cpuName = ${cpuName}`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/company_cpu/getQty
router.get("/getQty", (req, res) => {
  db.query("SELECT COUNT(cpuName) FROM company_cpu", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/company_cpu/update/:cpuName
router.patch("/update/:cpuName", (req, res) => {
  const cpuName = req.params.cpuName;
  const {manufacturer, price, cpuMark, cpuValue, threadMark, threadValue, testDate} = req.body;
  const qry3 = 'UPDATE company_cpu SET (manufacturer, price, cpuMark, cpuValue, threadMark, threadValue, testDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) WHERE cpuName = ${cpuName}';
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records updated: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/company_cpu/delete/:cpuName
router.delete("/delete/:cpuName", (req, res) => {
  const cpuName = req.params.cpuName;
  const {manufacturer, price, cpuMark, cpuValue, threadMark, threadValue, testDate} = req.body;
  const qry4 = 'DELETE * FROM company_cpu WHERE cpuName = ${cpuName}'
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});

module.exports = router;