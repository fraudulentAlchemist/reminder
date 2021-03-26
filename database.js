let Database = {
    users: [
        {
            id: 1,
            name: "Jimmy Smith",
            email: "jimmy123@gmail.com",
            password: "jimmy123!",
        },
        {
            id: 2,
            name: "Johnny Doe",
            email: "johnny123@gmail.com",
            password: "johnny123!",
        },
        {
            id: 3,
            name: "Jonathan Chen",
            email: "jonathan123@gmail.com",
            password: "jonathan123!",
        },
    ],
    reminders: [
        {id: 1, user: 2, title: "abc", description: "abcabc", completed: true},
        {id: 2, user: 3, title: "abc", description: "abcabc", completed: true},
        {id: 3, user: 1, title: "Gym Membership", description: "Gym mebership renewal deadline.", completed: false},
        {id: 4, user: 2, title: "abc", description: "abcabc", completed: true},
        {id: 5, user: 2, title: "abc", description: "abcabc", completed: false},
        {id: 6, user: 1, title: "Checkup", description: "Biannual checkup appointment with Dr.", completed: false},
        {id: 7, user: 1, title: "abc", description: "abcabc", completed: true},
        {id: 8, user: 3, title: "abc", description: "abcabc", completed: true},
        {id: 9, user: 1, title: "abc", description: "abcabc", completed: false},
        {id: 10, user: 2, title: "abc", description: "abcabc", completed: true},
        {id: 11, user: 2, title: "abc", description: "abcabc", completed: false},
        {id: 12, user: 3, title: "abc", description: "abcabc", completed: false},
    ]
};

module.exports = Database;