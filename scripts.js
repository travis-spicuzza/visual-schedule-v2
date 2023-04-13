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
        case "WFH":
            return "#2196f3"; // Blue
        case "Out of Office":
        case "Vacation":
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
