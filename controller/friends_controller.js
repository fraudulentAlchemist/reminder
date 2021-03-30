let database = require("../database");

let friendsController = {
    viewUsers: (req, res) => {
        let searchUsers = database.users.filter((possibleFriend) => {return !req.user.friends.includes(possibleFriend.id) && possibleFriend.id != req.user.id});
        res.render("friends/add-friend", { user: req.user, searchUsers: searchUsers, })
    },
    addFriend: (req, res) => {
        let newFriend = req.params.id;
        if (newFriend != req.user.id && !req.user.friends.includes(newFriend)) {
            database.user[user].friends.push(newFriend);
        }
        res.redirect("/addFriend");
    }
}

module.exports = friendsController;