const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/cpu_benchmark_cinebench/post
router.post("/post", (req, res) => {
  const cpuName = req.params.cpuName;
  const Manufacturer = req.params.Manufacturer;
  const singleScore = req.params.singleScore;
  const multiScore = req.params.multiScore;
  const cores = req.params.cores;
  const threads = req.params.threads;
  const baseClock = req.params.baseClock;
  const turboClock = req.params.turboClock;
  const category = req.params.category;
  const qry1 = 'INSERT INTO cpu_benchmark_cinebench(cpuName, Manufacturer, singleScore, multiScore, cores, threads, baseClock, turboClock, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(qry1, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_cinebench/get
router.get("/get", (req, res) => {
  db.query("SELECT * FROM cpu_benchmark_cinebench", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_cinebench/get/:cpuName
router.get("/get/:cpuName", (req, res) => {
  const cpuName = req.params.cpuName;
  //console.log(req.params.cpuName);
  const qry2 = `SELECT * FROM cpu_benchmark_cinebench WHERE cpuName = ${cpuName}`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_cinebench/getQty
router.get("/getQty", (req, res) => {
  db.query("SELECT COUNT(cpuName) FROM cpu_benchmark_cinebench", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_cinebench/update/:cpuName
router.patch("/update/:cpuName", (req, res) => {
  const cpuName = req.params.cpuName;
  const {Manufacturer, singleScore, multiScore, cores, threads, baseClock, turboClock, category} = req.body;
  const qry3 = 'UPDATE cpu_benchmark_cinebench SET (Manufacturer, singleScore, multiScore, cores, threads, baseClock, turboClock, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?) WHERE cpuName = ${cpuName}';
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records updated: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/cpu_benchmark_cinebench/delete/:cpuName
router.delete("/delete/:cpuName", (req, res) => {
  const cpuName = req.params.cpuName;
  const {Manufacturer, singleScore, multiScore, cores, threads, baseClock, turboClock, category} = req.body;
  const qry4 = 'DELETE * FROM cpu_benchmark_cinebench WHERE cpuName = ${cpuName}'
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});


module.exports = router;