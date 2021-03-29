let database = require("../database");
const passport = require("../middleware/passport");

const { createApi } =  require("unsplash-js");
const fetch = require("node-fetch");

const unsplash = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "doo3ih36hnM9ilGcEMRF2nFYe0V8TOLw9fJ3wvOWzes",
  fetch: fetch,
});

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  registerSubmit: (req, res) => {
    let photo = unsplash.photos.getRandom({});
    let newUser = {
      id: database.users.length + 1,
      name: `${req.body.firstname} ${req.body.lastname}`,
      email: req.body.email,
      password: req.body.password,
      profile: photo.urls.regular.json(),
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
