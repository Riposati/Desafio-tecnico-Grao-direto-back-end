const Restaurante = require("../models/RestauranteDAO");

exports.findAll = (req, res) => {
   Restaurante.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
    Restaurante.findById(req.params.restauranteId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found restaurante with id ${req.params.restauranteId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving restaurante with id " + req.params.restauranteId
          });
        }
      } else res.send(data);
    });
  };
