import { filterDirector, sortDataYear, filterProducer, filterSpecies, characterMovie, functionSortAZ, genderTrivia, specieTrivia, ageTrivia } from './data.js';
import data from './data/ghibli/ghibli.js';
//llamaos a todos los elementos del html 
const aboutHeader = document.getElementById("aboutHeader");
const about = document.getElementById("about");
const aboutSection = document.getElementById("aboutSection");
const homeHeader = document.getElementById("homeHeader");
const refreshHome = document.getElementById("refreshHome");
const navButtons = document.getElementById("nav-buttons");
const movies = document.getElementById("movies");
const homeContent = document.getElementById("home-Content");
const refreshMovies = document.getElementById("refreshMovies");
const filmsZone = document.getElementById("filmsZone")
const directors = document.getElementById("directors");
const producers = document.getElementById("producers");
const releaseDate = document.getElementById("releaseDate");
const refreshCharacters = document.getElementById("refreshCharacters");
const characters = document.getElementById("characters");
const specie = document.getElementById("specie");
const characterMovies = document.getElementById("characterMovies");
const sortAZ = document.getElementById("sortAZ");
const filterSection = document.getElementById("filterSection");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const moreHeader = document.getElementById("moreHeader")
const more = document.getElementById("more");
const moreSection = document.getElementById("moreSection");
const trivia = document.getElementById("trivia");
const triviaHeader = document.getElementById("triviaHeader");
const rightAnswerOne = document.getElementById("rightAnswerOne");
const wrongAnswerOne = document.getElementById("wrongAnswerOne");
const rightAnswerTwo = document.getElementById("rightAnswerTwo");
const wrongAnswerTwo = document.getElementById("wrongAnswerTwo");
const rightAnswerThree = document.getElementById("rightAnswerThree");
const wrongAnswerThree = document.getElementById("wrongAnswerThree");
const triviaAgain = document.getElementById("triviaAgain");
const triviaSection = document.getElementById("triviaSection");
const content = document.getElementById("content");
const buttonZone = document.getElementById("buttonZone");
const movieHeaderSection = document.getElementById("movieHeaderSection");
const charactersZone = document.getElementById("charactersZone");
const characterHeaderSection = document.getElementById("characterHeaderSection");
const characterContent = document.getElementById("characterContent");

//evento para abrir el botón del menu hamburguesa en los media Queries
openMenu.addEventListener("click", function () {
  navButtons.classList.add("visible");
  navButtons.style.display = "flex";
  openMenu.style.display = "none";

})
//evento para cerrar el botón del menu hamburguesa en los media Queries
closeMenu.addEventListener("click", function () {
  navButtons.classList.remove("visible");
  navButtons.style.display = "none";
  openMenu.style.display = "block";
})


//evento para volver a home, desde home, trivia, more y about
refreshHome.addEventListener("click", function () {
  history.go(0)
})

//evento para volver a home, desde movies
refreshMovies.addEventListener("click", function () {
  history.go(0)
  producers.value = "producers"
  directors.value = "directors"
})
//evento para volver a home desde characters
refreshCharacters.addEventListener("click", function () {
  history.go(0)
  characterMovies.value = "movies"
  specie.value = "specie"

})

//evento para esconder o mostrar los elementos necesarios
about.addEventListener("click", function () {
  aboutHeader.style.display = "flex";
  aboutSection.style.display = "flex";
  homeHeader.style.display = "none";
  homeContent.style.display = "none";
  moreHeader.style.display = "none";
  moreSection.style.display = "none";
  filmsZone.style.display = "none";
  triviaSection.style.display = "none";
  triviaHeader.style.display = "none";
  movieHeaderSection.style.display = "none";
})

//evento para esconder o mostrar los elementos necesarios
movies.addEventListener("click", function () {
  aboutHeader.style.display = "none";
  aboutSection.style.display = "none";
  homeHeader.style.display = "none";
  homeContent.style.display = "none";
  filmsZone.style.display = "flex";
  content.style.display = "flex";
  buttonZone.style.display = "none";
  movieHeaderSection.style.display = "flex";
  charactersZone.style.display = "none";
  moreHeader.style.display = "none";
  triviaSection.style.display = "none";
  triviaHeader.style.display = "none";
  moreSection.style.display = "none";
})

//evento para esconder o mostrar los elementos necesarios
more.addEventListener("click", function () {
  aboutHeader.style.display = "none";
  aboutSection.style.display = "none";
  homeHeader.style.display = "none";
  homeContent.style.display = "none";
  moreHeader.style.display = "flex";
  moreSection.style.display = "flex";
  triviaSection.style.display = "none";
  triviaHeader.style.display = "none";
})

//evento para esconder o mostrar los elementos necesarios
characters.addEventListener("click", function () {
  aboutHeader.style.display = "none";
  aboutSection.style.display = "none";
  homeHeader.style.display = "none";
  homeContent.style.display = "none";
  buttonZone.style.display = "none";
  characterHeaderSection.style.display = "flex";
  characterContent.style.display = "flex";
  charactersZone.style.display = "flex";
  triviaHeader.style.display = "none";
  triviaSection.style.display = "none";
  moreHeader.style.display = "none";
  moreSection.style.display = "none";
})

