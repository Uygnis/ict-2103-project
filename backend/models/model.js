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

const amazonDataSchema = mongoose.model("amazonData", amazonData);
const gpu_specsSchema = mongoose.model("gpu_specs", gpu_specs);

module.exports = {
  AmazonDataSchema: amazonDataSchema,
  Gpu_specsSchema: gpu_specsSchema,
};
