const router = require("express").Router();

// split up route handling
router.use("/amazon_data", require("./amazon_data"));
router.use("/gpu_specs", require("./gpu_specs"));
router.use("/gpu_score", require("./gpu_score"));
router.use("/gpu_benchmarks", require("./gpu_benchmarks"));
router.use("/cpu_specs", require("./cpu_specs"));
router.use("/cpu_benchmark_passmark", require("./cpu_benchmark_passmark"));
router.use("/company_data", require("./company_data"));
router.use("/company_cpu", require("./company_cpu"));
router.use("/company_gpu", require("./company_gpu"));

module.exports = router;
