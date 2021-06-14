const User = require("../models/UserDAO");

exports.getUser = (req, res) => {

  try {
     User.getUser(req, res)
  }
  catch (err) {
    console.log("error: ", err);
  }
};

