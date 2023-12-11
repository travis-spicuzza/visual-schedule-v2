const currentWeek = document.getElementById("currentWeek");
const nextWeek = document.getElementById("nextWeek");

// Define your schedule here in the format YYYY-MM-DD
const schedule = {
    "2023-04-09": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },

    "2023-04-10": {
        morning: "Grand Rapids",
        midday: "Grand Rapids",
        afternoon: "Out of Office"
    },
    "2023-04-11": {
        morning: "Grand Rapids",
        midday: "Grand Rapids",
        afternoon: "Grand Rapids"
    },
    "2023-04-12": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2023-04-13": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-04-14": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-04-15": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-04-16": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-04-17": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-04-18": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-04-19": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2023-04-20": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-04-21": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-04-22": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-04-23": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-04-24": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-04-25": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-04-26": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2023-04-27": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-04-28": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2023-04-29": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-04-30": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-05-01": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-05-02": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-05-03": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2023-05-04": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-05-05": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-05-06": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-05-07": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-05-08": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-05-09": {
        morning: "WFH",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-05-10": {
        morning: "WFH",
        midday: "Grand Rapids",
        afternoon: "Grand Rapids"
    },
    "2023-05-11": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-05-12": {
        morning: "Remote",
        midday: "Remote",
        afternoon: "Remote"
    },
    "2023-05-13": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-05-14": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-05-15": {
        morning: "Summerville",
        midday: "Summerville",
        afternoon: "Summerville"
    },
    "2023-05-16": {
        morning: "Summerville",
        midday: "Summerville",
        afternoon: "Summerville"
    },
    "2023-05-17": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-05-18": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-05-19": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2023-05-20": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-05-21": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-05-22": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-05-23": {
        morning: "Out of Office",
        midday: "Traveling",
        afternoon: "Traveling"
    },
    "2023-05-24": {
        morning: "Atlanta",
        midday: "Atlanta",
        afternoon: "Atlanta"
    },
    "2023-05-25": {
        morning: "Atlanta",
        midday: "Atlanta",
        afternoon: "Atlanta"
    },
    "2023-05-26": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-05-27": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-05-28": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-05-29": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Traveling"
    },
    "2023-05-30": {
        morning: "Atlanta",
        midday: "Atlanta",
        afternoon: "Atlanta"
    },
    "2023-05-31": {
        morning: "Atlanta",
        midday: "Atlanta",
        afternoon: "Atlanta"
    },
    "2023-06-01": {
        morning: "Atlanta",
        midday: "Atlanta",
        afternoon: "Atlanta"
    },
    "2023-06-02": {
        morning: "Remote",
        midday: "Remote",
        afternoon: "Out of Office"
    },
    "2023-06-03": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-06-04": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-06-05": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-06-06": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Grand Rapids"
    },
    "2023-06-07": {
        morning: "Grand Rapids",
        midday: "Grand Rapids",
        afternoon: "Out of Office"
    },
    "2023-06-08": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-06-09": {
        morning: "Remote",
        midday: "Remote",
        afternoon: "Out of Office"
    },
    "2023-06-10": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-06-11": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-06-12": {
        morning: "Grand Rapids",
        midday: "Grand Rapids",
        afternoon: "Grand Rapids"
    },
    "2023-06-13": {
        morning: "Grand Rapids",
        midday: "Grand Rapids",
        afternoon: "Grand Rapids"
    },
    "2023-06-14": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2023-06-15": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-06-16": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-06-17": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-06-18": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-06-19": {
        morning: "Milwaukee",
        midday: "Milwaukee",
        afternoon: "Milwaukee"
    },
    "2023-06-20": {
        morning: "Milwaukee",
        midday: "Milwaukee",
        afternoon: "Milwaukee"
    },
    "2023-06-21": {
        morning: "Milwaukee",
        midday: "Milwaukee",
        afternoon: "Milwaukee"
    },
    "2023-06-22": {
        morning: "Milwaukee",
        midday: "Milwaukee",
        afternoon: "Milwaukee"
    },
    "2023-06-23": {
        morning: "Traveling",
        midday: "Traveling",
        afternoon: "Traveling"
    },
    "2023-06-24": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-06-25": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-06-26": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-06-27": {
        morning: "Grand Rapids",
        midday: "Grand Rapids",
        afternoon: "Grand Rapids"
    },
    "2023-06-28": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2023-06-29": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-06-30": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-07-01": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-07-02": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-07-03": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-07-04": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-07-05": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-07-06": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-07-07": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2023-07-08": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-07-09": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-07-10": {
        morning: "Out of Office",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-07-11": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-07-12": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2023-07-13": {
        morning: "Out of Office",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-07-14": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-07-15": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },

    "2023-07-16": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2023-07-17": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-07-18": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-07-19": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2023-07-20": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-07-21": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2023-07-22": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
