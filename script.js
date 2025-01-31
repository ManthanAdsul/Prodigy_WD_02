let timer;
let elapsedTime = 0;
let running = false;

function updateDisplay() {
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    document.querySelector(".stopwatch").textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
    if (!running) {
        running = true;
        let startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 100);
    }
}

function pauseStopwatch() {
    running = false;
    clearInterval(timer);
}

function resetStopwatch() {
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    updateDisplay();
    document.querySelector(".laps").innerHTML = "";
}

function recordLap() {
    if (running) {
        let lapTime = document.querySelector(".stopwatch").textContent;
        let lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        document.querySelector(".laps").appendChild(lapItem);
    }
}

updateDisplay();
