const currentWeek = document.getElementById("currentWeek");
const nextWeek = document.getElementById("nextWeek");

// Define your schedule here in the format YYYY-MM-DD
const schedule = {

"2024-01-11": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2024-01-12": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2024-01-13": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2024-01-14": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2024-01-15": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
"2024-01-16": {
morning: "Out of Office",
midday: "Holland",
afternoon: "Holland"
},
"2024-01-17": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2024-01-18": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2024-01-19": {
morning: "Holland",
midday: "Holland",
afternoon: "Holland"
},
"2024-01-20": {
morning: "Out of Office",
midday: "Out of Office",
afternoon: "Out of Office"
},
    "2024-01-21": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-01-22": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-01-23": {
    morning: "Remote",
    midday: "Remote",
    afternoon: "Remote"
},
"2024-01-24": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-01-25": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-01-26": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-01-27": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-01-28": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-01-29": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-01-30": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-01-31": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-02-01": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-02-02": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-02-03": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-02-04": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-02-05": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-02-06": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-02-07": {
    morning: "Grand Rapids",
    midday: "Grand Rapids",
    afternoon: "Grand Rapids"
},
"2024-02-08": {
    morning: "Grand Rapids",
    midday: "Grand Rapids",
    afternoon: "Grand Rapids"
},
"2024-02-09": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-02-10": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-02-11": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-02-12": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-02-13": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-02-14": {
    morning: "Atlanta",
    midday: "Atlanta",
    afternoon: "Remote"
},
"2024-02-15": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-02-16": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-02-17": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-02-18": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-02-19": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-02-20": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-02-21": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-02-22": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-02-23": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-02-24": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
    "2024-02-25": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-02-26": {
    morning: "Holland",
    midday: "Holland",
    afternoon: "Holland"
},
"2024-02-27": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-02-28": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-02-29": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-03-01": {
    morning: "Out of Office",
    midday: "Out of Office",
    afternoon: "Out of Office"
},
"2024-03-02": {
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
