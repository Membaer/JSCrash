function init() {
    console.debug(document.getElementsByTagName("img"));
    document.getElementsByTagName("img")[0].width = 500;
    document.getElementsByTagName("img")[0].height = 500;
    document.getElementById("b1").onmousemove = function (ev) {
        var text = ev.pageX + "," + ev.pageY + "Screen Position at: " + ev.screenX + ";" + screenY;
        document.getElementById("dimension").innerHTML = text;
        if (ev.pageX == 500 || ev.pageY == 500) {
            alert("Hauptgewinn");
            prompt("What's your name");
        }
    };
    //finde alle elemente h2 - durch wiederholen der suche bis i der anzahl der vorhandenen h2 entspricht (length)
    //ändere die font-color auf rot, beim mouseover über das erste h2 element
    document.getElementsByTagName("h2")[0].onmouseover = function () {
        for (i = 0; i < document.getElementsByTagName("h2").length; i++) {
            document.getElementsByTagName("h2")[i].style.color = "red"
            document.getElementsByTagName("h2")[i].style.fontSize = 35 + "px";
        }
    }
}

window.onload = init;

