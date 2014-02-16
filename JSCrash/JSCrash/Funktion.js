function namederfkt() {
    for (i = 0; i < 10; i++) {
        alert("Hello" + i);
    }
}

function platzhalter(a, b, c, d) {
    alert(a + b + c + d);
}

//durch Deklaration var x innerhalb von Funktionen werden lokale Variablen für DIESE Fkt gesetzt

function lokalvar(a) {
    var x = 5;
    var b = prompt("Bitte Name eingeben");
    alert(b + " ist " + (a + x) + " Jahre alt!");
}