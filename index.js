let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");
let counter = null;
let uniqueId1;
function timerShow() {
    clearInterval(uniqueId1);  // Clear any previous timer
    uniqueId1 = setInterval(function () {
        if (counter === 0) {
            timerTextEl.textContent = "Your moment completed";
            clearInterval(uniqueId1);  // Stop the timer
        } else {
            timerTextEl.textContent = counter + " seconds left";
        }
        counter = counter - 1;
    }, 1000);
}

twentySecondsBtnEl.onclick = function () {
    counter = 20;
    timerShow();
}

thirtySecondsBtnEl.onclick = function () {
    counter = 30;
    timerShow();
}

fortySecondsBtnEl.onclick = function () {
    counter = 40;
    timerShow();
}

oneMinuteBtnEl.onclick = function () {
    counter = 60;
    timerShow();
}
