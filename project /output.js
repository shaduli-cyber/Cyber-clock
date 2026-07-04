let is12Hour = true; 

function toggleFormat() {
    is12Hour = !is12Hour;
    let btn = document.getElementById('toggleBtn');
    
    if (is12Hour) {
        btn.innerText = "Switch to 24H";
    } else {
        btn.innerText = "Switch to 12H";
    }
}

function startClock() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ampm = "";

    if (is12Hour) {
        ampm = h >= 12 ? "PM" : "AM";
        h = h % 12;
        if (h == 0) {
            h = 12; 
        }
    } else {
        ampm = ""; 
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
    document.getElementById('ampm').innerText = ampm;

    setTimeout(startClock, 1000); 
}

startClock();
