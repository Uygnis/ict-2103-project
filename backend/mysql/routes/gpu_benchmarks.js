const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/gpu_benchmarks/post
router.post("/post", (req, res) => {
  const gpuName = req.params.gpuName;
  const Manufacturer = req.params.Manufacturer;
  const G3Dmark = req.params.G3Dmark;
  const G2Dmark = req.params.G2Dmark;
  const price = req.params.price;
  const gpuValue = req.params.gpuValue;
  const TDP = req.params.TDP;
  const powerPerformance = req.params.powerPerformance;
  const testDate = req.params.testDate;
  const category = req.params.category;
  const qry1 = `INSERT INTO gpu_benchmarks(gpuName, Manufacturer, G3Dmark, G2Dmark, price, gpuValue, TDP, powerPerformance, testDate, category) VALUES ("${gpuName}", "${Manufacturer}", "${G3Dmark}", "${G2Dmark}", "${price}", "${gpuValue}", "${TDP}", "${powerPerformance}", "${testDate}", "${category}")`;
  db.query(qry1, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/gpu_benchmarks/get
router.get("/get", (req, res) => {
  db.query("SELECT * FROM gpu_benchmarks", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/gpu_benchmarks/get/:id
router.get("/get/:id", (req, res) => {
  const gpuName = req.params.id;
  const qry2 = `SELECT * FROM gpu_benchmarks WHERE gpuName = "${gpuName}"`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/gpu_benchmarks/getQty
router.get("/getQty", (req, res) => {
  db.query("SELECT COUNT(gpuName) AS gpuName FROM gpu_benchmarks", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/gpu_benchmarks/update/:id
router.patch("/update/:id", (req, res) => {
  const gpuName = req.params.gpuName;
  const {Manufacturer, G3Dmark, G2Dmark, price, gpuValue, TDP, powerPerformance, testDate, category} = req.body;
  const qry3 = `UPDATE gpu_benchmarks SET (Manufacturer = "${Manufacturer}", G3Dmark = "${G3Dmark}", G2Dmark = "${G2Dmark}", price = "${price}", gpuValue = "${gpuValue}", TDP = "${TDP}", powerPerformance = "${powerPerformance}", testDate = "${testDate}", category = "${category}") WHERE gpuName = "${gpuName}"`;
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records updated: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/gpu_benchmarks/delete/:id
router.delete("/delete/:id", (req, res) => {
  const gpuName = req.params.id;
  const {Manufacturer, G3Dmark, G2Dmark, price, gpuValue, TDP, powerPerformance, testDate, category} = req.body;
  const qry4 = `DELETE * FROM gpu_benchmarks WHERE gpuName = "${gpuName}"`
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/gpu_benchmarks/exists
router.get("/exists", (req, res) => {
  const qry5 = 'SELECT gpuName FROM gpu_benchmarks WHERE EXISTS(SELECT gpu_Name FROM amazon WHERE amazon.gpu_Name = gpu_benchmarks.gpuName)';
  db.query(qry5, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/gpu_benchmarks/avg
router.get("/avg", (req, res) => {
  db.query('Select AVG(price), Manufacturer FROM gpu_benchmarks WHERE price IS NOT NULL GROUP BY Manufacturer', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});


module.exports = router;