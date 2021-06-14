const sql = require("./db.js");
var md5 = require('md5');

const User = function() {};

User.getUser = async function (req, res, next) {
  try {
      
      let { email, senha } = req.body;

      console.log(req.body)

      const hashed_password = md5(senha.toString())

      sql.query(`SELECT * FROM usuario WHERE email = ? AND senha = ?`, [email, hashed_password],function(err, result){
        if (err) {
          console.log("error: ", err);
          res.send({ status: 0, resposta: err });
          return;
        }
    
        console.log("Restaurantes: ", res);
        res.send({ status: 1, resposta: result.length })
    
      });
  } 
  catch (err) {
      console.log("error: ", err);
    }
    
  }

  module.exports = User;

