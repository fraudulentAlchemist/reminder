const dateFormat = require("dateformat");

const { createApi } =  require("unsplash-js");
const fetch = require("node-fetch");

const unsplash = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "doo3ih36hnM9ilGcEMRF2nFYe0V8TOLw9fJ3wvOWzes",
  fetch: fetch,
});

let Database = {
    users: [
        {
            id: 1,
            name: "Jimmy Smith",
            email: "jimmy123@gmail.com",
            password: "jimmy123!",
            profile: unsplash.photos.getRandom({count: 1}),
            friends: [ 3, ],
        },
        {
            id: 2,
            name: "Johnny Doe",
            email: "johnny123@gmail.com",
            password: "johnny123!",
            profile: unsplash.photos.getRandom({count: 1}),
            friends: [],
        },
        {
            id: 3,
            name: "Jonathan Chen",
            email: "jonathan123@gmail.com",
            password: "jonathan123!",
            profile: unsplash.photos.getRandom({count: 1}),
            friends: [ 1, 2, ],
        },
    ],
    reminders: [
        {
            id: 1,
            user: 2,
            title: "Work",
            description: "abcabc",
            date: "2021-03-31T23:59",
            subtasks: [ "Subtask one", "Subtask two", "Subtask three", ],
            tags: [ "tag1", "tag2", "tag3", "tag4", "tag5", ],
            completed: true,
        },
        {
            id: 2,
            user: 3,
            title: "abc",
            description: "abcabc",
            date: "2021-03-31T23:59",
            subtasks: [ "Subtask one", "Subtask two", "Subtask three", ],
            tags: [ "tag1", "tag2", "tag3", "tag4", "tag5", ],
            completed: true,
        },
        {
            id: 3,
            user: 1,
            title: "Gym Membership",
            description: "Gym mebership renewal deadline.",
            date: "2021-03-30T16:00",
            subtasks: ["Check schedule for opening", ],
            tags: [ "workout", "gym", "due", "membership", ],
            completed: false,
        },
        {
            id: 4,
            user: 2,
            title: "abc",
            description: "abcabc",
            date: "2021-03-31T23:59",
            subtasks: [ "Subtask one", "Subtask two", "Subtask three", ],
            tags: [ "tag1", "tag2", "tag3", "tag4", "tag5", ],
            completed: true,
        },
        {
            id: 5,
            user: 1,
            title: "Checkup",
            description: "Biannual checkup appointment with Dr.",
            date: "2021-04-12T09:00",
            subtasks: [ "Subtask one", "Subtask two", "Subtask three", ],
            tags: [ "doctor", "checkup", "ihateneedles", ],
            completed: false,
        },
        {
            id: 6,
            user: 1,
            title: "abc",
            description: "abcabc",
            date: "2021-03-31T23:59",
            subtasks: [ "Subtask one", "Subtask two", "Subtask three", ],
            tags: [ "tag1", "tag2", "tag3", "tag4", "tag5", ],
            completed: true,
        },
        {
            id: 7,
            user: 3,
            title: "abc",
            description: "abcabc",
            date: "2021-03-31T23:59",
            subtasks: [ "Subtask one", "Subtask two", "Subtask three", ],
            tags: [ "tag1", "tag2", "tag3", "tag4", "tag5", ],
            completed: true,
        },
        {
            id: 8,
            user: 2,
            title: "abc",
            description: "abcabc",
            date: "2021-03-31T23:59",
            subtasks: [ "Subtask one", "Subtask two", "Subtask three", ],
            tags: [ "tag1", "tag2", "tag3", "tag4", "tag5", ],
            completed: true,
        },
        {
            id: 9,
            user: 2,
            title: "abc",
            description: "abcabc",
            date: "2021-03-31T23:59",
            subtasks: [ "Subtask one", "Subtask two", "Subtask three", ],
            tags: [ "tag1", "tag2", "tag3", "tag4", "tag5", ],
            completed: false,
        },
    ]
};

module.exports = Database;