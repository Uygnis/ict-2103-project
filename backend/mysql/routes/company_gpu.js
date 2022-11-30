const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/company_gpu/post
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
  const qry1 = 'INSERT INTO company_gpu(gpuName, Manufacturer, G3Dmark, G2Dmark, price, gpuValue, TDP, powerPerformance, testDate, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(qry1, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/company_gpu/get
router.get("/get", (req, res) => {
  db.query("SELECT * FROM company_gpu", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/company_gpu/get/:id
router.get("/get/:id", (req, res) => {
  const gpuName = req.params.gpuName;
  const qry2 = `SELECT * FROM company_gpu WHERE gpuName = ${id}`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/company_gpu/getQty
router.get("/getQty", (req, res) => {
  db.query("SELECT COUNT(gpuName) AS gpuName FROM company_gpu", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/company_gpu/update/:gpuName
router.patch("/update/:id", (req, res) => {
  const gpuName = req.params.gpuName;
  const {Manufacturer, G3Dmark, G2Dmark, price, gpuValue, TDP, powerPerformance, testDate, category} = req.body;
  const qry3 = 'UPDATE company_gpu SET (Manufacturer, G3Dmark, G2Dmark, price, gpuValue, TDP, powerPerformance, testDate, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) WHERE gpuName = ${id}';
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records updated: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/company_gpu/delete/:id
router.delete("/delete/:id", (req, res) => {
  const gpuName = req.params.gpuName;
  const {Manufacturer, G3Dmark, G2Dmark, price, gpuValue, TDP, powerPerformance, testDate, category} = req.body;
  const qry4 = 'DELETE * FROM company_gpu WHERE gpuName = ${id}'
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});

module.exports = router;
