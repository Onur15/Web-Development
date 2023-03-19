var ms = 15;
var t = setInterval(move, ms);
var pos = 0;
var value = 1;
var container = document.getElementById("container");
var box = document.getElementById("box");
box.style.top = (container.clientHeight - box.clientHeight) / 2 + "px";
document.addEventListener('keypress', (event) => {
    var name = event.key;
    var code = event.code;
    if (name == "w") {
        up();
    }
    if (name == "s") {
        down();
    }
    if (code == "Space") {
        stop();
    }
});

function move() {
    var width = container.clientWidth;
    if (pos + value >= width - box.clientWidth) {
        value *= -1;
        pos += value;
        box.style.left = pos + "px";
    } else if (pos + value > 0 && pos < width - box.clientWidth) {
        pos += value;
        box.style.left = pos + "px";
    } else if (pos + value <= 0) {
        value *= -1;
        pos += value;
        box.style.left = pos + "px";
    }
}

function up() {
    if (ms > 5) {
        ms -= 5;
        t = clearInterval(t);
        t = setInterval(move, ms);
        console.log(ms);
    } else if (Math.abs(value) < box.clientWidth / 2) {
        value += 1 * Math.sign(value);
        console.log(`Value: ${Math.abs(value)}`);
    }
}

function down() {
    if (Math.abs(value) > 1) {
        value -= 1 * Math.sign(value);
        console.log(`Value: ${Math.abs(value)}`);
    } else {
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