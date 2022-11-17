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

// api/gpu_specs/:id
router.get("/get", async (req, res) => {
  try {
    const data = await Gpu_specsSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
