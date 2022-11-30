const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/gpu_specs/post
router.post("/post", (req, res) => {
  const productName = req.params.productName;
  const manufacturer = req.params.manufacturer;
  const releaseYear = req.params.releaseYear;
  const memSize = req.params.memSize;
  const memBusWidth = req.params.memBusWidth;
  const gpuClock = req.params.gpuClock;
  const memClock = req.params.memClock;
  const unifiedShader = req.params.unifiedShader;
  const tmu = req.params.tmu;
  const rop = req.params.rop;
  const igp = req.params.igp;
  const bus = req.params.bus;
  const memType = req.params.memType;
  const gpuChip = req.params.gpuChip;
  const qry1 = `INSERT INTO gpu_specs(productName, manufacturer, releaseYear, memSize, memBusWidth, gpuClock, memClock, unifiedShader, tmu, rop, igp, bus, memType, gpuChip) VALUES ("${productName}", "${manufacturer}", "${releaseYear}", "${memSize}", "${memBusWidth}", "${gpuClock}", "${memClock}", "${unifiedShader}", "${tmu}", "${rop}", "${igp}", "${bus}", "${memType}", "${gpuChip})"`;
  db.query(qry1, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/gpu_specs/get
router.get("/get", (req, res) => {
  db.query("SELECT * FROM gpu_specs", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/gpu_specs/get/:id
router.get("/get/:id", (req, res) => {
  const productName = req.params.productName;
  console.log(req.params);
  const qry2 = `SELECT * FROM gpu_specs WHERE productName = "${productName}"`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/gpu_specs/getQty
router.get("/getQty", (req, res) => {
  db.query("SELECT COUNT(productName) FROM gpu_specs", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/gpu_specs/update/:id
router.patch("/update/:id", (req, res) => {
  const productName = req.params.id;
  const {manufacturer, releaseYear, memSize, memBusWidth, gpuClock, memClock, unifiedShader, tmu, rop, igp, bus, memType, gpuChip} = req.body;
  const qry3 = `UPDATE gpu_specs SET (manufacturer = "${manufacturer}", releaseYear = "${releaseYear}", memSize = "${memSize}", memBusWidth = "${memBusWidth}", gpuClock = "${gpuClock}", memClock = "${memClock}", unifiedShader = "${unifiedShader}", tmu = "${tmu}", rop = "${rop}", igp = "${igp}", bus = "${bus}", memType = "${memType}", gpuChip = "${gpuChip}") WHERE productName = "${productName}"`;
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records updated: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/gpu_specs/delete/:id
router.delete("/delete/:id", (req, res) => {
  const productName = req.params.id;
  const {manufacturer, releaseYear, memSize, memBusWidth, gpuClock, memClock, unifiedShader, tmu, rop, igp, bus, memType, gpuChip} = req.body;
  const qry4 = `DELETE * FROM gpu_specs WHERE productName = "${productName}"`;
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});

module.exports = router;