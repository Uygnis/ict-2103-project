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
// api/amazon_data/get
router.get("/get", async (req, res) => {
  try {
    const data = await AmazonDataSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/amazon_data/get/:id
router.get("/get/:id", async (req, res) => {
  try {
    const data = await AmazonDataSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/amazon_data/getPriceMax
router.get("/getPriceMax", async (req, res) => {
  try {
    const data = await AmazonDataSchema.aggregate([
      {
        $sort: {
          price: -1,
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
// api/amazon_data/getPriceMin
router.get("/getPriceMin", async (req, res) => {
  try {
    const data = await AmazonDataSchema.aggregate([
      {
        $sort: {
          price: 1,
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
// api/amazon_data/getQty
router.get("/getQty", async (req, res) => {
  try {
    const data = await AmazonDataSchema.countDocuments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/amazon_data/update/:id
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await AmazonDataSchema.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/amazon_data/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await AmazonDataSchema.findByIdAndDelete(req.params.id);
    res.send(`Document with ${data.Listing} has been deleted..`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
