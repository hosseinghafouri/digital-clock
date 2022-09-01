const $ = document;
let hourElem = $.querySelector("#hour");
let minuteElem = $.querySelector("#minute");
let secondElem = $.querySelector("#second");
setInterval(() => {
    const dateAndTime = new Date();

    let nowHour = dateAndTime.getHours();
    let nowMinute = dateAndTime.getMinutes();
    let nowSecond = dateAndTime.getSeconds();

    if (nowHour < 10) {
        nowHour = "0" + nowHour;
    }
    if (nowMinute < 10) {
        nowMinute = "0" + nowMinute;
    }
    if (nowSecond < 10) {
        nowSecond =  "0" + nowSecond;
    }

    hourElem.innerHTML = nowHour;
    minuteElem.innerHTML = nowMinute;
    secondElem.innerHTML = nowSecond;
    
}, 1000);