40
"diego de granda"
true 
false

null
undefined

//valores tipos objetos

[1,2,3,4]
{ nombre: "diego"}

var nombre = "Angel Soto";


// declarativa

function miFuncion() {
    return 3;
}

//Expresion 
var a = 2;
var b = 3;

var miFuncion2 = function (a,b) {
    return a + b;
}
 

miFuncion2();


var estudiantes = "angel";
function saludarEstudiantes(estudiantes){
    console.log(`Hola ${estudiantes}`);
}

console.log(saludarEstudiantes);

function sumer(a,b){
    return a + b;
}

sumer(1,2);


var jugador1, jugador2;

function juego(jugador1,jugador2){
    if(jugador1 == piedra && jugador2 == tijera){
        console.log("jugador 1 gana");
    } else if(jugador1 == tijera && jugador2 == papel){
        console.log("jugador 1 gana");
    } else if(jugador1 == papel && jugador2 == piedra){
        console.log("jugador 1 gana");
    } else if(jugador1 === jugador2){
        console.log("empate");
    } else{
        console.log("Gana jugador 2");
    }
}
var jugador1 = " ", jugador2;
var piedra = "piedra";
var tijera = "tijera";
var papel = "papel";
function juegoSwitch(jugador1,jugador2){
    switch (jugador1) {
        case (jugador1 == piedra && jugador2 == tijera):
            console.log("jugador 1 gana");
            break;
        case (jugador1 == tijera && jugador2 == papel):
            console.log("jugador 1 gana");
            break;
        case (jugador1 == papel && jugador2 == piedra):
            console.log("jugador 1 gana");
            break;
        case (jugador1 === jugador2):
            console.log("empate");
            break
        default:
            console.log("Gana jugador 2");
            break;
    }
}

var frutas = ["manzana","platano","cereza", "fresa"];
console.log(frutas);