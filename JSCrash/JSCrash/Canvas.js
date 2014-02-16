function zeichnen() {
    var zeichenbereich = document.getElementsByTagName("canvas")[0].getContext('2d');
    //erster Bereich - Farbe & Transparent, dann Left, Top & Breite, Höhe
    zeichenbereich.fillStyle = "rgba(255,0,0,0.8)";
    zeichenbereich.fillRect(0, 20, 240, 50);
    //zweiter Bereich
    zeichenbereich.fillStyle = "rgba(0,255,0,0.3)";
    zeichenbereich.fillRect(0, 40, 50, 50);
}



function init() {
    zeichnen(); 
}

window.onload = init;