const router = require("express").Router();
const { Company_gpuSchema } = require("../models/model");

// api/mongo/company_gpu/post
router.post("/post", async (req, res) => {
  const data = new Company_gpuSchema({
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
// api/mongo/company_gpu/get
router.get("/get", async (req, res) => {
  try {
    const data = await Company_gpuSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/mongo/company_gpu/get/:id
router.get("/get/:id", async (req, res) => {
  try {
    const data = await Company_gpuSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/mongo/company_gpu/getQty
router.get("/getQty", async (req, res) => {
  try {
    const data = await Company_gpuSchema.countDocuments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/mongo/company_gpu/update/:id
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Company_gpuSchema.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/mongo/company_gpu/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await Company_gpuSchema.findByIdAndDelete(req.params.id);
    res.send(`Document with ${data.Listing} has been deleted..`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
