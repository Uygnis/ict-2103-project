const router = require("express").Router();
const { Cpu_benchmark_passmarkSchema } = require("../models/model");

// api/cpu_benchmark_passmark/post
router.post("/post", async (req, res) => {
  const data = new Cpu_benchmark_passmarkSchema({
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
// api/cpu_benchmark_passmark/get
router.get("/get", async (req, res) => {
  try {
    const data = await Cpu_benchmark_passmarkSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/cpu_benchmark_passmark/get/:id
router.get("/get/:id", async (req, res) => {
  try {
    const data = await Cpu_benchmark_passmarkSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/cpu_benchmark_passmark/getQty
router.get("/getQty", async (req, res) => {
  try {
    const data = await Cpu_benchmark_passmarkSchema.countDocuments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/cpu_benchmark_passmark/update/:id
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Cpu_benchmark_passmarkSchema.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/cpu_benchmark_passmark/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await Cpu_benchmark_passmarkSchema.findByIdAndDelete(
      req.params.id
    );
    res.send(`Document with ${data.Listing} has been deleted..`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// api/mongo/cpu_benchmark_passmark/getMaxCpuMark
router.get("/getMaxCpuMark", async (req, res) => {
  try {
    const data = await Cpu_benchmark_passmarkSchema.aggregate([
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
