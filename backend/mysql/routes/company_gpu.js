const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/company_gpu/post
router.post("/post", (req, res) => {
  const Device = req.params.Device;
  const Manufacturer = req.params.Manufacturer;
  const CUDA = req.params.CUDA;
  const Metal = req.params.Metal;
  const OpenCL = req.params.OpenCL;
  const Vulkan = req.params.Vulkan;
  const qry1 = 'INSERT INTO company_gpu(Device, Manufacturer, CUDA, Metal, OpenCL, Vulkan) VALUES (?, ?, ?, ?, ?, ?)';
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

//localhost:5001/api/mysql/company_gpu/get/:Device
router.get("/get/:Device", (req, res) => {
  const Device = req.params.Device;
  console.log(req.params);
  const qry2 = `SELECT * FROM company_gpu WHERE Device = ${Device}`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/company_gpu/getQty
router.get("/getQty", (req, res) => {
  db.query("SELECT COUNT(Device) FROM company_gpu", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/company_gpu/update/:Device
router.patch("/update/:Device", (req, res) => {
  const Device = req.params.Device;
  const {Manufacturer, CUDA, Metal, OpenCL, Vulkan} = req.body;
  const qry3 = 'UPDATE gpu_benchmarks SET (Manufacturer, CUDA, Metal, OpenCL, Vulkan) VALUES (?, ?, ?, ?, ?) WHERE Device = ${Device}';
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records updated: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/company_gpu/delete/:Device
router.delete("/delete/:Device", (req, res) => {
  const Device = req.params.Device;
  const {Manufacturer, CUDA, Metal, OpenCL, Vulkan} = req.body;
  const qry4 = 'DELETE * FROM gpu_benchmarks WHERE Device = ${Device}'
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});

module.exports = router;
