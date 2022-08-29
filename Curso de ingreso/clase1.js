/*  
let suma = function(a, b){
return a + b;
}

console.log(suma(5, 5));


let resta = function(c, d){
    return c - d;
}

console.log(resta(2, 1))

function saludar (nombre, apellido){
    return "Hola " + nombre + apellido;
}

console.log(saludar("Juan", " Castro"));

function HacerHelado (cantidad){
    return "🍨".repeat(cantidad)
}

let misHelados = HacerHelado(3);
console.log(misHelados);

let dia = "domingo"
let clima = "soleado"

if (dia == "domingo" && clima == "soleado") {
    console.log("lindo dia para pasear")
}

let incremento = 2

incremento *=4
console.log(incremento)

let concatenacion = '33' - 2
console.log(concatenacion)

let hoy = '19/07'
function ingreso (edad, cumple){
    if(edad >= 18 && cumple == hoy){
        return 'Puede pasar y tiene promoción'
    }
    else if(edad >= 18 ){
        return 'Puede pasar'
    }
    else {
        console.log(edad)
        return 'No puede pasar'
    }
}
console.log(ingreso(17, '19/07'))


let numeroA = 10;

let numeroB = 5;

let resutladoResta = numeroA - numeroB;

let resultadoSuma = numeroA + numeroB;

let resultadoMultiplicacion = numeroA * numeroB;

let resultadoDivision = numeroA / numeroB;
*//* 
let unNumeroChico = 2

let unNumeroGrande = 10

let esMenor = unNumeroChico < unNumeroGrande

let esMayor = unNumeroGrande > unNumeroChico

console.log (esMenor) */
/* 
function triple (numero) {
    return 3 * numero
}

console.log (triple(3));
/* 
function multiplicar (numero1, numero2){
    return numero1 * numero2
}
console.log(multiplicar(2,3))
/*  
function perimetro (radio){
    return 3.14 * radio * 2
}

console.log(perimetro(4)) * /

function sePoneLaOlla (diaSemana){
    if diaSemana == "Domingo"{
        return "¡Pongamos la olla, hoy se comen pastas!"
    }
    else{
        return "Mejor lo dejamos para el domingo"
    }
}
console.log (sePoneLaOlla("Domingo"))
 */
/* function puedoIrAlBanco(diaDeLaSemana, horaActual){
    return dia != "Sábado" && dia != "Domingo" && horaActual > 10 && horaActual < 15;
} */
/* 
function esNumeroDeLaSuerte (num) {
    return  ((num > 0) && (num != 15) && (num % 2 == 0 || num % 3 == 0))
}

console.log (esNumeroDeLaSuerte(6)) */


/* function estaEnEdad (edad, genero){
    if (edad >= 60 && genero == "F"){
        return true;

    }    else if (edad >= 65 && genero == "M"){
        return true;
    }
    else{
        return false;
    }
}

function tieneSuficientesAportes (aniosAporte){
    if (aniosAporte >= 30){
        return true;
    }
    else {
        return false;
    }
}

function puedeJubilarse (edad,genero,aniosAporte){
    return estaEnEdad (edad,genero) && tieneSuficientesAportes (aniosAporte);
}
console.log (puedeJubilarse(6, "F", 31 )) */

/* function puedeSubirse (alturaPersona, vieneConCompania, tieneAfeccionCardiaca){
    if (tieneAfeccionCardiaca || !vieneConCompania){
        return (false)
    }
    else if (alturaPersona >= 1.5 && !tieneAfeccionCardiaca && vieneConCompania){
        return (true)
    }
    else {
        return false
    }
}
console.log (pued) */

 function medallaSegunPuesto (n){
    if (n == 1){
        return ("Oro")
    }
    else if (n == 2){
        return ("Plata")
    }
    else if (n == 3){
        return ("Bronce")
    }
    else {
        return ("Seguí Participando")
    }
}
console.log (medallaSegunPuesto(9)) 

