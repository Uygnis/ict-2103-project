const router = require("express").Router();
const { Company_cpuSchema } = require("../models/model");

// api/mongo/company_cpu/post
router.post("/post", async (req, res) => {
  const data = new Company_cpuSchema({
    manufacturer: req.body.manufacturer,
    cpuName: req.body.cpuName,
    price: req.body.price,
    cpuMark: req.body.cpuMark,
    cpuValue: req.body.cpuValue,
    threadMark: req.body.threadMark,
    threadValue: req.body.threadValue,
    testDate: req.body.testDate,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/mongo/company_cpu/get
router.get("/get", async (req, res) => {
  try {
    const data = await Company_cpuSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/mongo/company_cpu/get/:id
router.get("/get/:id", async (req, res) => {
  try {
    const data = await Company_cpuSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/mongo/company_cpu/getQty
router.get("/getQty", async (req, res) => {
  try {
    const data = await Company_cpuSchema.countDocuments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/mongo/company_cpu/update/:id
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Company_cpuSchema.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/mongo/company_cpu/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await Company_cpuSchema.findByIdAndDelete(req.params.id);
    res.send(`Document with ${data.Listing} has been deleted..`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// api/mongo/company_cpu/getMaxCpuMark
router.get("/getMaxCpuMark", async (req, res) => {
  try {
    const data = await Company_cpuSchema.aggregate([
      {
        $sort: {
          cpuMark: -1,
        },
      },
      {
        $limit: 1,
      },
    ]);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
