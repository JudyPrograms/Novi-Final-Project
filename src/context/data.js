import avatar from "../assets/avatars/myamoto.png"
import blanco from "../assets/avatars/blanco-avatar.png"

// FRONTEND >> Moet dit in een context in de frontend? Of moet dit ook in de backend?:

export const gameInfo = {
    // 1 coin reward for slice 1, 2, 3 / 2 coins reward for slice 4, 5, 6
    // get 9 extra coins when completing all slices in a subtask
    // complete 3 subtasks with 6 slices each to earn a badge
    coinsPerLevel: 40,
    coinsPerSubtask: 9,
    completedSubtaskBonus: 9,
    subtasksPerBadge: 3,
    levels: [{"Hurricane": 39, "Tornado": 79, "Thunderstorm": 119, "Whirlwind": 159, "Breeze": 199}],
    tasks: [
        {
            taskName: "Paperwork",
            badge: "Paper Slayer",
            subtasks: {
                "organize mail": [
                    "get and open all envelopes",
                    "create four piles: 1:action, 2:wait, 3:store, 4:bin",
                    "throw out 'bin' pile",
                    "put 'store' letters in organizer",
                    "put 'wait' letters on top in organizer",
                    "write 'action' on all other letters",
                ],
                "pay bills": [
                    "get and open all envelopes",
                    "sort out bills only",
                    "pile up other mail and leave for later",
                    "pay one bill",
                    "pay one more bill",
                    "store payed bill letters in organizer",
                ],
                "execute actions": [
                    "get 'action' and 'wait' pile",
                    "if 'wait' changed to 'action': write 'action'",
                    "sort all action letters by action deadline",
                    "execute action with nearest deadline",
                    "execute next action",
                    "store executed action letters in organizer",
                ],
            }
        },
        {
            taskName: "Declutter",
            badge: "Tidy Prince",
            subtasks: {
                "wash clothes": ["slice1", "slice2", "slice3", "slice4"],
                "clean dishes": ["slice1", "slice2", "slice3", "slice4"],
                "tidy space": ["slice1", "slice2", "slice3", "slice4"],
            }
        },
        {
            taskName: "Socialize",
            badge: "Social Hero",
            subtasks: {
                "be attentive": ["slice1", "slice2", "slice3", "slice4"],
                "contact family": ["slice1", "slice2", "slice3", "slice4"],
                "get on time": ["slice1", "slice2", "slice3", "slice4"],
            },
        },
        {
            taskName: "Selfcare",
            badge: "Happy Soul",
            subtasks: {
                "eat well": ["slice1", "slice2", "slice3", "slice4"],
                "get rest": ["slice1", "slice2", "slice3", "slice4"],
                "exercise": ["slice1", "slice2", "slice3", "slice4"],
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
            subName: "The Persistent",
        },
        {
            name: "Toyotomi",
            subName: "The Embracing",
        },
    ],
    startText: ["This is the story of NAME SUBNAME. She lives her life like a hurricane. Her mind is" +
    " full" +
    " of thundery plans and whirly thoughts.", "NAME wonders how she would feel if she could  focus," +
    " prioritize and execute those plans from start to finish...",
        "Will you help her temper the storm?"],
}


// BACKEND:
export const allUsersData = {
    users: [
        {
            username: "Judith",
            email: "judithkats@gmail.com",
            password: "encryptedCode",
            token: "token0 here",
            admin: false,
            avatarImg: avatar,
            avatarName: ["Kusunoki", "The Adventurous"],
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
                    finishDate: "10/31/2021  2:28",
                },
                {
                    mainTask: "Paperwork",
                    subtask: "organize mail",
                    slice: "put 'store' pile in organizer",
                    finishDate: "10/30/2021  2:28",
                },
                {
                    mainTask: "Paperwork",
                    subtask: "organize mail",
                    slice: "throw out 'bin' pile",
                    finishDate: "10/29/2021  2:28",
                },
            ],
            badgeProgress: {
                paperwork: 2.33,
                declutter: 0,
                socialize: 0,
                selfcare: 0.33,
            },
            // (2.25 + 1) * 8 = 26
            coinsTotal: 26,
            level: "Hurricane",
            leaderboardPosition: 110,
        },
        {
            username: "Nieuwe User",
            email: "judith@melkweg.nl",
            password: "encryptedCode",
            token: "token1 here",
            admin: true,
            avatarImg: blanco,
            avatarName: "Anonymous Warrior",
            currentTasks: [],
            completedTasks: [],
            badgeProgress: {
                paperwork: 0,
                declutter: 0,
                socialize: 0,
                selfcare: 0,
            },
            coinsTotal: 0,
            level: "Hurricane",
            leaderboardPosition: 112,
        }
    ]
}
