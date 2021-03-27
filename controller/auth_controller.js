let database = require("../database");
const passport = require("../middleware/passport");

const { createApi } =  require("unsplash-js");

const unsplash = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "doo3ih36hnM9ilGcEMRF2nFYe0V8TOLw9fJ3wvOWzes"
});

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  registerSubmit: (req, res) => {
    let photo = unsplash.photos.getRandom().json();
    let newUser = {
      id: database.users.length + 1,
      name: `${req.body.firstname} ${req.body.lastname}`,
      email: req.body.email,
      password: req.body.password,
      profile: photo.urls.regular,
      friends: [],
    }
    database.users.push(newUser);
    res.redirect("/login");
  },

  logout: (req, res) => {
    req.logout();
    res.redirect("/login");
  }
};

module.exports = authController;
