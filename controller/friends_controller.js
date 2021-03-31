let database = require("../database");

let friendsController = {
    viewUsers: (req, res) => {
        let myIndex = database.users.findIndex((user) => {return user.id == req.user.id});
        console.log(myIndex);
        let searchUsers = database.users.filter((possibleFriend) => {return (possibleFriend.id != req.user.id)});

        res.render("friends/add-friend", { user: req.user, searchUsers: searchUsers, })
    },
    addFriend: (req, res) => {
        let myIndex = database.users.findIndex((user) => {return user == req.user});
        let newFriend = req.params.id;
        if (newFriend != req.user.id && !database.users[myIndex].friends.includes(newFriend)) {
            database.users[myIndex].friends.push(newFriend);
        }
        res.redirect("/friends");
    }
}

module.exports = friendsController;