//Date ist eine Klasse, new ist ein Schlüsselwort
// Sammlung an Eigenschaften und Methoden für Objekte eines Typs
// Klasse mit Konstruktur = Date()

function objekterzeugen() {
    var obj = new Date();
    //Aufruf durch Punktnotation - alert (variable .Methode);
    alert(obj.getDay());

    //Neues Bild erzeugen
    var bild = new Image();
    // Dem neuen Bildobjekt die Eigenschaft src zuweisen
    bild['src'] = "http://rjs.de/bilder/devil.gif"
    //Ausgabe 
    alert(bild.src);
    var text = "literales Objekt Text - mit Eigenschaft Anzahl Zeichen"
    //Javascript object notation (JSON) 
    var jsonobj = {
        //Wertepaare
        "name" : "otto"
    }
    //unüblich, aber machbar - array objekte
    var arrayobj = [];
}

//array sind nahezu das gleiche wie objekte

function arrayerzeugen() {
    var a1 = new Array();
    var a2 = {
        "name": "schuett",
        "vorname" : "Olivia"
    }
    //Aufruf durch PUnktnotation  .vorname)
    alert(a2.vorname);
    //Aufruf durch Arraynotation [nummver vs name als string]
    alert(a2["name"]);
    var a3 = [1, 2, 3, 4, 5]; //index beginnt bei 0 - um 3 anzusprechen müsste ich den zweiten index holen
    alert(a3[2]);
}


//Klassen sind Bauvorschriften für Objekte z.B. Date()
function klassenelementeverwenden() {
    Math.random();

}

