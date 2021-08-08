setInterval(()=>{
    const time = document.querySelector("#time");
    let date= new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    let day_night = "AM";
    if (hours > 12){
        hours = hours-12;
    }
    if (hours < 10){
        day_night = "PM";
        hours = "0" + hours;
    }
    if (mins < 10){
        mins = "0" + mins;
    }
    if (sec < 10){
        sec = "0" + sec;
    }
    time.textContent = hours + ":" + mins + ":" + sec + " " + day_night;
});