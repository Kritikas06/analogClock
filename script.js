let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();
    // getting hour, min, sec from date
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    // 12 hours =  360 deg --> 1 hour = 30 deg --> h hours = 30h + m/2
    // 60 min = 30 --> 1 min = 1/2 --> m min = (1/2)m
    let hRotation = 30 * h + m / 2; 

    // 60 min = 360 deg --> 1 min = 6 deg --> m min = 6m
    let mRotation = 6 * m;

    // 60 sec = 360 deg --> 1 sec = 6 deg --> s sec = 6s
    let sRotation = 6 * s;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);