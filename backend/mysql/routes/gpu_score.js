const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/gpu_score/post
router.post("/post", (req, res) => {
  const Device = req.params.Device;
  const Manufacturer = req.params.Manufacturer;
  const CUDA = req.params.CUDA;
  const Metal = req.params.Metal;
  const OpenCL = req.params.OpenCL;
  const Vulkan = req.params.Vulkan;
  const qry1 = 'INSERT INTO gpu_score(Device, Manufacturer, CUDA, Metal, OpenCL, Vulkan) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(qry1, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/gpu_score/get
router.get("/get", (req, res) => {
  db.query("SELECT * FROM gpu_score", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/gpu_score/get/:id
router.get("/get/:id", (req, res) => {
  const Device = req.params.id;
  console.log(req.params);
  const qry2 = `SELECT * FROM gpu_score WHERE Device = ${id}`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/gpu_score/getQty
router.get("/getQty", (req, res) => {
  db.query("SELECT COUNT(Device) as Device FROM gpu_score", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/gpu_score/update/:id
router.patch("/update/:id", (req, res) => {
  const Device = req.params.id;
  const {Manufacturer, CUDA, Metal, OpenCL, Vulkan} = req.body;
  const qry3 = 'UPDATE gpu_score SET (Manufacturer, CUDA, Metal, OpenCL, Vulkan) VALUES (?, ?, ?, ?, ?) WHERE Device = ${id}';
  db.query(qry3, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records updated: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/gpu_score/delete/:id
router.delete("/delete/:id", (req, res) => {
  const Device = req.params.id;
  const {Manufacturer, CUDA, Metal, OpenCL, Vulkan} = req.body;
  const qry4 = 'DELETE * FROM gpu_benchmarks WHERE Device = ${id}'
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/gpu_score/getMaxOpenCL
router.get("/getMaxOpenCL", (req, res) => {
  db.query('Select MAX(OpenCL) FROM gpu_score', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

module.exports = router;
