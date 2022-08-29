/* let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado>bicicletaB.rodado ? bicicletaA : bicicletaB

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca ); */
/* 
function loro(texto){
    for (let i=1; i<=5; i++){
        console.log (texto)
    }
}

console.log (loro('oye')) */

function noParesDeContarImparesHasta(numero){
    let cont = 0;
    for (let i = 0; i <= numero; i++){
        if (i % 2 != 0){
            cont++
        }
    }
    return (cont)
}
console.log (noParesDeContarImparesHasta(5))