import { filterDirector, sortDataYear, filterProducer, filterSpecies, characterMovie, functionSortAZ, genderTrivia, specieTrivia, ageTrivia } from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = document.getElementById("movies");
const filterSection = document.getElementById("filterSection");
//const filmsZone = document.getElementById("filmsZone")
const directores = document.getElementById("Directores");
const productores = document.getElementById("Productores");
const añoDeEstreno = document.getElementById("añoDeEstreno");
const more = document.getElementById("more");
const characters = document.getElementById("characters");
const especie = document.getElementById("Especie");
const characterMovies = document.getElementById("characterMovies");
const sortAZ = document.getElementById("sortAZ");
const trivia = document.getElementById("trivia");
const about = document.getElementById("about");
const rightAnswerOne = document.getElementById("rightAnswerOne");
const wrongAnswerOne = document.getElementById("wrongAnswerOne");
const rightAnswerTwo = document.getElementById("rightAnswerTwo");
const wrongAnswerTwo = document.getElementById("wrongAnswerTwo");
const rightAnswerThree = document.getElementById("rightAnswerThree");
const wrongAnswerThree = document.getElementById("wrongAnswerThree");
const refreshHome = document.getElementById("refreshHome");
const refreshMovies = document.getElementById("refreshMovies");
const refreshCharacters = document.getElementById("refreshCharacters");
const triviaAgain = document.getElementById("triviaAgain");

refreshHome.addEventListener("click", function () {
  history.go(0)
})
refreshMovies.addEventListener("click", function () {
  history.go(0)
})

refreshCharacters.addEventListener("click", function () {
  history.go(0)
})

about.addEventListener("click", function () {
  document.getElementById("aboutHeader").style.display = "flex";
  document.getElementById("aboutSection").style.display = "flex";
  document.getElementById("homeHeader").style.display = "none";
  document.getElementById("home-Content").style.display = "none";
  document.getElementById("moreHeader").style.display = "none";
  document.getElementById("moreSection").style.display = "none";
  document.getElementById("filmsZone").style.display = "none";
  document.getElementById("triviaSection").style.display = "none";
  document.getElementById("triviaHeader").style.display = "none";
  document.getElementById("movieHeaderSection").style.display = "none";
})

movies.addEventListener("click", function () {
  document.getElementById("homeHeader").style.display = "none";
  document.getElementById("home-Content").style.display = "none";
  document.getElementById("filmsZone").style.display = "flex";
  document.getElementById("content").style.display = "flex";
  document.getElementById("buttonZone").style.display = "none";
  document.getElementById("movieHeaderSection").style.display = "flex";
  document.getElementById("charactersZone").style.display = "none";
  document.getElementById("aboutHeader").style.display = "none";
  document.getElementById("aboutSection").style.display = "none";
  document.getElementById("moreHeader").style.display = "none";
  document.getElementById("triviaSection").style.display = "none";
  document.getElementById("triviaHeader").style.display = "none";
  document.getElementById("moreSection").style.display = "none";
})

more.addEventListener("click", function () {
  document.getElementById("homeHeader").style.display = "none";
  document.getElementById("home-Content").style.display = "none";
  document.getElementById("moreHeader").style.display = "flex";
  document.getElementById("moreSection").style.display = "flex";
  document.getElementById("triviaSection").style.display = "none";
  document.getElementById("triviaHeader").style.display = "none";
  document.getElementById("aboutHeader").style.display = "none";
  document.getElementById("aboutSection").style.display = "none";
})

characters.addEventListener("click", function () {
  document.getElementById("homeHeader").style.display = "none";
  document.getElementById("home-Content").style.display = "none";
  document.getElementById("buttonZone").style.display = "none";
  document.getElementById("characterHeaderSection").style.display = "flex";
  document.getElementById("characterContent").style.display = "flex";
  document.getElementById("charactersZone").style.display = "flex";
  document.getElementById("triviaHeader").style.display = "none";
  document.getElementById("triviaSection").style.display = "none";
  document.getElementById("moreHeader").style.display = "none";
  document.getElementById("aboutHeader").style.display = "none";
  document.getElementById("aboutSection").style.display = "none";
  document.getElementById("moreSection").style.display = "none";
})



trivia.addEventListener("click", function () {

  document.getElementById("homeHeader").style.display = "none";
  document.getElementById("filmsZone").style.display = "none";
  document.getElementById("home-Content").style.display = "none";
  document.getElementById("content").style.display = "none";
  document.getElementById("movieHeaderSection").style.display = "none";
  document.getElementById("moreHeader").style.display = "none";
  document.getElementById("moreSection").style.display = "none";
  document.getElementById("charactersZone").style.display = "none";
  document.getElementById("triviaSection").style.display = "grid";
  document.getElementById("triviaHeader").style.display = "flex";
  document.getElementById("aboutHeader").style.display = "none";
  document.getElementById("aboutSection").style.display = "none";


})


