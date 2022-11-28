const router = require("express").Router();
const { AmazonDataSchema } = require("../models/model");

// api/mongo/amazon_data/post
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
// api/mongo/amazon_data/get
router.get("/get", async (req, res) => {
  try {
    const data = await AmazonDataSchema.aggregate([
      {
        $lookup: {
          from: "gpu_Score",
          localField: "GPU_Name",
          foreignField: "Device",
          as: "gpu_score",
        },
      },
      {
        $lookup: {
          from: "cpu_benchmark_Passmark",
          localField: "CPU_Name",
          foreignField: "cpuName",
          as: "cpu_score",
        },
      },
    ]);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/mongo/amazon_data/get/:id
router.get("/get/:id", async (req, res) => {
  try {
    const findObject = await AmazonDataSchema.findById(req.params.id);
    const data = await AmazonDataSchema.aggregate([
      {
        $lookup: {
          from: "gpu_Score",
          localField: "GPU_Name",
          foreignField: "Device",
          as: "gpu_score",
        },
      },
      {
        $lookup: {
          from: "cpu_benchmark_Passmark",
          localField: "CPU_Name",
          foreignField: "cpuName",
          as: "cpu_score",
        },
      },
      {
        $match: {
          item_ID: findObject.item_ID,
        },
      },
    ]);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/mongo/amazon_data/p=:query
router.get("/p=:query", async (req, res) => {
  try {
    let arr = [];
    const query_result = await AmazonDataSchema.find({
      Listing: { $regex: req.params.query },
    });
    query_result.forEach((e) => arr.push(e.Listing));

    const data = await AmazonDataSchema.aggregate([
      {
        $match: {
          Listing: { $in: arr },
        },
      },
      {
        $lookup: {
          from: "gpu_Score",
          localField: "GPU_Name",
          foreignField: "Device",
          as: "gpu_score",
        },
      },
      {
        $lookup: {
          from: "cpu_benchmark_Passmark",
          localField: "CPU_Name",
          foreignField: "cpuName",
          as: "cpu_score",
        },
      },
    ]);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/mongo/amazon_data/getPriceMax
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
// api/mongo/amazon_data/getPriceMin
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
// api/mongo/amazon_data/getQty
router.get("/getQty", async (req, res) => {
  try {
    const data = await AmazonDataSchema.countDocuments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/mongo/amazon_data/update/:id
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
// api/mongo/amazon_data/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await AmazonDataSchema.findByIdAndDelete(req.params.id);
    res.send(`Document with ${data.Listing} has been deleted..`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//--------SPECIAL API--------//
// api/mongo/amazon_data/join
router.get("/join", async (req, res) => {
  try {
    const data = await AmazonDataSchema.aggregate([
      {
        $lookup: {
          from: "gpu_Score",
          localField: "GPU_Name",
          foreignField: "Device",
          as: "gpu_score",
        },
      },
      {
        $lookup: {
          from: "cpu_benchmark_Passmark",
          localField: "CPU_Name",
          foreignField: "cpuName",
          as: "cpu_score",
        },
      },
    ]);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
