/* function dominio (string){
    return ("http://" + string )
}

console.log(dominio('www.digitalhouse.com.ar')) */


/* function reemplazoFastFast (text,palabraA,palabraB){
return text.replace(palabraA,palabraB)
}
console.log(reemplazoFastFast("Estoy triste","triste","feliz")) */

/* function menciona (texto,palabra){
    if (texto.indexOf(palabra) != -1){
        return true
    }else{
        return false
    }
}

console.log(menciona('hola como estas', 'estas')) */

/* let frase = 'Hola!, soy Carli';

let licenciada = frase.slice(11)

console.log (licenciada) */
/* 
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(horas){
        this.energia = (deportista.energia - (horas * 5))
        this.experiencia = (deportista.experiencia + (horas * 2))
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);


 */

/* 
let dameCinco = () => {
    return [1,2,3,4,5];
  }



  let saludar = nombre => 'Hola, ' + nombre + '!'

  console.log (saludar('Ezequiel')) */

  /* function tengoClases(dia) {
	switch (dia) {
		case 'lunes':
		case 'miércoles':
		case 'viernes':
			console.log ('tenés  clases')
			break;
		default:
			console.log ('no tenés  clases')
	}
}
console.log (tengoClases('lunes')) */

/* function loro (texto){
    for (i=1; i>=5; i++){
        console.log ('texto')
    }
}

console.log (loro('jaja')) */

function tengoClases(dia) {
	switch (dia) {
		case 'lunes':
		case 'miércoles':
		case 'viernes':
			console.log ('tenés  clases');
		break;
		default:
			console.log ('no tenés  clases');
	}
}

console.log (tengoClases('martes'))