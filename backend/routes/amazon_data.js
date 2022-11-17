const router = require("express").Router();
const { AmazonDataSchema } = require("../models/model");

// api/amazon_data/post
router.post("/post", async (req, res) => {
  const data = new AmazonDataSchema({
    item_ID: req.body.item_ID,
    CPU_Name: req.body.CPU_Name,
    GPU_Name: req.body.GPU_Name,
    ram: req.body.ram,
    price: req.body.price,
    Listing: req.body.Listing,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/amazon_data/
router.get("/get", async (req, res) => {
  try {
    const data = await AmazonDataSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/amazon_data/:id
router.get("/:id", function (req, res) {
  res.json({ id: req.params.id });
});

module.exports = router;
