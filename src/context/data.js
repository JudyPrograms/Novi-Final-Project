import React from 'react';
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
            subtasks: [
                {
                    "pay bills": [
                        "get and open all envelopes",
                        "sort out bills only",
                        "pile up other mail and leave for later",
                        "pay one bill",
                    ]
                },
                {
                    "organize mail": [
                        "get and open all envelopes",
                        "create four piles: 'action', 'wait', 'store', 'bin'",
                        "throw out 'bin' pile",
                        "put 'store' pile in organizer",
                        "put 'wait' pile on top in organizer",
                        "write 'action' on all action pile letters",
                        "execute one action from action pile",
                    ]
                }]
        },
        {
            taskName: "Declutter",
            badge: "Tidy Prince",
            subtasks: [
                {"wash clothes": ["slice1", "slice2", "slice3", "slice4"]},
                {"clean dishes": ["slice1", "slice2", "slice3", "slice4"]},
                {"tidy closet": ["slice1", "slice2", "slice3", "slice4"]},
                {"tidy room": ["slice1", "slice2", "slice3", "slice4"]}]
        },
        {
            taskName: "Socialize",
            badge: "Scoial Hero",
            subtasks: [
                {"congratulate a friend": []},
                {"subtask2": []},
                {"subtask3": []}],
        },
        {
            taskName: "Selfcare",
            badge: "Happy Soul",
            subtasks: [
                {"shop groceries": []},
                {"subtask2": []},
                {"subtask3": []}]
        },
    ]
}



// BACKEND:
export const userData = {
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
                },
                {
                    mainTask: "Paperwork",
                    subtask: "organize mail",
                    slice: "write 'action' on all action pile letters",
                },
                {
                    mainTask: "Socialize",
                    subtask: "congratulate a friend",
                    slice: "write down 10 names of friends",
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
        }
    ]
}
