function init() {
    //document.getElementsByTagName("a")[1].href = "http://www.google.com"
    document.links[0].href = "schleife.js"
    document.getElementsByTagName("input")[0].value = "Please fill out";
}

function clearinput() {
    document.getElementsByTagName("input")[0].value = "";
}

function changetext() {
    document.getElementById("mydiv").innerHTML = "Das ist alles meins";
}

//anonyme Funktionen mit DOM event handlern (anstelle von HTML Event Handlern) für sauberen Code

function laden() {
    document.getElementById("mydiv").onmousemove = function () {
        document.getElementById("mydiv").innerHTML = "Hello World";
        //document.getElementById("mydiv").style = "color:red;font-size:25px";

    }
}
window.onload = laden;

//mouseposition abfragen

window.onload = function (ev) {
    var text = ev.pageX + "," + ev.pageY + "Screen Position at: " + ev.screenX + ";" + screenY;
    document.getElementById("dimension").innerHTML = text;
}