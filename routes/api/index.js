const router = require("express").Router();
const savedRoutes = require("./books");

// saved routes
router.use("/books", savedRoutes);

module.exports = router;
