//Befehle immer mit Semikolon am Ende
alert();

//Kommentare einzeilig
/*
Kommentare
mehrzeilig
*/

//Blöcke von Anweisungen
{
    alert(1);
    alert(2);
    alert(3);
}

//Case-Sensitiv 
var a;
var A;
// = zwei Variablen a und A

//Leerzeichen und Textumbrüche überall erlaubt 
var
    a =
    12


//Variablen

a = 6.2; //Gleitkomma
a = 7;
b = "Text";
c = true;
d = new Object();

//Variablen können in JS jederzeit geändert, überschrieben werden

a = "abc" // Variable a wird hier in einen Text geändert

//man kann auch Schlüsselwörter nutzen 'var' und Bezeichner a, oder nur Bezeichner 

var e = 8 //eigentlich nur für Funktionen nötig, aber Deklaration ist besserer Stil 

/* Datentypen in JS --> die aber nur durch Wertzuweisung bestimmt werden a=9 = Number, a="hallo" = text
number (ganze und gleitkommazahlen
text (string in "")
boolean (true / false)
objects 
*/

/*
    Default Werte in JS
    var a; --> der wert von a ist undefined (undefined ist ein token - sinnbehafteter ausdruck)
    var b = null; --> null ist auch ein wert
    var c = "JS" / "var" --> c ist NaN = Not a number (also auch ein wert)
    alert(c) zeigt NaN

    ich kann diese "Werte" ansprechen
    if (a==undefined)
    if (isNaN(c))
    --> Ergebnis ist true / false
----
    wenn ich alert(e) --> kommt kein Wert (weder undefined, noch null, noch NaN) - weil es e nicht gibt
*/

//Aritmetische Operatoren
a = 6 + 5;
a = 6 / 2;

//Zuweisungsoperatoren
a = 6;
a *= 6; //nimm a und multipliziere mit 6
a += 6; //a + 6
a++ // kein leerzeichen erlaubt, heisst a + 1
a -= 6; // a - 6


//Vergleichsoperatoren e.g. == (einmal = ist eine Zuweisung, zweimal == ist der Vergleich)
a == b;
a != b;
a <= b;
a >= b;

//Logische Operatoren
a < 10 || a > 20 // oder
a < 10 && a > 20 // und

