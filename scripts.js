const currentWeek = document.getElementById("currentWeek");
const nextWeek = document.getElementById("nextWeek");
const thirdWeek = document.getElementById("thirdWeek");

// Define your schedule here in the format YYYY-MM-DD
const schedule = {


"2024-09-29": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-09-30": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-01": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-10-02": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-10-03": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-10-04": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-10-05": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-10-06": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-10-07": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-08": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-10-09": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-10-10": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-11": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-12": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-10-13": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-10-14": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-15": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-16": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-17": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-18": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Out of Office"
},
"2024-10-19": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
    "2024-10-20": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-10-21": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-22": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-23": {
  morning: "Work From Home",
  midday: "Work From Home",
  afternoon: "Out of Office"
},
"2024-10-24": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-25": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-26": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-10-27": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-10-28": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-29": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-10-30": {
  morning: "Holland",
  midday: "Out of Office",
  afternoon: "Work From Home"
},
"2024-10-31": {
  morning: "Grand Rapids",
  midday: "Grand Rapids",
  afternoon: "Out of Office"
},
"2024-11-01": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-11-02": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-11-03": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-11-04": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-11-05": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-11-06": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-11-07": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Out of Office"
},
"2024-11-08": {
  morning: "Grand Rapids",
  midday: "Grand Rapids",
  afternoon: "Grand Rapids"
},
"2024-11-09": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-11-10": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-11-11": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-11-12": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-11-13": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-11-14": {
  morning: "Holland",
  midday: "Holland",
  afternoon: "Holland"
},
"2024-11-15": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-11-16": {
  morning: "Out of Office",
  midday: "Out of Office",
  afternoon: "Out of Office"
},
"2024-11-17": {
  "morning": "Out of Office",
  "midday": "Out of Office",
  "afternoon": "Out of Office"
},
"2024-11-18": {
  "morning": "Holland",
  "midday": "Holland",
  "afternoon": "Holland"
},
"2024-11-19": {
  "morning": "Out of Office",
  "midday": "Out of Office",
  "afternoon": "Out of Office"
},
"2024-11-20": {
  "morning": "Out of Office",
  "midday": "Out of Office",
  "afternoon": "Out of Office"
},
"2024-11-21": {
  "morning": "Out of Office",
  "midday": "Out of Office",
  "afternoon": "Out of Office"
},
"2024-11-22": {
  "morning": "Grand Rapids",
  "midday": "Grand Rapids",
  "afternoon": "Grand Rapids"
},
"2024-11-23": {
  "morning": "Out of Office",
  "midday": "Out of Office",
  "afternoon": "Out of Office"
},
"2024-11-24": {
  "morning": "Out of Office",
  "midday": "Out of Office",
  "afternoon": "Out of Office"
},
"2024-11-25": {
  "morning": "Grand Rapids",
  "midday": "Grand Rapids",
  "afternoon": "Grand Rapids"
},
"2024-11-26": {
  "morning": "Holland",
  "midday": "Holland",
  "afternoon": "Holland"
},
"2024-11-27": {
  "morning": "Holland",
  "midday": "Holland",
  "afternoon": "Holland"
},
"2024-11-28": {
  "morning": "Out of Office",
  "midday": "Out of Office",
  "afternoon": "Out of Office"
},
"2024-11-29": {
  "morning": "Out of Office",
  "midday": "Out of Office",
  "afternoon": "Out of Office"
},
"2024-11-30": {
  "morning": "Out of Office",
  "midday": "Out of Office",
  "afternoon": "Out of Office"
},
"2024-12-01": {
  "morning": "Out of Office",
  "midday": "Out of Office",
  "afternoon": "Out of Office"
},
"2024-12-02": {
  "morning": "Holland",
  "midday": "Holland",
  "afternoon": "Holland"
},
"2024-12-03": {
  "morning": "Holland",
  "midday": "Holland",
  "afternoon": "Holland"
},
"2024-12-04": {
  "morning": "Holland",
  "midday": "Holland",
  "afternoon": "Holland"
},
"2024-12-05": {
  "morning": "Holland",
  "midday": "Holland",
  "afternoon": "Holland"
},
"2024-12-06": {
  "morning": "Holland",
  "midday": "Holland",
  "afternoon": "Holland"
},
"2024-12-07": {
  "morning": "Out of Office",
  "midday": "Out of Office",
  "afternoon": "Out of Office"
},
"2024-12-08": {
  "morning": "Out of Office",
  "midday": "Out of Office",
  "afternoon": "Out of Office"
},
"2024-12-09": {
  "morning": "Holland",
  "midday": "Holland",
  "afternoon": "Holland"
},
"2024-12-10": {
  "morning": "Holland",
  "midday": "Holland",
  "afternoon": "Holland"
},
"2024-12-11": {
  "morning": "Holland",
  "midday": "Holland",
  "afternoon": "Holland"
},
"2024-12-12": {
  "morning": "Holland",
  "midday": "Holland",
  "afternoon": "Holland"
},
"2024-12-13": {
  "morning": "Holland",
  "midday": "Holland",
  "afternoon": "Holland"
},
"2024-12-14": {
  "morning": "Out of Office",
  "midday": "Out of Office",
  "afternoon": "Out of Office"
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

    const thirdSunday = new Date(nextSunday);
    thirdSunday.setDate(thirdSunday.getDate() + 7);
    displayWeek(thirdWeek, thirdSunday);
}

displayCalendar();
