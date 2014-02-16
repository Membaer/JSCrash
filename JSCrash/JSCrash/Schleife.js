//Schleife braucht drei Parameter - Zuweisung, Bedingung & Zählvariable
//z.B. dreimal dasselbe resultat - Schleife wird 10mal ausgeführt:
for(i = 0, i < 10, i = i + 1){}

for (i=0; i<10; i+=1){}

for (i=0; i<10; i++){}
;

//Weniger genutzte Alternative - while, aufwändiger, da variable vorher definiert und in der schleife jeweils addiert werden muss
i=0
while (i<9){
    i++;
}