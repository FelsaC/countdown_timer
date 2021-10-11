//Initial variables
let now = document.querySelector("#now");
let eventDateComponent= document.querySelector("#event_date");
let eventDate = new Date(eventDateComponent.value);
let currentDate = new Date();
let timeUntilEvent;

//clock numbers
let clockDays    = document.querySelector("#days")   ;
let clockHours   = document.querySelector("#hours")  ;
let clockMinutes = document.querySelector("#minutes");
let clockSeconds = document.querySelector("#seconds");

//refresh each second
let OneSecondInterval = setInterval(function () {updateTimer(currentDate, eventDate);
    updateCurrentDate()}, 1000)
;

function updateCurrentDate() {
    currentDate = new Date();
    now.innerHTML = currentDate;
}

function updateEventDate () {
    eventDate = new Date(eventDateComponent.value);
}

function updateTimer(now, eventTime) {
    timeUntilEvent  = eventTime - now;
    
    let daysUntilEvent    =  timeUntilEvent / 8.64e7;
    let hoursUntilEvent   = (timeUntilEvent % 8.64e7) / 3.6e6;
    let minutesUntilEvent = (timeUntilEvent % 3.6e6 ) / 60_000;
    let secondsuntilEvent = (timeUntilEvent % 60_000) / 1000;

    clockDays.innerHTML    = Math.trunc(daysUntilEvent);
    clockHours.innerHTML   = Math.trunc(hoursUntilEvent);
    clockMinutes.innerHTML = Math.trunc(minutesUntilEvent);
    clockSeconds.innerHTML = Math.trunc(secondsuntilEvent);
    
    clockDays.innerHTML = Math.trunc(timeUntilEvent / 8.64e7);
    
    console.log(timeUntilEvent);
    
}


