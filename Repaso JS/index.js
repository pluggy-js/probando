/* function anterior (num){
    return (num - 1)
}

function triple (num){
    return (num *=3)
}

function anteriorDelTriple(num){
    let resultado = triple(num)
    return (anterior(resultado))
}

console.log(anterior(9))
console.log (triple (2))
console.log(anteriorDelTriple(2))

 */
/* function puedePasar(nombre){
    if (nombre == "Cosme Fulanito"){
       return false;
    }else{
        return true;
    }
}
console.log(puedePasar("Cosme Fulanito")) */


                                                 //METODOS
/* let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  
  let fraseNueva = arrayFrase.join(" ")

  let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];
  
  let alumnoEgresado = estudiantes.pop()

 */

  let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  
  estudiantes.push(
    {nombre : 'Juan',
    promedio : 2,
    curso: 'iOS'},
  )
  estudiantes.push(
    {nombre: 'Miguel',
    promedio: 2,
    curso: 'Android'},)

  console.log (estudiantes)