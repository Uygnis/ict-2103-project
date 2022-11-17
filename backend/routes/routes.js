const router = require("express").Router();

// split up route handling
router.use("/amazon_data", require("./amazon_data"));
router.use("/gpu_specs", require("./gpu_specs"));

module.exports = router;
