//CONTIENE
/* function contiene (arr,num){
    if (arr.indexOf(num) != -1){
        return true;
    }
    else {
        return false;
    }
}


console.log(contiene([1, 2, 3, 4], 9));
 */

//ENESIMO ELEMENTO
/* 
let array1 = ["caca", 1, "pedo"];
let array2 = [];
let array3 = ["caca", 1,];

console.log(array1[0]);
console.log(array2[1]);
console.log(array3[70]);
 */


/* function medallaSegunPuesto (num){
    let arr = ["Segui Participando" ,"Oro","Plata","Bronce"]
    if (num >= 4){
        return ("Seguí participando")
    }else{
        return (arr[num])
    }
}
console.log(medallaSegunPuesto(2))
 */

//Empezando con el for

function pasitoAPasito (){
    for (let i = 0; i < 5; i++){
        console.log(i)
    }
}
console.log (pasitoAPasito())

/* 
function pasandoPorI (){
    for (let i = 0; i <= 4; i++){
        console.log ("aca i tiene el valor de " + i)
    }
}
console.log (pasandoPorI())

 */


/* function pasandoPorLosPares(){
    for (let i = 0; i <=6; i++){
        if (i % 2 == 0){
            console.log ("acá i tiene el valor de " + i)
        }
    }
}

console.log (pasandoPorLosPares()) */

/* 
function imprimirAzul (x){
    for (let i = 0; i < x; i++){
        console.log("Azul")
    }
}

console.log (imprimirAzul(5))
 */
/* 
let monedas = 0;

function sumar5MonedasDe25Centavos(monedas){
for (let i = 0; i<5; i++){
    monedas = monedas + 0.25
}
return monedas;
}
console.log (sumar5MonedasDe25Centavos(monedas)) */


/* let monedas = 0;
function sumarMonedasDe25(cant){
for (let i = 0; i<cant; i++){
    monedas = monedas + 0.25
}
return monedas;
}
console.log (sumarMonedasDe25(100))


 */
/* function sumatoriaHasta (x){
    let suma = 0
    for (let i = 0; i < x; i++){
        suma = suma + i;
    }
    return suma;
}

console.log (sumatoriaHasta(5))

 */

/* function caloriasDeTrote (x){
    const calorias = 5;
    let consume = 0
    for (let i = 0; i <= x; i++){
        consume = consume + calorias * i
    }
    return consume

}
console.log (caloriasDeTrote(1)) */
/* 
function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length;i++) {
      if (unPeriodo[i] > 0){
        cantidad = cantidad + 1
      }
    }
    return cantidad;
  }
console.log (cantidadDeMesesConGanancia([0,3,-1,5]))  
 */
/* 
function cantidadDeMesesConGanancia(unPeriodo) {
    let mesesGanancia = [];
    for (let i = 0; i < unPeriodo.length;i++) {
      if (unPeriodo[i] > 0){
        mesesGanancia.push(unPeriodo[i]) 
      }
    }
    return mesesGanancia;
  }

console.log (cantidadDeMesesConGanancia([0,3,-1,5, 10, 0, 100])) */

/* function naipes (palo){
    let arr = [];
    for (let i = 1; i <= 12; i++){
        if (i !=8 && i != 9){
            arr.push(i + " de " + palo)
    } 
    
}
return arr;
}
console.log (naipes("espada"))
 */

                                    //Examen
                                    
                                    //Sumatoria bajo importe
/* function sumatoriaBajoImporte (arr){
    let ganancia = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 1001 && arr [i] > 0){ // mayor que 1000
            ganancia = ganancia + arr[i]
        }
    }
    return ganancia
} */
7
//console.log (sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]))
                            

                                    
/*                                     //Entradas para el cine
function asientosDisponibles (disponibles,asientos ){
    if(disponibles.indexOf(asientos) != -1){
        return ("Felicitaciones, el asiento número " + asientos + " está disponible")
    }else{
        return ("Lo sentimos, el asiento número " + asientos +" está ocupado, pero aún quedan "+ disponibles.length + " asientos disponibles")
    }
}

//console.log (asientosDisponibles([2,4,5,6,7,9],10))


                        //TREN
function reporteDePasajeros(estaciones){
    let pasajeros = 200;
    let resultado = [];
    for (let i = 0; i <= estaciones; i++){
        if (i == 0){
            pasajeros = pasajeros + 0
        }
        else if (i != 5){
            pasajeros = pasajeros + 20; 
        }else{
            pasajeros = pasajeros + 40;
        }
        resultado.push("En la estacion "+ i + " hay " + pasajeros + " arriba del tren")
        
    }
    return (resultado)
}
console.log (reporteDePasajeros(5)) */

/* function laClaveSecreta(car){
    let resultado = []
    for (let i = 0; i<=car.length; i++){
        if (car != "*"){
            resultado.unshift(car.pop())
        }
    }
    return (resultado)
}

console.log (laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"])) */