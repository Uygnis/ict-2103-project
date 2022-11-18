const mongoose = require("mongoose");

const amazonData = new mongoose.Schema(
  {
    item_ID: {
      // required: true,
      type: Number,
    },
    CPU_Name: {
      // required: true,
      type: String,
    },
    GPU_Name: {
      // required: true,
      type: String,
    },
    ram: {
      // required: true,
      type: Number,
    },
    price: {
      // required: true,
      type: Number,
    },
    Listing: {
      // required: true,
      type: String,
    },
  },
  {
    collection: "amazonData",
    bufferCommands: false,
    autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
  }
);
const gpu_specs = new mongoose.Schema(
  {
    manufacturer: {
      // required: true,
      type: String,
    },
    productName: {
      // required: true,
      type: String,
    },
    releaseYear: {
      // required: true,
      type: Number,
    },
    memSize: {
      // required: true,
      type: Number,
    },
    memBusWidth: {
      // required: true,
      type: Number,
    },
    gpuClock: {
      // required: true,
      type: Number,
    },
    memClock: {
      // required: true,
      type: Number,
    },
    unifiedShader: {
      // required: true,
      type: Number,
    },
    tmu: {
      // required: true,
      type: Number,
    },
    rop: {
      // required: true,
      type: Number,
    },
    igp: {
      // required: true,
      type: Number,
    },
    bus: {
      // required: true,
      type: Number,
    },
    memType: {
      // required: true,
      type: Number,
    },
    gpuChip: {
      // required: true,
      type: Number,
    },
  },
  {
    collection: "gpu_Specs",
    bufferCommands: false,
    autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
  }
);
const gpu_benchmarks = new mongoose.Schema(
  {
    Manufacturer: {
      // required: true,
      type: String,
    },
    gpuName: {
      // required: true,
      type: String,
    },
    G3Dmark: {
      // required: true,
      type: Number,
    },
    G2Dmark: {
      // required: true,
      type: Number,
    },
    price: {
      // required: true,
      type: Number,
    },
    gpuValue: {
      // required: true,
      type: Number,
    },
    TDP: {
      // required: true,
      type: Number,
    },
    powerPerformance: {
      // required: true,
      type: Number,
    },
    testDate: {
      // required: true,
      type: Number,
    },
    category: {
      // required: true,
      type: String,
    },
  },
  {
    collection: "gpu_Benchmarks",
    bufferCommands: false,
    autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
  }
);
const gpu_score = new mongoose.Schema(
  {
    Manufacturer: {
      // required: true,
      type: String,
    },
    Device: {
      // required: true,
      type: String,
    },
    CUDA: {
      // required: true,
      type: Number,
    },
    Metal: {
      // required: true,
      type: Number,
    },
    OpenCL: {
      // required: true,
      type: Number,
    },
    Vulkan: {
      // required: true,
      type: Number,
    },
  },
  {
    collection: "gpu_Score",
    bufferCommands: false,
    autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
  }
);
const cpu_specs = new mongoose.Schema(
  {
    Manufacturer: {
      // required: true,
      type: String,
    },
    modelName: {
      // required: true,
      type: String,
    },
    launchDate: {
      // required: true,
      type: Number,
    },
    numCores: {
      // required: true,
      type: Number,
    },
    numThreads: {
      // required: true,
      type: Number,
    },
    baseClock: {
      // required: true,
      type: Number,
    },
    boostClock: {
      // required: true,
      type: Number,
    },
  },
  {
    collection: "cpu_Specs",
    bufferCommands: false,
    autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
  }
);
const cpu_benchmark_cinebench = new mongoose.Schema(
  {
    Manufacturer: {
      // required: true,
      type: String,
    },
    cpuName: {
      // required: true,
      type: String,
    },
    singleScore: {
      // required: true,
      type: Number,
    },
    multiScore: {
      // required: true,
      type: Number,
    },
    cores: {
      // required: true,
      type: Number,
    },
    threads: {
      // required: true,
      type: Number,
    },
    baseClock: {
      // required: true,
      type: Number,
    },
    turboClock: {
      // required: true,
      type: Number,
    },
    category: {
      // required: true,
      type: String,
    },
  },
  {
    collection: "cpu_benchmark_Cinebench",
    bufferCommands: false,
    autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
  }
);
const cpu_benchmark_passmark = new mongoose.Schema(
  {
    manufacturer: {
      // required: true,
      type: String,
    },
    cpuName: {
      // required: true,
      type: String,
    },
    price: {
      // required: true,
      type: Number,
    },
    cpuMark: {
      // required: true,
      type: Number,
    },
    cpuValue: {
      // required: true,
      type: Number,
    },
    threadMark: {
      // required: true,
      type: Number,
    },
    threadValue: {
      // required: true,
      type: Number,
    },
    cores: {
      // required: true,
      type: Number,
    },
    testDate: {
      // required: true,
      type: Number,
    },
    socket: {
      // required: true,
      type: String,
    },
    category: {
      // required: true,
      type: String,
    },
  },
  {
    collection: "cpu_benchmark_Passmark",
    bufferCommands: false,
    autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
  }
);
const steam_gpu_popularity = new mongoose.Schema(
  {
    manufacturer: {
      // required: true,
      type: String,
    },
    gpu_product_name: {
      // required: true,
      type: String,
    },
    ["MAR (%)"]: {
      // required: true,
      type: Number,
    },
    ["MAY (%)"]: {
      // required: true,
      type: Number,
    },
    ["JUN (%)"]: {
      // required: true,
      type: Number,
    },
    ["JUL (%)"]: {
      // required: true,
      type: Number,
    },
    ["CHANGE (%)"]: {
      // required: true,
      type: Number,
    },
  },
  {
    collection: "steam_gpu_Popularity",
    bufferCommands: false,
    autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
  }
);

const amazonDataSchema = mongoose.model("amazonData", amazonData);
const gpu_specsSchema = mongoose.model("gpu_specs", gpu_specs);
const gpu_benchmarksSchema = mongoose.model("gpu_benchmarks", gpu_benchmarks);
const gpu_scoreSchema = mongoose.model("gpu_benchmarks", gpu_score);
const cpu_specsSchema = mongoose.model("cpu_specs", cpu_specs);
const cpu_benchmark_cinebenchSchema = mongoose.model(
  "cpu_benchmark_cinebench",
  cpu_benchmark_cinebench
);
const cpu_benchmark_passmarkSchema = mongoose.model(
  "cpu_benchmark_passmark",
  cpu_benchmark_passmark
);
const steam_gpu_popularitySchema = mongoose.model(
  "csteam_gpu_popularity",
  steam_gpu_popularity
);

module.exports = {
  AmazonDataSchema: amazonDataSchema,
  Gpu_specsSchema: gpu_specsSchema,
  Gpu_benchmarksSchema: gpu_benchmarksSchema,
  Gpu_scoreSchema: gpu_scoreSchema,
  Cpu_specsSchema: cpu_specsSchema,
  Cpu_benchmark_cinebenchSchema: cpu_benchmark_cinebenchSchema,
  Cpu_benchmark_passmarkSchema: cpu_benchmark_passmarkSchema,
  Steam_gpu_popularitySchema: steam_gpu_popularitySchema,
};