//constructor de objetos para seleccionar datos a mostrar
class titleAndPoster {
  constructor(title, poster, director, producer, release_date, rt_score) {
    //"this" indica el objeto en concreto que se utilizará (o algo así)
    this.poster = createImage(poster);
    this.title = createText("Title: " + "'" + title + "'");
    this.director = createText("Director: " + director);
    this.producer = createText("Producer: " + producer);
    this.release_date = createText("Release date: " + release_date);
    this.rt_score = createText("Score: " + rt_score);

  }
}

//constructor de objetos para seleccionar datos a mostrar
class showCharacters {
  constructor(title, poster, director, release_date, rt_score, description, specie) {
    //"this" indica el objeto en concreto que se utilizará (o algo así)
    this.title = createText("Name: " + title);
    this.poster = createImage(poster);
    this.director = createText("Gender: " + director);
    this.release_date = createText("Age: " + release_date);
    this.rt_score = createText("Eye Color: " + rt_score);
    this.description = createText("Hair Color: " + description);
    this.specie = createText("Specie: " + specie);

  }
}

//llamar los datos
data.films
  //creamos un array de objetos con los datos que queremos sacar.
  .map(film => new titleAndPoster(film.title, film.poster, film.director, film.producer, film.release_date, film.rt_score))
  //creamos otro array con etiquetas (div)
  .map(Element => divCreator(Element))
  //mostrar los objetos en una sección particular del HTML.
  .forEach(movieDiv => document.getElementById("filmsZone").appendChild(movieDiv))


data.films.flatMap(element => element.people)
  .map(element => new showCharacters(element.name, element.img, element.gender, element.age, element.eye_color, element.hair_color, element.specie))
  .map(Element => divCreatorCharacter(Element))
  .forEach(characterDiv => document.getElementById("charactersZone").appendChild(characterDiv))





// esto crea un div 
function infoDivCreator(x) {
  const movieDivHover = document.createElement("div");
  //este le da clase
  movieDivHover.className = "filmDivsHover"
  //al div creado le agregamos hijos con información tipo texto
  movieDivHover.appendChild(x.title);
  movieDivHover.appendChild(x.director);
  movieDivHover.appendChild(x.producer);
  movieDivHover.appendChild(x.release_date);
  movieDivHover.appendChild(x.rt_score);
  return movieDivHover
}

function divInfoCharacter(x) {
  const movieDivHover = document.createElement("div");
  //este le da clase
  movieDivHover.className = "filmDivsHover"
  //al div creado le agregamos hijos con información tipo texto
  movieDivHover.appendChild(x.title);
  movieDivHover.appendChild(x.director);
  movieDivHover.appendChild(x.release_date);
  movieDivHover.appendChild(x.rt_score);
  movieDivHover.appendChild(x.specie)
  return movieDivHover
}


//crea el div para que se organice el conjunto de datos
function divCreator(x) {
  //se crea el div
  const movieDiv = document.createElement("div");
  //le da una clase para poder manipularlos en CSS 
  movieDiv.className = "filmDivs"
  // creamos un hijo con el tag img
  movieDiv.appendChild(x.poster);
  //a el div anterior le damos otro div(hijo) con la información 
  movieDiv.appendChild(infoDivCreator(x))
  return movieDiv
}

//crea el div para que se organice el conjunto de datos
function divCreatorCharacter(x) {
  //se crea el div
  const characterDiv = document.createElement("div");
  //le da una clase para poder manipularlos en CSS 
  characterDiv.className = "filmDivs"
  // creamos un hijo con el tag img
  characterDiv.appendChild(x.poster);
  //a el div anterior le damos otro div(hijo) con la información 
  characterDiv.appendChild(divInfoCharacter(x))
  return characterDiv
}


//creamos un tag img
function createImage(uri) {
  //crea
  const image = document.createElement('img');
  //aqui le indicamos al img que el valor de source es el URL de la imagen
  image.src = uri
  //le damos una clase a los posters
  image.className = "posterImages";
  return image
}

//creamos un tag p para el texto
function createText(textMovie) {
  //aqui se crea el elemento "p"
  const text = document.createElement("p");
  //el contenido texto obtendrá el valor del argumento ingresado
  text.innerText = textMovie;
  //le damos la clase
  text.className = "infoText";
  return text
}

//agregamos el evento para que al seleccionar el director que quiere se dispare
//la función de filtrar
let directorArray;
let producerArray;
directores.addEventListener("change", function () {
  filterSection.innerHTML = "";
  const filteredByDirector = filterDirector(directores.value, data);
  directorArray = filteredByDirector;
  filteredByDirector.map(film => new titleAndPoster(film.title, film.poster, film.director, film.producer, film.release_date, film.rt_score))
    .map(Element => divCreator(Element))
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("filmsZone").style.display = "none";
  //deberia mostrar el resultado del filtro
  document.getElementById("filterSection").style.display = "flex";
})


