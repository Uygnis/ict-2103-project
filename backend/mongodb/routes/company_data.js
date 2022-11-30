const router = require("express").Router();
const { CompanyDataSchema } = require("../models/model");

// api/mongo/company_data/post
router.post("/post", async (req, res) => {
  const data = new CompanyDataSchema({
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
// api/mongo/company_data/get
router.get("/get", async (req, res) => {
  try {
    const data = await CompanyDataSchema.aggregate([
      {
        $lookup: {
          from: "company_gpu",
          localField: "GPU_Name",
          foreignField: "gpuName",
          as: "gpu_specs",
        },
      },
      {
        $lookup: {
          from: "company_cpu",
          localField: "CPU_Name",
          foreignField: "cpuName",
          as: "cpu_specs",
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
// api/mongo/company_data/get/:id
router.get("/get/:id", async (req, res) => {
  try {
    const findObject = await CompanyDataSchema.findById(req.params.id);
    const data = await CompanyDataSchema.aggregate([
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
// api/mongo/company_data/getPriceMax
router.get("/getPriceMax", async (req, res) => {
  try {
    const data = await CompanyDataSchema.aggregate([
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
// api/mongo/company_data/getPriceMin
router.get("/getPriceMin", async (req, res) => {
  try {
    const data = await CompanyDataSchema.aggregate([
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
// api/mongo/company_data/getQty
router.get("/getQty", async (req, res) => {
  try {
    const data = await CompanyDataSchema.countDocuments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// api/mongo/company_data/update/:id
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await CompanyDataSchema.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// api/mongo/company_data/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await CompanyDataSchema.findByIdAndDelete(req.params.id);
    res.send(`Document with ${data.Listing} has been deleted..`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
