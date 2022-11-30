const router = require("express").Router();
const db = require("../config/db");

//MYSQL DB Connection
//localhost:5001/api/mysql/company_data/post
router.post("/post", (req, res) => {
  const item_ID = req.params.item_ID;
  const CPU_Name = req.params.CPU_Name;
  const GPU_Name = req.params.GPU_Name;
  const RAM = req.params.RAM;
  const price = req.params.Price;
  const Listing = req.params.Listing;
  const qry1 = `INSERT INTO company_data(item_ID, CPU_Name, GPU_Name, RAM, Price, Listing) VALUES ("${item_ID}", "${CPU_Name}", "${GPU_Name}", "${RAM}", "${Price}", "${Listing}")`;
  db.query(qry1, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/company_data/get
router.get("/get", (req, res) => {
  const qry1 = 'SELECT * FROM company_data JOIN cpu_specs ON company_data.CPU_Name = cpu_specs.modelName JOIN gpu_specs ON amazon.GPU_Name = gpu_specs.productName';
  db.query(qry1, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/company_data/get/:id
router.get("/get/:id", (req, res) => {
  const item_ID = req.params.id;
  console.log(req.params);
  const qry2 = `SELECT * FROM company_data JOIN cpu_specs ON company_data.CPU_Name = cpu_specs.modelName JOIN gpu_specs ON amazon.GPU_Name = gpu_specs.productName WHERE item_ID = ${id}`;
  db.query(qry2, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/company_data/getPriceMax
router.get("/getPriceMax", (req, res) => {
  db.query('Select MAX(Price) FROM company_data JOIN cpu_specs ON company_data.CPU_Name = cpu_specs.modelName JOIN gpu_specs ON amazon.GPU_Name = gpu_specs.productName', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/company_data/getPriceMin
router.get("/getPriceMin", (req, res) => {
  db.query('SELECT MIN(price) FROM company_data JOIN cpu_specs ON company_data.CPU_Name = cpu_specs.modelName JOIN gpu_specs ON amazon.GPU_Name = gpu_specs.productName', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/company_data/getQty
router.get("/getQty", (req, res) => {
  db.query('SELECT COUNT(item_ID) as item_ID FROM company_data JOIN cpu_specs ON company_data.CPU_Name = cpu_specs.modelName JOIN gpu_specs ON amazon.GPU_Name = gpu_specs.productName', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//localhost:5001/api/mysql/company_data/update/:id
router.patch("/update/:id", (req, res) => {
  const item_ID = req.params.id;
  const {CPU_Name, GPU_Name, RAM, Price, Listing} = req.body;
  const qry4 = `UPDATE company_data SET (CPU_Name = "${CPU_Name}", GPU_Name = "${GPU_Name}", RAM = "${RAM}", Price = "${Price}", Listing = "${Listing}") WHERE item_ID = "${id}"`;
  db.query(qry4, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log("Number of records updated: " + result.affectedRows);
  });
});

//localhost:5001/api/mysql/company_data/delete/:id
router.delete("/delete/:id", (req, res) => {
  const item_ID = req.params.id;
  const {CPU_Name, GPU_Name, ram, price, Listing} = req.body;
  const qry5 = `DELETE * FROM company_data WHERE item_ID = "${id}"`
  db.query(qry5, (err, result) => {
    if (err) {
     console.log(err);
    }
    res.send(result);
    rconsole.log("Number of records deleted: " + result.affectedRows);
  });
});

module.exports = router;
