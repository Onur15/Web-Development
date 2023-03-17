var ms = 20;
var t = setInterval(move, ms);
var pos = 0;
var value = 1;
var box = document.getElementById("box");

function move() {

    if (pos >= 150) {
        pos = 149;
        value *= -1;
    } else if (pos > 0 && pos < 150) {
        pos += value;
        box.style.left = pos + "px";
    } else if (pos <= 0) {
        value *= -1;
        pos = 1;
    }
}

function up() {
    if (ms > 5) {
        if (t != undefined) {
            ms -= 5;
            t = clearInterval(t);
            t = setInterval(move, ms);
            console.log(ms);
        }
    } else if (t != undefined) {
        console.log("Maximum speed reached.")
    }
}

function down() {
    if (t != undefined) {
        ms += 5;
        t = clearInterval(t);
        t = setInterval(move, ms);
        console.log(ms);
    }
}

function stop() {
    if (t != undefined) {
        t = clearInterval(t);
    } else {
        t = setInterval(move, ms);
    }
}