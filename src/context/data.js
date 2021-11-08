import avatar from "../assets/avatars/kusunoki.png"

// FRONTEND >> Moet dit in een context in de frontend? Of moet dit ook in de backend?:

export const gameInfo = {
    // 8 coins * 3 tasks = 24 coins per badge
    // 40 coins / 8 coins per task = 5 tasks per level
    coinsPerLevel: 40,
    coinsPerSubtask: 8,
    subtasksPerBadge: 3,
    levels: [{"Hurricane": 39, "Tornado": 79, "Thunderstorm": 119, "Whirlwind": 159, "Breeze": 199}],
    tasks: [
        {
            taskName: "Paperwork",
            badge: "Paper Slayer",
            subtasks: {
                "pay bills": [
                    "get and open all envelopes",
                    "sort out bills only",
                    "pile up other mail and leave for later",
                    "pay one bill",
                ],
                "organize mail": [
                    "get and open all envelopes",
                    "create four piles: 1:action, 2:wait, 3:store, 4:bin",
                    "throw out 'bin' pile",
                    "put 'store' pile in organizer",
                    "put 'wait' pile on top in organizer",
                    "write 'action' on all action pile letters",
                    "execute one action from action pile",
                ],
            }
        },
        {
            taskName: "Declutter",
            badge: "Tidy Prince",
            subtasks: {
                "wash clothes": ["slice1", "slice2", "slice3", "slice4"],
                "clean dishes": ["slice1", "slice2", "slice3", "slice4"],
                "tidy closet": ["slice1", "slice2", "slice3", "slice4"],
                "tidy room": ["slice1", "slice2", "slice3", "slice4"],
            }
        },
        {
            taskName: "Socialize",
            badge: "Social Hero",
            subtasks: {
                "bond with friends": ["slice1", "slice2", "slice3", "slice4"],
                "subtask2": ["slice1", "slice2", "slice3", "slice4"],
                "subtask3": ["slice1", "slice2", "slice3", "slice4"],
            },
        },
        {
            taskName: "Selfcare",
            badge: "Happy Soul",
            subtasks: {
                "shop groceries": ["slice1", "slice2", "slice3", "slice4"],
                "subtask2": ["slice1", "slice2", "slice3", "slice4"],
                "subtask3": ["slice1", "slice2", "slice3", "slice4"],
            }
        },
    ],
    avatars: [
        {
            name: "Kusunoki",
            subName: "The Adventurous",
        },
        {
            name: "Myamoto",
            subName: "The Inspirator",
        },
        {
            name: "Takeda",
            subName: "The Persistant",
        },
        {
            name: "Toyotomi",
            subName: "The Embracing",
        },
    ],
    startText: ["This is the story of NAME SUBNAME. She lives her life like a hurricane. Her mind is" +
    " full" +
    " of thundery plans and whirly thoughts.", "NAME wonders how she would feel if she could  focus," +
    " priorotize and execute those plans from start to finish...",
        "Will you help her temper the storm?"],
}


// BACKEND:
export const allUsersData = {
    users: [
        {
            username: "Judith",
            email: "judithkats@gmail.com",
            password: "encryptedCode",
            avatar: avatar,
            currentTasks: [
                {
                    mainTask: "Paperwork",
                    subtask: "pay bills",
                    slice: "get and open all envelopes",
                    startDate: "11/1/2021 2:28",
                },
                {
                    mainTask: "Paperwork",
                    subtask: "organize mail",
                    slice: "write 'action' on all action pile letters",
                    startDate: "11/2/2021  2:28",
                },
                {
                    mainTask: "Socialize",
                    subtask: "congratulate a friend",
                    slice: "write down 10 names of friends",
                    startDate: "11/3/2021  2:28",
                }
            ],
            completedTasks: [
                {
                    mainTask: "Paperwork",
                    subtask: "organize mail",
                    slice: "put 'wait' pile on top in organizer",
                },
                {
                    mainTask: "Paperwork",
                    subtask: "organize mail",
                    slice: "put 'store' pile in organizer",
                },
                {
                    mainTask: "Paperwork",
                    subtask: "organize mail",
                    slice: "throw out 'bin' pile",
                },
            ],
            badgeProgress: {
                tidyPrince: 0.8,
                socialHero: 0,
                paperSlayer: 0,
                happySoul: 0.3,
            },
            // (2.25 + 1) * 8 = 26
            coinsTotal: 26,
            level: "Hurricane",
            leaderboardPosition: 110,
        },
        {
            username: "Nieuwe User",
            email: "judithkats@gmail.com",
            password: "encryptedCode",
            avatar: avatar,
            currentTasks: [],
            completedTasks: [],
            badgeProgress: {
                tidyPrince: 0,
                socialHero: 0,
                paperSlayer: 0,
                happySoul: 0,
            },
            coinsTotal: 0,
            level: "Hurricane",
            leaderboardPosition: 112,
        }
    ]
}
