const timeDisplay = document.getElementById("time");
const alarmTimeInput = document.getElementById("alarmTime");
const setAlarmButton = document.getElementById("setAlarm");
const alarmStatus = document.getElementById("alarmStatus");

// Function to update the clock display
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Function to set the alarm
function setAlarm() {
    const alarmTime = alarmTimeInput.value;
    if (!alarmTime) return;
    
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const [alarmHours, alarmMinutes] = alarmTime.split(":").map(Number);

    const timeToAlarm = new Date();
    timeToAlarm.setHours(alarmHours, alarmMinutes, 0, 0);

    const timeDifference = timeToAlarm - now;

    if (timeDifference < 0) {
        alarmStatus.textContent = "Invalid time. Please set a future time.";
        return;
    }

    setTimeout(() => {
        alarmStatus.textContent = "Wake up!";
        alarmStatus.style.color = "#ff0000";
    }, timeDifference);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Event listener for setting the alarm
setAlarmButton.addEventListener("click", setAlarm);

// Initial clock update
updateClock();
