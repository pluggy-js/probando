//requiero el modulo fs para poder leer el archivo de tareas
const fs = require("fs");
// const { json } = require('stream/consumers');

//declaro funcionesDeTareas el cual tiene una funcion "LeerArchivo" que lee el tareas.json
let funcionesDeTareas = {
  //modularizamos para no tener que repetir codigo
  archivo: "./tareas.json",
  //creo una funcion para leer el archivo
  leerArchivo: function () {
    //guardo la lectura de tareas.json en una variable "archivo"
    let archivo = fs.readFileSync(this.archivo, "UTF-8");
    //necesitamos el tareas.json parseado. para que sea un objeto literal.
    return JSON.parse(archivo);
  },

  //creo la funcion para escribir nuevas tareas
  escribirJson: function (tareas) {
    //convierto el objeto en un texto plano
    let tareasJSON = JSON.stringify(tareas);
    //escribo el archivo en el tareas.json
    fs.writeFileSync(this.archivo, tareasJSON);
  },
  //creo una funcion para guardar tareas.
  guardarTarea: function (titulo) {
    //leo el archivo
    let tareas = this.leerArchivo();
    //creo el "cuerpo" objeto que va a tener la nueva tarea.
    let nuevaTarea = {
      titulo: titulo,
      estado: "pendiente",
    };
    //a las tareas le pusheo la nueva tarea creada
    tareas.push(nuevaTarea);
    //llamo a escribirJSON para pasarle las tareas (con la nueva tarea ingresada)
    this.escribirJson(tareas);
  },
  filtrarPorEstado : function(estado){
   let leer = this.leerArchivo();
   let filtro = leer.filter(tarea => tarea.estado == estado)
   return filtro
  },
};
//exportamos el funcionesDeTareas para importarlo en app.js
module.exports = funcionesDeTareas;
