let database = require("../database");
const passport = require("../middleware/passport");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    passport.authenticate("local", {
      successRedirect: "/reminders",
      failureRedirect: "/login",
    })
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
