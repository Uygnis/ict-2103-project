const router = require("express").Router();
const { Steam_gpu_popularitySchema } = require("../models/model");

// api/gpu_specs/post
router.post("/post", async (req, res) => {
  const data = new Steam_gpu_popularitySchema({
    manufacturer: req.body.manufacturer,
    gpu_product_name: req.body.gpu_product_name,
    ["MAR (%)"]: req.body["MAR (%)"],
    ["MAY (%)"]: req.body["MAY (%)"],
    ["JUN (%)"]: req.body["JUN (%)"],
    ["JUL (%)"]: req.body["JUL (%)"],
    ["CHANGE (%)"]: req.body["CHANGE (%)"],
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
    const data = await Steam_gpu_popularitySchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/gpu_specs/get/:id
router.get("/get/:id", async (req, res) => {
  try {
    const data = await Steam_gpu_popularitySchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/gpu_specs/getQty
router.get("/getQty", async (req, res) => {
  try {
    const data = await Steam_gpu_popularitySchema.countDocuments();
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

    const result = await Steam_gpu_popularitySchema.findByIdAndUpdate(
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
    const data = await Steam_gpu_popularitySchema.findByIdAndDelete(
      req.params.id
    );
    res.send(`Document with ${data.Listing} has been deleted..`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
