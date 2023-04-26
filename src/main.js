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


//creamos un tag img
function createImage(url) {
  //creacion del tag img
  const image = document.createElement('img');
  //aqui le indicamos al img que el valor de source es el URL de la imagen
  image.src = url;
  //le damos una clase a los posters
  image.className = "posterImages";
  return image
}

//creamos un tag p para el texto
function createText(info) {
  //aqui se crea el elemento "p"
  const text = document.createElement("p");
  //el contenido texto obtendrá el valor del argumento ingresado
  text.innerText = info;
  //le damos la clase
  text.className = "infoText";
  return text
}


//constructor de objetos con datos especificos a mostrar (peliculas)
class titleAndPoster {
  constructor(titleOrName, poster, directorOrGender, producerOrAge, release_dateOrEyeColor, rt_scoreOrSpecie) {
    //"this" indica el objeto en concreto que se utilizará (o algo así)
    this.poster = createImage(poster);
    this.titleOrName = createText("Title: " + "'" + titleOrName + "'");
    this.directorOrGender = createText("Director: " + directorOrGender);
    this.producerOrAge = createText("Producer: " + producerOrAge);
    this.release_dateOrEyeColor = createText("Release date: " + release_dateOrEyeColor);
    this.rt_scoreOrSpecie = createText("Score: " + rt_scoreOrSpecie);

  }
}

