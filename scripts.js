const week1 = document.getElementById("week1");
const week2 = document.getElementById("week2");

const events = {
    "2023-04-02": {
        "Morning": "Gym",
        "Midday": "Lunch with friends",
        "Afternoon": "Work on project"
    },
    "2023-04-03": {
        "Morning": "Meeting",
        "Midday": "Lunch break",
        "Afternoon": "Complete tasks"
    },
    "2023-04-02": {
        "Morning": "Meeting",
        "Midday": "Lunch break",
        "Afternoon": "Complete tasks"
    },
    "2023-04-09": {
        "Morning": "Meeting",
        "Midday": "Lunch break",
        "Afternoon": "Complete tasks"
    },
    "2023-03-26": {
        "Morning": "Out of Office",
        "Midday": "Out of Office",
        "Afternoon": "Out of Office"
    },
    "2023-03-27": {
        "Morning": "Holland",
        "Midday": "Holland",
        "Afternoon": "Out of Office"
    },
    "2023-03-28": {
        "Morning": "Holland",
        "Midday": "Holland",
        "Afternoon": "Holland"
    },
      "2023-03-29": {
        "Morning": "Holland",
        "Midday": "Holland",
        "Afternoon": "Holland"
    },
      "2023-03-30": {
        "Morning": "Holland",
        "Midday": "Holland",
        "Afternoon": "Holland"
    },
      "2023-03-31": {
        "Morning": "Holland",
        "Midday": "Holland",
        "Afternoon": "Holland"
    },
      "2023-04-01": {
        "Morning": "Out of Office",
        "Midday": "Out of Office",
        "Afternoon": "Out of Office"
    },
    // Add more dates and events as needed
};

function renderWeek(weekElement, startDate) {
    let currentDate = new Date(startDate);

    for (let i = 0; i < 7; i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.dataset.date = currentDate.toISOString().slice(0, 10);

        const dayTitle = document.createElement("p");
        dayTitle.classList.add("day-title");
        dayTitle.textContent = currentDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
        dayElement.appendChild(dayTitle);

        if (currentDate.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)) {
            dayElement.classList.add("today");
        }

        const slots = ["Morning", "Midday", "Afternoon"];
        slots.forEach(slot => {
            const slotElement = document.createElement("div");
            slotElement.classList.add("slot");
            slotElement.dataset.slot = slot;

            const event = events[currentDate.toISOString().slice(0, 10)]?.[slot];
            if (event) {
                slotElement.textContent = `${slot}: ${event}`;
            } else {
                slotElement.textContent = `${slot}: `;
            }

            dayElement.appendChild(slotElement);
        });

        weekElement.appendChild(dayElement);
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

function refreshCalendar() {
    week1.innerHTML = "";
    week2.innerHTML = "";

    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());

    renderWeek(week1, startOfWeek);

    const startOfNextWeek = new Date(startOfWeek);
    startOfNextWeek.setDate(startOfWeek.getDate() + 7);

    renderWeek(week2, startOfNextWeek);
}

refreshCalendar();
setInterval(refreshCalendar, 5 * 60 * 1000);


