const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/cpu_specs/post
router.post("/post", (req, res) => {
  const modelName = req.params.modelName;
  const Manufacturer = req.params.Manufacturer;
  const launchDate = req.params.launchDate;
  const numCores = req.params.numCores;
  const numThreads = req.params.numThreads;
  const baseClock = req.params.baseClock;
  const boostClock = req.params.boostClock;
  const qry1 = 'INSERT INTO cpu_specs(modelName, Manufacturer, launchDate, numCores, numThreads, baseClock, boostClock) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(qry1, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records inserted: " + result.affectedRows);
  });
});


//localhost:5001/api/mysql/cpu_specs/get
router.get("/get", (req, res) => {
  db.query("SELECT * FROM cpu_specs", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/cpu_specs/get/:modelName
router.get("/get/:modelName", (req, res) => {
  const modelName = req.params.modelName;
  //console.log(req.params.cpuName);
  const qry2 = `SELECT * FROM cpu_specs WHERE modelName = ${modelName}`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/cpu_specs/getQty
router.get("/getQty", (req, res) => {
  db.query("SELECT COUNT(modelName) FROM cpu_specs", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/cpu_specs/update/:modelName
router.patch("/update/:modelName", (req, res) => {
  const modelName = req.params.modelName;
  const {Manufacturer, launchDate, numCores, numThreads, baseClock, boostClock} = req.body;
  const qry3 = 'UPDATE cpu_specs SET (Manufacturer, launchDate, numCores, numThreads, baseClock, boostClock) VALUES (?, ?, ?, ?, ?, ?) WHERE modelName = ${modelName}';
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records updated: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/cpu_specs/delete/:modelName
router.delete("/delete/:modelName", (req, res) => {
  const modelName = req.params.modelName;
  const {Manufacturer, launchDate, numCores, numThreads, baseClock, boostClock} = req.body;
  const qry4 = 'DELETE * FROM cpu_specs WHERE modelName = ${modelName}'
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});

module.exports = router;