//constructor de objetos con datos especificos a mostrar
class showCharacters {
  constructor(titleOrName, poster, directorOrGender, producerOrAge, release_dateOrEyeColor, rt_scoreOrSpecie) {
    //"this" indica el objeto en concreto que se utilizará (o algo así)
    this.titleOrName = createText("Name: " + titleOrName);
    this.poster = createImage(poster);
    this.directorOrGender = createText("Gender: " + directorOrGender);
    this.producerOrAge = createText("Age: " + producerOrAge);
    this.release_dateOrEyeColor = createText("Eye Color: " + release_dateOrEyeColor);
    this.rt_scoreOrSpecie = createText("Specie: " + rt_scoreOrSpecie);
  }
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

// esto crea un div 
function infoDivCreator(x) {
  const infoDiv = document.createElement("div");
  //este le da clase
  infoDiv.className = "filmDivsHover"
  //al div creado le agregamos hijos con información tipo texto
  infoDiv.appendChild(x.titleOrName);
  infoDiv.appendChild(x.directorOrGender);
  infoDiv.appendChild(x.producerOrAge);
  infoDiv.appendChild(x.release_dateOrEyeColor);
  infoDiv.appendChild(x.rt_scoreOrSpecie);
  return infoDiv
}


//llamar los datos
data.films
  //creamos un array de objetos con los datos que queremos sacar.
  .map(film => new titleAndPoster(film.title, film.poster, film.director, film.producer, film.release_date, film.rt_score))
  //creamos otro array que contiene divs con la informacion y poster de la pelicula.
  .map(Element => divCreator(Element))
  //por cada elemento (movieDiv) que entra se crea un "hijo" dentro de la seccion filmZone.
  .forEach(movieDiv => filmsZone.appendChild(movieDiv))


//llamar datos
data.films
  //hacemos un flatmap para solo obtener el array people.
  .flatMap(element => element.people)
  //del array anterior obtenemos un nuevo array de objetos con la informacion que queremos mostrar en pantalla.
  .map(element => new showCharacters(element.name, element.img, element.gender, element.age, element.eye_color, element.specie))
  //desde el anterior array obtenemos otro array con divs que contienen la informacion e imagen del personaje.
  .map(Element => divCreator(Element))
  //por cada elemento (characterDiv) se crea un "hijo" dentro de la seccion characterZone.
  .forEach(movieDiv => charactersZone.appendChild(movieDiv))


let directorArray;
let producerArray;
//agregamos el evento para que al seleccionar el director que quiere se dispare
//la función de filtrar
directors.addEventListener("change", function () {
  //se limpia la seccion filterSection para evitar que el resultado anterior se muestre por pantalla.
  filterSection.innerHTML = "";
  //se filtran solo las peliculas del director elegido y se guardan en la constante.
  const filteredByDirector = filterDirector(directors.value, data);
  //se guarda el valor de la constante en la variable para usar los filtros en conjunto.
  directorArray = filteredByDirector;
  //se crea un array de objetos,solo con el resultado del filtro.
  filteredByDirector.map(film => new titleAndPoster(film.title, film.poster, film.director, film.producer, film.release_date, film.rt_score))
    //se crean divs que contienen la informacion e imagen de las peliculas.
    .map(Element => divCreator(Element))
    //por cada elemento del map anterior, se agrega ese elemento(div) como un "hijo" a filterSection.
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  filmsZone.style.display = "none";
  //muestra el resultado del filtro
  filterSection.style.display = "flex";
  //se limpia el campo de "producers"
  producers.value = "producers"

})

//agregamos el evento para que al seleccionar el productor que quiere se dispare
//la función de filtrar
producers.addEventListener("change", function () {
  //se crea una constante que guardara el valor de directores si se uso, sino utilizara data.
  const dataBase = directorArray ? directorArray : data.films;
  //se limpia la seccion filterSection para evitar que el resultado anterior se muestre por pantalla.
  filterSection.innerHTML = "";
  //se filtran solo las peliculas del productor elegido y se guardan en la constante.
  const filteredByProducer = filterProducer(producers.value, dataBase);
  //se guarda el valor de la constante en la variable para usar los filtros en conjunto.
  producerArray = filteredByProducer
  //devuelve un array con objetos del resultado del filtro
  filteredByProducer.map(film => new titleAndPoster(film.title, film.poster, film.director, film.producer, film.release_date, film.rt_score))
    //se crean divs que contienen la informacion e imagen de las peliculas.
    .map(Element => divCreator(Element))
    //por cada elemento del map anterior, se agrega ese elemento(div) como un "hijo" a filterSection.
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  filmsZone.style.display = "none";
  //muestra el resultado del filtro
  filterSection.style.display = "flex";
})

//agregamos el evento para que al seleccionar el orden que quiere se dispare
//la función de sort.
releaseDate.addEventListener("change", function () {
  //se crea una constante que guardara el valor de directores si se uso, sino utilizara productores.
  const dataSort1 = producers.value === "producers" ? directorArray : producerArray;
  //se crea una constante que guardara el valor de data si no se escogio nada en productor y director.
  const dataSort = dataSort1 === undefined ? data.films : dataSort1;
  //se limpia la seccion filterSection para evitar que el resultado anterior se muestre por pantalla.
  filterSection.innerHTML = "";
  //utilizar la funcion Sort, para ordenar las peliculas por fecha de estreno.
  const sortedByDate = sortDataYear(releaseDate.value, dataSort);
  //devuelve un array con objetos del resultado del sort.
  sortedByDate.map(film => new titleAndPoster(film.title, film.poster, film.director, film.producer, film.release_date, film.rt_score))
    //se crean divs que contienen la informacion e imagen de las peliculas.
    .map(Element => divCreator(Element))
    //por cada elemento del map anterior, se agrega ese elemento(div) como un "hijo" a filterSection.
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el sort.
  filmsZone.style.display = "none";
  //muestra el resultado del sort.
  filterSection.style.display = "flex";
})



let movieArray;
let specieArray;
characterMovies.addEventListener("change", function () {
  filterSection.innerHTML = "";
  const characterPerMovie = characterMovie(characterMovies.value, data);
  movieArray = characterPerMovie;
  characterPerMovie.map(film => new showCharacters(film.name, film.img, film.gender, film.age, film.eye_color, film.hair_color, film.specie))
    .map(Element => divCreator(Element))
    .forEach(Element => filterSection.appendChild(Element))
  charactersZone.style.display = "none";
  filterSection.style.display = "flex";
  specie.value = "specie"
})


specie.addEventListener("change", function () {
  //se crea una constante que guardara el valor de los personajes de la pelicula si se escogio, sino se utiliza la data y a esta se le extrae solo los personajes.
  const dataBase = movieArray ? movieArray : data.films.flatMap(element => element.people);
  filterSection.innerHTML = "";
  const filteredBySpecie = filterSpecies(specie.value, dataBase);
  specieArray = filteredBySpecie;
  filteredBySpecie.map(film => new showCharacters(film.name, film.img, film.gender, film.age, film.eye_color, film.hair_color, film.specie))
    .map(Element => divCreator(Element))
    .forEach(Element => filterSection.appendChild(Element))
  charactersZone.style.display = "none";
  filterSection.style.display = "flex";
})


sortAZ.addEventListener("change", function () {
  //se crea una constante que guardara el valor de los personajes de la pelicula si se escogio una pelicula, sino utilizara el array de especies.
  const dataSortValue = specie.value === "specie" ? movieArray : specieArray;
  //se crea una constante que guardara el valor de data si no se escogio nada en pelicula y especie.
  const dataSort = dataSortValue === undefined ? data.films.flatMap(element => element.people) : dataSortValue;
  filterSection.innerHTML = "";
  const characterSortAZ = functionSortAZ(sortAZ.value, dataSort);
  characterSortAZ.map(film => new showCharacters(film.name, film.img, film.gender, film.age, film.eye_color, film.hair_color, film.specie))
    .map(Element => divCreator(Element))
    .forEach(Element => filterSection.appendChild(Element))
  charactersZone.style.display = "none";
  filterSection.style.display = "flex";
})

//evento muestra la respuesta correcta.
rightAnswerOne.addEventListener("click", function () {
  //inserta la respuesta en el html
  document.getElementById("answerOne").innerText = genderTrivia(data);
  //cambio de color a verde o rojo.
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

//evento permite tomar la trivia nuevamente.
triviaAgain.addEventListener("click", function () {
  //se recorre (Answer) para volver los elementos a default.
  for (let i = 0; i < 6; i++) {
    document.getElementsByClassName("Answer")[i].style.backgroundColor = "#f0f6f7";
  }
  //se recorre (AnswerText) para volver los elementos a default.
  for (let i = 0; i < 3; i++) {
    document.getElementsByClassName("answerText")[i].innerText = "";
  }
})

