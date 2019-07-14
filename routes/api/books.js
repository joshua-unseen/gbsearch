// Saved hits our Mongoose API
const router = require("express").Router();
const booksCon = require("../../controllers/booksCon");

// "/api/books"
router.route("/")
  .get(booksCon.findAll)
  .post(booksCon.create);

// "/api/books/:id"
router.route("/:id")
  .delete(booksCon.remove);

module.exports = router;
