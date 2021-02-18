const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Post.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(400).json(err));
      },
      update: function(req, res) {
        db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(400).json(err));
      },
}