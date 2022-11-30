const router = require("express").Router();
const { Gpu_benchmarksSchema } = require("../models/model");

// api/gpu_benchmarks/post
router.post("/post", async (req, res) => {
  const data = new Gpu_benchmarksSchema({
    Manufacturer: req.body.Manufacturer,
    gpuName: req.body.gpuName,
    G3Dmark: req.body.G3Dmark,
    G2Dmark: req.body.G2Dmark,
    price: req.body.price,
    gpuValue: req.body.gpuValue,
    TDP: req.body.TDP,
    powerPerformance: req.body.powerPerformance,
    testDate: req.body.testDate,
    category: req.body.category,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/gpu_benchmarks/get
router.get("/get", async (req, res) => {
  try {
    const data = await Gpu_benchmarksSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/gpu_benchmarks/get/:id
router.get("/get/:id", async (req, res) => {
  try {
    const data = await Gpu_benchmarksSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/gpu_benchmarks/getQty
router.get("/getQty", async (req, res) => {
  try {
    const data = await Gpu_benchmarksSchema.countDocuments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/gpu_benchmarks/update/:id
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Gpu_benchmarksSchema.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/gpu_benchmarks/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await Gpu_benchmarksSchema.findByIdAndDelete(req.params.id);
    res.send(`Document with ${data.Listing} has been deleted..`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// checks if price attribute exists. API used to find all GPU available in the market
// api/mongo/gpu_benchmarks/exists
router.get("/exists", async (req, res) => {
  try {
    const data = await Gpu_benchmarksSchema.find({ price: { $exists: true } });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/mongo/gpu_benchmarks/avg
router.get("/avg", async (req, res) => {
  try {
    const data = await Gpu_benchmarksSchema.aggregate([
      {
        $group: {
          _id: "$Manufacturer",
          sum: { $sum: "$price" },
          avg: { $avg: "$price" },
        },
      },
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
