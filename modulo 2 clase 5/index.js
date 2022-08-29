/*
function doble(num){
    return num * 2
}
function triple (num){
    return num * 3
}
function aplicarCallback (num,callback){
    return  callback(num) 
}
console.log (aplicarCallback(3,triple))
 */
/* let suma = (num1, num2) => num1 + num2
let resta = (num1, num2) => num1 - num2
let multiplicacion = (num1, num2) => num1 * num2
let division = (num1, num2) => num1 / num2

function calculadora (num1,num2,operacion){
    return operacion(num1,num2)
}

console.log (calculadora(2,2,suma)) */
/*  function agregarHttp(url) {
    return 'http://' + url;
}

function procesar(array,callback){
for (let i=0; i<array.length; i++) {
    array[i] = callback(array[i])
}
return array
}
console.log (procesar(["www.google.com","www.yahoo.com"],agregarHttp)) 
 */
/* let horariosPartida = [12, 14, 18, 21];

horariosAtrasados = horariosPartida.map(function(num){
   return num - 1;
})

console.log (horariosAtrasados)
 */

/* let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(estudiantes){
    return estudiantes.aprobado
    })

    let desaprobados = estudiantes.filter(function(estudiantes){
        return estudiantes.promedio < 7
    })
    console.log(aprobados)
    console.log(desaprobados) */

    /* let vueltas = [5, 8, 12, 3, 22]
    
    let totalVueltas = vueltas.reduce(function(acum,vueltas){
        return acum + vueltas;
    })

    console.log(totalVueltas) */
    /* let fecha = new Date();
    console.log("Día: "+ fecha.getDate())
    console.log('Hoy es el día '+fecha.getDay()+' del mes '+(fecha.getMonth() +1)+' del año '+fecha.getFullYear()) */
/* 
    let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [,bariloche, barcelona , china] = destinosDelMundo

console.log(barcelona)
 */

let notas = [1,2,3,4,5];

let laMenor = Math.min(...notas);

console.log(laMenor)