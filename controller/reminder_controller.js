let database = require("../database");
const userModel = require("../models/userModel");
const dateFormat = require("dateformat");

let remindersController = {
  list: (req, res) => {
    console.log(req.user.profile);
    res.render("reminder/index", { user: req.user, reminders: database.reminders.filter((reminder) => {return reminder.user == req.user.id}), dateFormat: dateFormat });
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
      res.render("reminder/single-reminder", { user: req.user, reminderItem: searchResult, dateFormat: dateFormat });
    } else {
      res.render("reminder/index", { user: req.user, reminders: database.reminders.filter((reminder) => {return reminder.user == req.user.id}), dateFormat: dateFormat });
    }
  },

  create: (req, res) => {
    let subtaskString = req.body.subtasks.trim();
    let subtasks = subtaskString.split(/[\.,;]+/g);
    subtasks.forEach((subtask) => {subtask = subtask.trim()});

    let tagString = req.body.tags.trim();
    let tags = tagString.split(/[,;\s]+/g);

    let reminder = {
      id: database.reminders.length + 1,
      user: req.user.id,
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      tags: tags,
      subtasks: subtasks,
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
      let subtaskString = req.body.subtasks.trim();
      let subtasks = subtaskString.split(/[\.,;]+/g);
      subtasks.forEach((subtask) => {subtask = subtask.trim()});

      let tagString = req.body.tags.trim();
      let tags = tagString.split(/[,;\s]+/g);

      let reminder = {
        id: Number(reminderToUpdate),
        user: req.user.id,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        tags: tags,
        subtasks: subtasks,
        completed: Boolean(req.body.completed),
      };

      database.reminders.splice(upd, 1, reminder);
      console.log(`New completed status: ${req.body.completed}`);
      console.log("New reminder details:");
      console.log(reminder);
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
        console.log(`Reminder ID: ${reminder.id}`);
        if (index >= del) {
          --database.reminders[index].id;
        }
      });
    };
    res.redirect("/reminders");
  },
};

module.exports = remindersController;
