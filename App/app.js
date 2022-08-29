//importamos funcionesDeTareas de funcionesDeTareas.js
const funcionesDeTareas = require("./funcionesDeTareas");

//procces.argv para guardar en un array lo que pasemos por consola. el 0 es node, el 1 es app.js
// y el 2 es la accion que queremos realizar
let accion = process.argv[2];

//switch para evaluar cada uno de los casos
switch (accion) {
  case "listar":
    //declaramos tareas al cual le pasamos funcionesDeTareas.leerArchivo (la funcion dentro de funcionesDeTareas)
    let tareas = funcionesDeTareas.leerArchivo();
    // con el forEach recorro tareas y le paso por parametros los valores a mostrar, que son tareas e indice
    tareas.forEach((tarea, indice) => {
      console.log(
        "Tarea" + " " + (indice + 1) + " " + tarea.titulo + ": " + tarea.estado
      );
    });
    break;
  case undefined:
    console.log("Atencion - Tienes que pasar una accion");
    break;
  case "guardar":
    funcionesDeTareas.escribirJson();
    break;
  case "crear":
    let titulo = process.argv[3];
    funcionesDeTareas.guardarTarea(titulo);
    break;
    case "filtrar":
    funcionesDeTareas.filtrarPorEstado(tareas)  
    break;
  default:
    console.log("No entiendo que quieres hacer");
}
