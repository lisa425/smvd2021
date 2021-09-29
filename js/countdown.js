let dday = new Date("October 04, 2021, 00:00:00").getTime();

let countdown = setInterval(function() {
    let today = new Date().getTime();
    let gap = dday - today;
    let day = Math.abs(Math.ceil(gap / (1000 * 60 * 60 * 24)));
    let hour = Math.abs(Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let min = Math.abs(Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60)));
    let sec = Math.abs(Math.ceil((gap % (1000 * 60)) / 1000));

    // if(day === 0 && hour === 0 && min === 0 && sec === 0){
    //     clearInterval(countdown);
    //     removeCountdown();
    //     return;
    // }
    if(hour<10){
        hour = '0'+(hour-1);
    }
    if(min<10){
        min = '0'+(min-1);
    }
    if(sec<10){
        sec = '0'+sec;
    }

    document.getElementById("dday").innerHTML = "D-" + day  
    document.getElementById("countdown").innerHTML = hour + ":" + min + ":" + sec;

}, 1000);
