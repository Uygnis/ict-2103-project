const router = require("express").Router();

// split up route handling
router.use("/amazon_data", require("./amazon_data"));
router.use("/gpu_specs", require("./gpu_specs"));
router.use("/gpu_score", require("./gpu_score"));
router.use("/gpu_benchmarks", require("./gpu_benchmarks"));
router.use("/steam_gpu_popularity", require("./steam_gpu_popularity"));
router.use("/cpu_specs", require("./cpu_specs"));
router.use("/cpu_benchmark_cinebench", require("./cpu_benchmark_cinebench"));
router.use("/cpu_benchmark_passmark", require("./cpu_benchmark_passmark"));

module.exports = router;
