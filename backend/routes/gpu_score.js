const router = require("express").Router();
const { Gpu_scoreSchema } = require("../models/model");

// api/gpu_score/post
router.post("/post", async (req, res) => {
  const data = new Gpu_scoreSchema({
    Manufacturer: req.body.Manufacturer,
    Device: req.body.Device,
    CUDA: req.body.CUDA,
    Metal: req.body.Metal,
    OpenCL: req.body.OpenCL,
    Vulkan: req.body.Vulkan,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/gpu_score/get
router.get("/get", async (req, res) => {
  try {
    const data = await Gpu_scoreSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/gpu_score/get/:id
router.get("/get/:id", async (req, res) => {
  try {
    const data = await Gpu_scoreSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/gpu_score/getQty
router.get("/getQty", async (req, res) => {
  try {
    const data = await Gpu_scoreSchema.countDocuments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/gpu_score/update/:id
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Gpu_scoreSchema.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/gpu_score/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await Gpu_scoreSchema.findByIdAndDelete(req.params.id);
    res.send(`Document with ${data.Listing} has been deleted..`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
