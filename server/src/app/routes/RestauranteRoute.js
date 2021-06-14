module.exports = app => {
    const restaurantes = require("../controllers/RestauranteController");
  
    // Retrieve all restaurantes
    app.get("/restaurantes", restaurantes.findAll);
  
    // Retrieve a single restaurante with restauranteId
    app.get("/restaurantes/:restauranteId", restaurantes.findOne);
  };