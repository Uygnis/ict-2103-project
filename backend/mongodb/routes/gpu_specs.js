const router = require("express").Router();
const { Gpu_specsSchema } = require("../models/model");

// api/gpu_specs/post
router.post("/post", async (req, res) => {
  const data = new Gpu_specsSchema({
    manufacturer: req.body.manufacturer,
    productName: req.body.productName,
    releaseYear: req.body.releaseYear,
    memSize: req.body.memSize,
    memBusWidth: req.body.memBusWidth,
    gpuClock: req.body.gpuClock,
    memClock: req.body.memClock,
    unifiedShader: req.body.unifiedShader,
    tmu: req.body.tmu,
    rop: req.body.rop,
    igp: req.body.igp,
    bus: req.body.bus,
    memType: req.body.memType,
    gpuChip: req.body.gpuChip,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/gpu_specs/get
router.get("/get", async (req, res) => {
  try {
    const data = await Gpu_specsSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/gpu_specs/get/:id
router.get("/get/:id", async (req, res) => {
  try {
    const data = await Gpu_specsSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/gpu_specs/getQty
router.get("/getQty", async (req, res) => {
  try {
    const data = await Gpu_specsSchema.countDocuments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/gpu_specs/update/:id
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Gpu_specsSchema.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/gpu_specs/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await Gpu_specsSchema.findByIdAndDelete(req.params.id);
    res.send(`Document with ${data.Listing} has been deleted..`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
