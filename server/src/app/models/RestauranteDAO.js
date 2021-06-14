const sql = require("./db.js");

const Restaurante = function() {};

Restaurante.getAll = result => {
    sql.query("SELECT * FROM restaurante", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      //console.log("Restaurantes: ", res);
      result(null, res);
    });
  };

  Restaurante.findById = (restauranteId, result) => {
    sql.query(`SELECT * FROM restaurante WHERE idrestaurante = ${restauranteId}`, (err, res) => {
      // SELECT * FROM restaurante inner join prato on (prato.restaurante_idrestaurante = restaurante.idrestaurante) WHERE idrestaurante = ${restauranteId}`
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        //console.log("found restaurante: ", res[0]);

        sql.query(`SELECT * FROM prato WHERE restaurante_idrestaurante = ${restauranteId}`, (err2, res2) => {
          if (err2) {
            console.log("error: ", err2);
            return;
          }
      
          if (res2.length) {
            //console.log("found restaurante: ", res[0]);
              res[0].pratos = res2 
              result(null, res[0]);
              //console.log(res[0])
          }else{
            result(null, res[0]);
          }
      
        });
        
        return;
      }
      // not found restaurante with the id
      result({ kind: "not_found" }, null);
    });
  };

  module.exports = Restaurante;