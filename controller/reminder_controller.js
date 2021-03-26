let database = require("../database");
const userModel = require("../models/userModel");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { user: req.user, reminders: database.reminders.filter((reminder) => {reminder.user == req.user.id}) });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.reminders.find(function (reminder) {
      return reminder.id == reminderToFind && reminder.user == req.user.id;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { user: req.user, reminders: database.reminders.filter((reminder) => {reminder.user == req.user.id}) });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.reminders.length + 1,
      user: req.user.id,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.reminders.find(function (reminder) {
      return reminder.id == reminderToFind && reminder.user == req.user.id;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    let reminderToUpdate = req.params.id;
    let searchResult = database.reminders.find(function (reminder) {
      return reminder.id == reminderToUpdate;
    });
    if (searchResult != undefined) {
      let upd = database.reminders.indexOf(searchResult);
      let reminder = {
        id: reminderToUpdate,
        user: req.user.id,
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      };
      database.reminders.splice(upd, 1, reminder);
    };
    res.redirect("/reminders");
  },

  delete: (req, res) => {
    let reminderToDelete = req.params.id;
    let searchResult = database.reminders.find(function (reminder) {
      return reminder.id == reminderToDelete && reminder.user == req.user.id;
    });
    if (searchResult != undefined) {
      let del = database.reminders.indexOf(searchResult);

      // Remove from database
      database.reminders.splice(del, 1);

      // Decrement reminder IDs
      database.reminders.forEach((reminder,index) => {
        if (index >= del) {
          database.reminders.reminder.id--;
        }
      });
    };
    res.redirect("/reminders");
  },
};

module.exports = remindersController;