"2023-07-23": {
    morning: "Traveling",
    midday: "Traveling",
    afternoon: "Traveling"
},
"2023-07-24": {
    morning: "Milwaukee",
    midday: "Milwaukee",
    afternoon: "Milwaukee"
},
"2023-07-25": {
    morning: "Milwaukee",
    midday: "Milwaukee",
    afternoon: "Milwaukee"
},
"2023-07-26": {
    morning: "Lisle",
    midday: "Lisle",
    afternoon: "Lisle"
},
"2023-07-27": {
    morning: "Lisle",
    midday: "Lisle",
    afternoon: "Lisle"
},
"2023-07-28": {
    morning: "Traveling",
    midday: "Traveling",
    afternoon: "Traveling"
},
"2023-07-29": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-07-30": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-07-31": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-08-01": {
    morning: "Remote",
    midday: "Out of Office",
    afternoon: "Holland"
},
"2023-08-02": {
    morning: "Grand Rapids",
    midday: "Grand Rapids",
    afternoon: "Grand Rapids"
},
"2023-08-03": {
    morning: "Holland",
    midday: "Grand Rapids",
    afternoon: "Grand Rapids"
},
"2023-08-04": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-08-05": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},    
    "2023-08-06": {
morning: "Work From Home",
midday: "Work From Home",
afternoon: "Work From Home"
},
"2023-08-07": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-08-08": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-08-09": {
morning: "Holland",
midday: "Holland",
afternoon: "Out of Office"
},
"2023-08-10": {
morning: "Traveling",
midday: "Traveling",
afternoon: "Traveling"
},
"2023-08-11": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-08-12": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
    "2023-08-13": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-08-14": {
morning: "Salt Lake City",
midday: "Salt Lake City",
afternoon: "Salt Lake City"
},
"2023-08-15": {
morning: "Salt Lake City",
midday: "Salt Lake City",
afternoon: "Salt Lake City"
},
"2023-08-16": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-08-17": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-08-18": {
morning: "Traveling",
midday: "Traveling",
afternoon: "Traveling"
},
"2023-08-19": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
    "2023-08-20": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-08-21": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-08-22": {
morning: "Grand Rapids",
midday: "Grand Rapids",
afternoon: "Grand Rapids"
},
"2023-08-23": {
morning: "Holland",
midday: "Holland",
afternoon: "Out of Office"
},
"2023-08-24": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-08-25": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-08-26": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-08-27": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-08-28": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-08-29": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-08-30": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-08-31": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-01": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-02": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-03": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-04": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-05": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-06": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-07": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-08": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-09": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
    "2023-09-10": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-11": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-12": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-13": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-14": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-15": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-16": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
    "2023-09-17": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-18": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-19": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-20": {
