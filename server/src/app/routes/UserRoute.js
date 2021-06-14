module.exports = app => {
    const user = require("../controllers/UserController");  
    app.post('/login', user.getUser);
  };