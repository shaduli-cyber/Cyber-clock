let is12Hour = true; 

function toggleFormat() {
         if (is12Hour == true) {
        is12Hour = false;
    } else {
        is12Hour = true;
    }
}

function startClock() {
        let today = new Date();
        let h = today.getHours();
    let m = today.getMinutes();
        let s = today.getSeconds();
    let ampm = "";

    if (is12Hour == true) {
        if (h >= 12) {
            ampm = "PM";
        } else {
            ampm = "AM";
        }
        
        if (h > 12) {
            h = h - 12;
        }
        if (h == 0) {
            h = 12;
        }
    } else {
        ampm = ""; 
    }

    if (h < 10) { h = "0" + h; }
    if (m < 10) { m = "0" + m; }
    if (s < 10) { s = "0" + s; }

    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
      document.getElementById('seconds').innerText = s;
document.getElementById('ampm').innerText = ampm;

    setTimeout(startClock, 1000); 
}

startClock();
