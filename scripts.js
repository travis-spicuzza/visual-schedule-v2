const currentWeek = document.getElementById("currentWeek");
const nextWeek = document.getElementById("nextWeek");

// Define your schedule here in the format YYYY-MM-DD
const schedule = {


    "2024-04-11": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-04-12": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-04-13": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2024-04-14": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2024-04-15": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-04-16": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-04-17": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2024-04-18": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-04-19": {
        morning: "Holland",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2024-04-20": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2024-04-21": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-04-22": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-04-23": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-04-24": {
        morning: "Grand Rapids",
        midday: "Grand Rapids",
        afternoon: "Out of Office"
    },
    "2024-04-25": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2024-04-26": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2024-04-27": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },

    "2024-04-28": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2024-04-29": {
        morning: "Grand Rapids",
        midday: "Grand Rapids",
        afternoon: "Grand Rapids"
    },
    "2024-04-30": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-05-01": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2024-05-02": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-05-03": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-05-04": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2024-05-05": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2024-05-06": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-05-07": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-05-08": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Out of Office"
    },
    "2024-05-09": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-05-10": {
        morning: "Holland",
        midday: "Holland",
        afternoon: "Holland"
    },
    "2024-05-11": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
    "2024-05-12": {
        morning: "Out of Office",
        midday: "Out of Office",
        afternoon: "Out of Office"
    },
      "2024-05-13": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
  },
  "2024-05-14": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
  },
  "2024-05-15": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
  },
  "2024-05-16": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
  },
  "2024-05-17": {
    morning: "Out of Office",
    midday: "Holland",
    afternoon: "Holland"
  },
  "2024-05-18": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
  },
  "2024-05-19": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
  },
  "2024-05-20": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
  },
  "2024-05-21": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
  },
  "2024-05-22": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Out of Office"
  },
  "2024-05-23": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
  },
  "2024-05-24": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
  },
  "2024-05-25": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
  },
  "2024-05-26": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
  },
  "2024-05-27": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
  },
  "2024-05-28": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
  },
  "2024-05-29": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Holland"
  },
  "2024-05-30": {
    morning: "Out of Office",
    midday: "Holland",
    afternoon: "Holland"
  },
  "2024-05-31": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
  },
  "2024-06-01": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
  },
  "2024-06-02": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
  },
  "2024-06-03": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
  },
  "2024-06-04": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
  },
  "2024-06-05": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Out of Office"
  },
  "2024-06-06": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
  },
  "2024-06-07": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
  },
  "2024-06-08": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
  },
  "2024-06-09": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
  }
    

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
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
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
