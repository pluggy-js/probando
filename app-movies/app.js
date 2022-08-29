let moviesDH = require("./movies");
// let comando = process.argv[2];

function listMovies() {
  for (let i = 0; i < moviesDH.length; i++) {
    console.log(moviesDH[i].title);
    console.log(moviesDH[i].genre);
  }
}

// console.log (listMovies())

function searchMovie(id) {
  let peli = moviesDH.find(
    (moviesDH) => moviesDH.id == id || moviesDH.title == id
  );
  if (peli == undefined) {
    return null;
  }
  return peli;
}

// console.log (searchMovie("Minions"))

function searchMovieByGenre(genre) {
  let peli = moviesDH.find((moviesDH) => moviesDH.genre == genre);
  if (peli == undefined) {
    return null;
  }
  return peli;
}

// console.log (searchMovieByGenre("Accion"))

function totalPrice() {
  let total = moviesDH.reduce((acum ,item) => {
    return acum += item.price 
  }, 0);
  return total;
}
//console.log(totalPrice());

function changeMovieGenre (id, genero){
let cambio = searchMovie(id)
cambio.genre = genero;
return cambio
}

//console.log (changeMovieGenre(1,"Risa"))