//evento para esconder o mostrar los elementos necesarios
trivia.addEventListener("click", function () {
  aboutHeader.style.display = "none";
  aboutSection.style.display = "none";
  homeHeader.style.display = "none";
  homeContent.style.display = "none";
  filmsZone.style.display = "none";
  content.style.display = "none";
  movieHeaderSection.style.display = "none";
  moreHeader.style.display = "none";
  moreSection.style.display = "none";
  charactersZone.style.display = "none";
  triviaSection.style.display = "grid";
  triviaHeader.style.display = "flex";
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
  .forEach(movieDiv => filmsZone.appendChild(movieDiv))


data.films.flatMap(element => element.people)
  .map(element => new showCharacters(element.name, element.img, element.gender, element.age, element.eye_color, element.hair_color, element.specie))
  .map(Element => divCreatorCharacter(Element))
  .forEach(characterDiv => charactersZone.appendChild(characterDiv))




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
//let films = data.films;
directors.addEventListener("change", function () {
  filterSection.innerHTML = "";
  const filteredByDirector = filterDirector(directors.value, data);
  directorArray = filteredByDirector;
  filteredByDirector.map(film => new titleAndPoster(film.title, film.poster, film.director, film.producer, film.release_date, film.rt_score))
    .map(Element => divCreator(Element))
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  filmsZone.style.display = "none";
  //deberia mostrar el resultado del filtro
  filterSection.style.display = "flex";
  producers.value = "producers"


})


producers.addEventListener("change", function () {
  const dataBase = directorArray ? directorArray : data.films;
  //limpiar la pagina
  filterSection.innerHTML = "";
  //utilizar la funcion filtrar
  const filteredByProducer = filterProducer(producers.value, dataBase);
  producerArray = filteredByProducer
  //devuelve un array con objetos del resultado del filtro
  filteredByProducer.map(film => new titleAndPoster(film.title, film.poster, film.director, film.producer, film.release_date, film.rt_score))
    //crea array con los divs 
    .map(Element => divCreator(Element))
    //poner los divs en pantalla
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  filmsZone.style.display = "none";
  filterSection.style.display = "flex";

})


releaseDate.addEventListener("change", function () {
  const dataSort1 = producers.value === "producers" ? directorArray : producerArray;
  const dataSort = dataSort1 === undefined ? data.films : dataSort1;
  //const dataSort2 = directorArray?directorArray:data.films;
  filterSection.innerHTML = "";
  //utilizar la funcion filtrar
  const sortedByDate = sortDataYear(releaseDate.value, dataSort);
  //devuelve un array con objetos del resultado del filtro
  sortedByDate.map(film => new titleAndPoster(film.title, film.poster, film.director, film.producer, film.release_date, film.rt_score))
    //crea array con los divs 
    .map(Element => divCreator(Element))
    //poner los divs en pantalla
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  filmsZone.style.display = "none";
  //deberia mostrar el resultado del filtro
  filterSection.style.display = "flex";
})



let movieArray;
let specieArray;
characterMovies.addEventListener("change", function () {
  filterSection.innerHTML = "";
  const characterPerMovie = characterMovie(characterMovies.value, data);
  movieArray = characterPerMovie;
  characterPerMovie.map(film => new showCharacters(film.name, film.img, film.gender, film.age, film.eye_color, film.hair_color, film.specie))
    .map(Element => divCreatorCharacter(Element))
    .forEach(Element => filterSection.appendChild(Element))
  charactersZone.style.display = "none";
  filterSection.style.display = "flex";
  specie.value = "specie"
})


specie.addEventListener("change", function () {
  const dataBase = movieArray ? movieArray : data.films.flatMap(element => element.people);
  //limpiar la pagina
  filterSection.innerHTML = "";
  //utilizar la funcion filtrar
  const filteredBySpecie = filterSpecies(specie.value, dataBase);
  specieArray = filteredBySpecie;
  //devuelve un array con objetos del resultado del filtro
  filteredBySpecie.map(film => new showCharacters(film.name, film.img, film.gender, film.age, film.eye_color, film.hair_color, film.specie))
    //crea array con los divs 
    .map(Element => divCreatorCharacter(Element))
    //poner los divs en pantalla
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  charactersZone.style.display = "none";
  //deberia mostrar el resultado del filtro
  filterSection.style.display = "flex";
})

sortAZ.addEventListener("change", function () {
  const dataSortValue = specie.value === "specie" ? movieArray : specieArray;
  const dataSort = dataSortValue === undefined ? data.films.flatMap(element => element.people) : dataSortValue;
  filterSection.innerHTML = "";
  const characterSortAZ = functionSortAZ(sortAZ.value, dataSort);
  characterSortAZ.map(film => new showCharacters(film.name, film.img, film.gender, film.age, film.eye_color, film.hair_color, film.specie))
    .map(Element => divCreatorCharacter(Element))
    .forEach(Element => filterSection.appendChild(Element))
  charactersZone.style.display = "none";
  filterSection.style.display = "flex";
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

