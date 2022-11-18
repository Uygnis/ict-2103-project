const router = require("express").Router();
const { Cpu_specsSchema } = require("../models/model");

// api/cpu_specs/post
router.post("/post", async (req, res) => {
  const data = new Cpu_specsSchema({
    Manufacturer: req.body.Manufacturer,
    modelName: req.body.modelName,
    launchDate: req.body.launchDate,
    numCores: req.body.numCores,
    numThreads: req.body.numThreads,
    baseClock: req.body.baseClock,
    boostClock: req.body.boostClock,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/cpu_specs/get
router.get("/get", async (req, res) => {
  try {
    const data = await Cpu_specsSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/cpu_specs/get/:id
router.get("/get/:id", async (req, res) => {
  try {
    const data = await Cpu_specsSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/cpu_specs/getQty
router.get("/getQty", async (req, res) => {
  try {
    const data = await Cpu_specsSchema.countDocuments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/cpu_specs/update/:id
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Cpu_specsSchema.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/cpu_specs/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await Cpu_specsSchema.findByIdAndDelete(req.params.id);
    res.send(`Document with ${data.Listing} has been deleted..`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
