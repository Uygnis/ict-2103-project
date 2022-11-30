const router = require("express").Router();
const { AmazonDataSchema } = require("../models/model");
// api/mongo/amazon_data/get
router.get("/get", async (req, res) => {
  try {
    const data = await AmazonDataSchema.aggregate([
      {
        $lookup: {
          from: "gpu_Specs",
          localField: "GPU_Name",
          foreignField: "productName",
          as: "gpu_specs",
        },
      },
      {
        $lookup: {
          from: "cpu_Specs",
          localField: "CPU_Name",
          foreignField: "cpuName",
          as: "cpu_score",
        },
      },
      {
        $sort: {
          "gpu_score.OpenCL": -1,
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
        $match: {
          item_ID: findObject.item_ID,
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
// api/mongo/amazon_data/q=:query
router.get("/q=:query", async (req, res) => {
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
// api/mongo/amazon_data/gt
router.get("/gt=:query", async (req, res) => {
  try {
    //query = "greater_than+smaller_than" *******************
    const query = req.params.query.split("+");
    let gt_value = query[0] - 0;
    let lt_value = query[1] - 0;

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
      { $match: { "cpu_score.cpuMark": { $gt: gt_value, $lt: lt_value } } },
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
    res.json({ item_ID: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
