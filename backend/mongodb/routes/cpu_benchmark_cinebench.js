const router = require("express").Router();
const { Cpu_benchmark_cinebenchSchema } = require("../models/model");

// api/cpu_benchmark_cinebench/post
router.post("/post", async (req, res) => {
  const data = new Cpu_benchmark_cinebenchSchema({
    Manufacturer: req.body.Manufacturer,
    cpuName: req.body.cpuName,
    singleScore: req.body.singleScore,
    multiScore: req.body.multiScore,
    cores: req.body.cores,
    threads: req.body.threads,
    baseClock: req.body.baseClock,
    turboClock: req.body.turboClock,
    category: req.body.category,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/cpu_benchmark_cinebench/get
router.get("/get", async (req, res) => {
  try {
    const data = await Cpu_benchmark_cinebenchSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/cpu_benchmark_cinebench/get/:id
router.get("/get/:id", async (req, res) => {
  try {
    const data = await Cpu_benchmark_cinebenchSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/cpu_benchmark_cinebench/getQty
router.get("/getQty", async (req, res) => {
  try {
    const data = await Cpu_benchmark_cinebenchSchema.countDocuments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/cpu_benchmark_cinebench/update/:id
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Cpu_benchmark_cinebenchSchema.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/cpu_benchmark_cinebench/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await Cpu_benchmark_cinebenchSchema.findByIdAndDelete(req.params.id);
    res.send(`Document with ${data.Listing} has been deleted..`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
