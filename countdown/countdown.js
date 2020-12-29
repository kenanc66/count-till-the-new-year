
var w = new Date();
var n = w.getFullYear();
console.log(`current year is ${n}`);


const newYears = `1 Jan ${(n) + 1}`;
console.log(`calculating till ${newYears}`);

const d = document.getElementById("days");
const _hour = document.getElementById("hours");
const _minute = document.getElementById("minutes");
const _second = document.getElementById("seconds");
console.log(d, _hour, _minute, _second);
function countdown() {

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    console.log(days, hours, minutes, seconds);
    d.innerHTML = days;
    _hour.innerHTML = formatTime(hours);
    _minute.innerHTML = formatTime(minutes);
    _second.innerHTML = formatTime(seconds);
}
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}


countdown();
setInterval(countdown, 1000);
