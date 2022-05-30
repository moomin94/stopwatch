let minutes = 0;
let seconds = 0;
let tens = 0;
const appendTens = document.querySelector(".tens");
const appendSeconds = document.querySelector(".seconds");
const appendMinutes = document.querySelector(".minutes");
const startBtn = document.querySelector(".button-start");
const stopBtn = document.querySelector(".button-stop");
const resetBtn = document.querySelector(".button-reset");
let intervalId;

function startClock() {
  clearInterval(intervalId);
  intervalId = setInterval(operateTimer, 10);
}

function stopClock() {
  clearInterval(intervalId);
}

function resetClock() {
  clearInterval(intervalId);
  minutes = 0;
  seconds = 0;
  tens = 0;
  appendMinutes.innerText = "00";
  appendSeconds.innerText = "00";
  appendTens.innerText = "00";
}

startBtn.addEventListener("click", startClock);
stopBtn.addEventListener("click", stopClock);
resetBtn.addEventListener("click", resetClock);

function operateTimer() {
  tens++;
  appendTens.innerText = tens > 9 ? tens : "0" + tens;
  if (tens > 99) {
    seconds++;
    appendSeconds.innerText = seconds > 9 ? seconds : "0" + seconds;
    tens = 0;
    appendTens.innerText = "00";
  }
  if (seconds > 59) {
    minutes++;
    appendMinutes.innerText = minutes > 9 ? minutes : "0" + minutes;
    seconds = 0;
    appendSeconds.innerText = "00";
  }
}
