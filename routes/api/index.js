const router = require("express").Router();
const savedRoutes = require("./saved");

// saved routes
router.use("/saved", savedRoutes);

module.exports = router;
