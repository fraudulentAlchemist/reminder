let database = require("../database");
const passport = require("../middleware/passport");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  registerSubmit: (req, res) => {
    res.redirect("/login");
  },

  logout: (req, res) => {
    req.logout();
    res.redirect("/login");
  }
};

module.exports = authController;