productores.addEventListener("change", function () {
  const dataBase = directorArray ? directorArray : data.films;
  //limpiar la pagina
  filterSection.innerHTML = "";
  //utilizar la funcion filtrar
  const filteredByProducer = filterProducer(productores.value, dataBase);
  producerArray = filteredByProducer
  //devuelve un array con objetos del resultado del filtro
  filteredByProducer.map(film => new titleAndPoster(film.title, film.poster, film.director, film.producer, film.release_date, film.rt_score))
    //crea array con los divs 
    .map(Element => divCreator(Element))
    //poner los divs en pantalla
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("filmsZone").style.display = "none";
  document.getElementById("filterSection").style.display = "flex";
})


añoDeEstreno.addEventListener("change", function () {
  const dataSort1 = producerArray?producerArray:data.films || directorArray? directorArray:data.films;
  filterSection.innerHTML = "";
  //utilizar la funcion filtrar
  const nuevoOrden = sortDataYear(añoDeEstreno.value, dataSort1);
  //devuelve un array con objetos del resultado del filtro
  nuevoOrden.map(film => new titleAndPoster(film.title, film.poster, film.director, film.producer, film.release_date, film.rt_score))
    //crea array con los divs 
    .map(Element => divCreator(Element))
    //poner los divs en pantalla
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("filmsZone").style.display = "none";
  //deberia mostrar el resultado del filtro
  document.getElementById("filterSection").style.display = "flex";
})

let movieArray;
let specieArray;
characterMovies.addEventListener("change", function () {
  filterSection.innerHTML = "";
  const characterPerMovie = characterMovie(characterMovies.value, data);
  movieArray = characterPerMovie
  characterPerMovie.map(film => new showCharacters(film.name, film.img, film.gender, film.age, film.eye_color, film.hair_color, film.specie))
    .map(Element => divCreatorCharacter(Element))
    .forEach(Element => filterSection.appendChild(Element))
  document.getElementById("charactersZone").style.display = "none";
  document.getElementById("filterSection").style.display = "flex";
})


especie.addEventListener("change", function () {
  const dataBase = movieArray? movieArray:data.films;
  //limpiar la pagina
  filterSection.innerHTML = "";
  //utilizar la funcion filtrar
  const filteredBySpecie = filterSpecies(especie.value, dataBase);
  specieArray = filteredBySpecie
  //devuelve un array con objetos del resultado del filtro
  filteredBySpecie.map(film => new showCharacters(film.name, film.img, film.gender, film.age, film.eye_color, film.hair_color, film.specie))
    //crea array con los divs 
    .map(Element => divCreatorCharacter(Element))
    //poner los divs en pantalla
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("charactersZone").style.display = "none";
  //deberia mostrar el resultado del filtro
  document.getElementById("filterSection").style.display = "flex";
})

sortAZ.addEventListener("change", function () {
  const dataBase = specieArray? specieArray:data.films;
  filterSection.innerHTML = "";
  const characterSortAZ = functionSortAZ(sortAZ.value, dataBase);
  characterSortAZ.map(film => new showCharacters(film.name, film.img, film.gender, film.age, film.eye_color, film.hair_color, film.specie))
    .map(Element => divCreatorCharacter(Element))
    .forEach(Element => filterSection.appendChild(Element))
  document.getElementById("charactersZone").style.display = "none";
  document.getElementById("filterSection").style.display = "flex";
})


rightAnswerOne.addEventListener("click", function () {
  document.getElementById("answerOne").innerText = genderTrivia(data);
  rightAnswerOne.style.backgroundColor = "#7EDE87";
  wrongAnswerOne.style.backgroundColor = "#DF5555";
})

wrongAnswerOne.addEventListener("click", function () {
  document.getElementById("answerOne").innerText = genderTrivia(data);
  wrongAnswerOne.style.backgroundColor = "#DF5555";
  rightAnswerOne.style.backgroundColor = "#7EDE87";
})

rightAnswerTwo.addEventListener("click", function () {
  document.getElementById("answerTwo").innerText = specieTrivia(data);
  rightAnswerTwo.style.backgroundColor = "#7EDE87"
  wrongAnswerTwo.style.backgroundColor = "#DF5555";
})

wrongAnswerTwo.addEventListener("click", function () {
  document.getElementById("answerTwo").innerText = specieTrivia(data);
  rightAnswerTwo.style.backgroundColor = "#7EDE87"
  wrongAnswerTwo.style.backgroundColor = "#DF5555";
})


rightAnswerThree.addEventListener("click", function () {
  document.getElementById("answerThree").innerText = ageTrivia(data);
  rightAnswerThree.style.backgroundColor = "#7EDE87"
  wrongAnswerThree.style.backgroundColor = "#DF5555";
})

wrongAnswerThree.addEventListener("click", function () {
  document.getElementById("answerThree").innerText = ageTrivia(data);
  rightAnswerThree.style.backgroundColor = "#7EDE87"
  wrongAnswerThree.style.backgroundColor = "#DF5555";
})

triviaAgain.addEventListener("click", function () {
  for (let i = 0; i < 6; i++) {
    document.getElementsByClassName("Answer")[i].style.backgroundColor = "#f0f6f7";
  }
  for (let i = 0; i < 3; i++) {
    document.getElementsByClassName("answerText")[i].innerText = "";
  }
})

