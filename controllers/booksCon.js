// Controller
// Hook our ORM
const db = require("../models");

// controller methods
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbQRes => res.json(dbQRes))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbQRes => res.json(dbQRes))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // console.log(req.body);
    db.Book
      .create(req.body)
      .then(dbQRes => res.json(dbQRes.googleID))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbQRes => res.json(dbQRes))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbQRes => dbQRes.remove())
      .then(dbQRes => res.json(dbQRes.googleID))
      .catch(err => res.status(422).json(err));
  }
};
