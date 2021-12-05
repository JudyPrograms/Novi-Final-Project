import blanco from "../assets/avatars/blanco-avatar.png"
import kusunoki from "../assets/avatars/kusunoki.png";
import myamoto from "../assets/avatars/myamoto.png";
import takeda from "../assets/avatars/takeda.png";
import toyotomi from "../assets/avatars/toyotomi.png";

let date = new Date()

export const gameInfo = {
    // 1 coin reward for slice 1, 2, 3 / 2 coins reward for slice 4, 5, 6
    // get 9 extra coins when completing all slices in a subtask
    // complete 3 subtasks with 6 slices each to earn a badge
    coinsPerLevel: 40,
    coinsPerSubtask: 9,
    completedSubtaskBonus: 9,
    subtasksPerBadge: 3,
    levels: [
        {levelName: "Hurricane", maxPoints: 40},
        {levelName: "Tornado", maxPoints: 80},
        {levelName: "Thunderstorm", maxPoints: 120},
        {levelName: "Whirlwind", maxPoints: 160},
        {levelName: "Breeze", maxPoints: 200}],
    tasks: [
        {
            taskName: "Paperwork",
            badge: "Paper Slayer",
            subtasks: {
                "organize mail": [
                    "get and open all envelopes",
                    "create four piles: action / wait / store / trash",
                    "throw out 'trash' pile",
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
                "wash clothes": ["D1_slice1", "slice2", "slice3", "slice4"],
                "clean dishes": ["D2_slice1", "slice2", "slice3", "slice4"],
                "tidy space": ["D3_slice1", "slice2", "slice3", "slice4"],
            }
        },
        {
            taskName: "Socialize",
            badge: "Social Hero",
            subtasks: {
                "be attentive": ["S1_slice1", "slice2", "slice3", "slice4"],
                "contact family": ["S2_slice1", "slice2", "slice3", "slice4"],
                "get on time": ["S3_slice1", "slice2", "slice3", "slice4"],
            },
        },
        {
            taskName: "Selfcare",
            badge: "Happy Soul",
            subtasks: {
                "eat well": ["C1_slice1", "slice2", "slice3", "slice4"],
                "get rest": ["C2_slice1", "slice2", "slice3", "slice4"],
                "exercise": ["C3_slice1", "slice2", "slice3", "slice4"],
            }
        },
    ],
    avatars: [
        {
            name: "Kusunoki",
            subName: "the Adventurous",
            image: kusunoki,
        },
        {
            name: "Myamoto",
            subName: "the Inspirator",
            image: myamoto,
        },
        {
            name: "Takeda",
            subName: "the Persistent",
            image: takeda,
        },
        {
            name: "Toyotomi",
            subName: "the Embracing",
            image: toyotomi,
        },
    ],
    startText: ["This is the story of NAME SUBNAME. She lives her life like a hurricane. Her mind is" +
    " full" +
    " of thundery plans and whirly thoughts.", "NAME wonders how she would feel if she could focus" +
    " and execute her plans from start to finish...",
        "Will you help her temper the storm?"],
}

export const allUsersData = {
    users: [
        {
            username: "Judith",
            email: "judithkats@gmail.com",
            password: "encryptedCode",
            token: "token0 here",
            admin: false,
            avatarImg: gameInfo.avatars[0].image,
            avatarName: [gameInfo.avatars[0].name, gameInfo.avatars[0].subName],
            currentTasks: [
                {
                    mainTask: "Paperwork",
                    subtask: "pay bills",
                    slice: "get and open all envelopes",
                    startDate: date.setDate(date.getDate()-2),
                },
                {
                    mainTask: "Paperwork",
                    subtask: "organize mail",
                    slice: "write 'action' on all action pile letters",
                    startDate: date.setDate(date.getDate()+1),
                },
                {
                    mainTask: "Socialize",
                    subtask: "congratulate a friend",
                    slice: "write down 10 names of friends",
                    startDate: date.setDate(date.getDate()+1),
                }
            ],
            completedTasks: [
                {
                    mainTask: "Paperwork",
                    subtask: "organize mail",
                    slice: "put 'wait' pile on top in organizer",
                    finishDate: "10/31/2021  2:28",
                    coins: 2,
                },
                {
                    mainTask: "Paperwork",
                    subtask: "organize mail",
                    slice: "put 'store' pile in organizer",
                    finishDate: "10/30/2021  2:28",
                    coins: 3,
                },
                {
                    mainTask: "Paperwork",
                    subtask: "organize mail",
                    slice: "throw out 'bin' pile",
                    finishDate: "10/29/2021  2:28",
                    coins: 2,
                },
            ],
            badgeProgress: {
                // 3 subtasks = 1 badge
                paperwork: 2.33,
                declutter: 0,
                socialize: 0,
                selfcare: 0.33,
            },
            coinsTotal: 97,
            level: "Hurricane",
            leaderboardPosition: 110,
        },
        {
            username: "Nieuwe User",
            email: "judith@melkweg.nl",
            password: "encryptedCode",
            token: "token1 here",
            admin: false,
            avatarImg: blanco,
            avatarName: ["Anonymous", "Warrior"],
            currentTasks: [{
                mainTask: "Paperwork",
                subtask: "organize mail",
                slice: "get and open all envelopes",
                startDate: new Date(),
            },],
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
        },
        {
            username: "Administrator",
            email: "hello@judyprograms.io",
            password: "encryptedCode",
            token: "token1 here",
            admin: true,
            avatarImg: myamoto,
            avatarName: ["Administrator", "Warrior"],
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
            leaderboardPosition: 0,
        }
    ]
}