morning: "Vacation",
midday: "Vacation",
afternoon: "Vacation"
},
"2023-09-21": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-09-22": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-09-23": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-09-24": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-09-25": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-09-26": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-09-27": {
morning: "Holland",
midday: "Holland",
afternoon: "Out of Office"
},
"2023-09-28": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-09-29": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-09-30": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-10-01": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-10-02": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-03": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-04": {
morning: "Holland",
midday: "Holland",
afternoon: "Out of Office"
},
"2023-10-05": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-06": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-07": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-10-08": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-10-09": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-10": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-11": {
morning: "Remote",
midday: "Remote",
afternoon: "Out of Office"
},
"2023-10-12": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-13": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-14": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-10-15": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-10-16": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-17": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-18": {
morning: "Holland",
midday: "Holland",
afternoon: "Out of Office"
},
"2023-10-19": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-20": {
morning: "Grand Rapids",
midday: "Grand Rapids",
afternoon: "Out of Office"
},
"2023-10-21": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-10-22": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2023-10-23": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-24": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-25": {
morning: "Holland",
midday: "Holland",
afternoon: "Out of Office"
},
"2023-10-26": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-27": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2023-10-28": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
    "2023-11-05": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-11-06": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-11-07": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-11-08": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-11-09": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-11-10": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-11-11": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-11-12": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-11-13": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-11-14": {
    morning: "Grand Rapids",
    midday: "Grand Rapids",
    afternoon: "Grand Rapids"
},
"2023-11-15": {
    morning: "Grand Rapids",
    midday: "Grand Rapids",
    afternoon: "Out of Office"
},
"2023-11-16": {
    morning: "Grand Rapids",
    midday: "Grand Rapids",
    afternoon: "Grand Rapids"
},
"2023-11-17": {
    morning: "Grand Rapids",
    midday: "Grand Rapids",
    afternoon: "Grand Rapids"
},
"2023-11-18": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-11-19": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-11-20": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-11-21": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-11-22": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Out of Office"
},
"2023-11-23": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-11-24": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-11-25": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
    "2023-11-26": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-11-27": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-11-28": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-11-29": {
    morning: "Grand Rapids",
    midday: "Grand Rapids",
    afternoon: "Grand Rapids"
},
"2023-11-30": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-12-01": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-12-02": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-12-03": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-12-04": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-12-05": {
    morning: "Out of Office",
    midday: "Remote",
    afternoon: "Holland"
},
"2023-12-06": {
    morning: "Holland",
    midday: "Remote",
    afternoon: "Remote"
},
"2023-12-07": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-12-08": {
    morning: "Remote",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-12-09": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-12-10": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2023-12-11": {
    morning: "Out of Office",
    midday: "Remote",
    afternoon: "Remote"
},
"2023-12-12": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-12-13": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-12-14": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-12-15": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2023-12-16": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},



    

    // ... add more dates
};

function createDateElement(dayOfWeek, date, morning, midday, afternoon) {
    const dateEl = document.createElement("div");
    dateEl.classList.add("date-container");
    dateEl.innerHTML = `
    <h3 class="day-of-week">${dayOfWeek}</h3>
    <p class="date-number">${formatDate(date)}</p> <!-- Update this line to use the new class -->
    <div class="time-slot" style="background-color: ${getColor(morning)}">
      <span class="time-title">Morning</span>
      <span class="location">${morning}</span>
    </div>
    <div class="time-slot" style="background-color: ${getColor(midday)}">
      <span class="time-title">Midday</span>
      <span class="location">${midday}</span>
    </div>
    <div class="time-slot" style="background-color: ${getColor(afternoon)}">
      <span class="time-title">Afternoon</span>
      <span class="location">${afternoon}</span>
    </div>
  `;
    return dateEl;
}

function formatDate(date) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();

    const suffix = ["th", "st", "nd", "rd"][day % 10 > 3 ? 0 : (day % 100 - day % 10 !== 10) * day % 10];

    return `${monthNames[monthIndex]} ${day}${suffix}`;
}

function getColor(status) {
    switch (status) {
        case "Holland":
            return "#4caf50"; // Green
        case "Remote":
        case "Grand Rapids":
        case "Texas":
        case "Atlanta":
        case "Summerville":
        case "WFH":
        case "Work From Home":
        case "Milwaukee":
        case "Lisle":
        case "Salt Lake City":
            return "#2196f3"; // Blue
        case "Out of Office":
        case "Vacation":
        case "Traveling":
            return "#f44336"; // Red
        default:
            return "#e0e0e0"; // Grey
    }
}


function displayWeek(weekEl, startDate) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDate = new Date(startDate);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);

    const weekTitle = document.createElement("h2");
    weekTitle.classList.add("week-title");
    weekTitle.textContent = `Week of ${formatDate(startDate)} through ${formatDate(endDate)}`;
    weekEl.appendChild(weekTitle);

    for (let i = 0; i < 7; i++) {
        const dayOfWeek = daysOfWeek[currentDate.getDay()];
        const dateString = currentDate.toISOString().split("T")[0];
        const dateInfo = schedule[dateString] || {
            morning: "",
            midday: "",
            afternoon: ""
        };
        const dateEl = createDateElement(dayOfWeek, currentDate, dateInfo.morning, dateInfo.midday, dateInfo.afternoon);
        weekEl.appendChild(dateEl);
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

function displayCalendar() {
    const today = new Date();
    today.setDate(today.getDate() - today.getDay()); // Go back to the previous Sunday
    displayWeek(currentWeek, today);

    const nextSunday = new Date(today);
    nextSunday.setDate(nextSunday.getDate() + 7);
    displayWeek(nextWeek, nextSunday);
}

displayCalendar();
