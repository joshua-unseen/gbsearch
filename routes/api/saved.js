// Saved hits our Mongoose API
const router = require("express").Router();
const booksCon = require("../../controllers/booksCon");

// "/api/saved"
router.route("/")
  .get(booksCon.findAll)
  .post(booksCon.create);

// "/api/saved/:id"
router
  .route("/:id")
  .get(booksCon.findById)
  .put(booksCon.update)
  .delete(booksCon.remove);

module.exports = router;
