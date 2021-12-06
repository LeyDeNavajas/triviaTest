// Declarando e inicializando variables
let pantallaActual = 0;
let pantallaActual2 = 0;
let puntosTemaUno = 0;
let puntosTemaDos = 0;

// Guardamos todas las pantallas en un arreglo para acceder a ellas
const pantallasTemaUno = [
  "pantallaPreguntaUno",
  "pantallaPreguntaDos",
  "pantallaPreguntaTres",
  "pantallaFinal",
];

const pantallasTemaDos = [
  "pantallaPreguntaUnoTemaDos",
  "pantallaPreguntaDosTemaDos",
  "pantallaPreguntaTresTemaDos",
  "pantallaFinal",
];
// Declaramos las funciones hideElement y showElement que recibe element como parametro

function hideElement(element) {
  element.classList.add("hidden");
}

function showElement(element) {
  element.classList.remove("hidden");
}

//esta funcion va a llamar a la variable con el nombre jugador y va tomar su valor del inputque es de texto, despues va a llamar
//a la variable nombre y va a guardar su valor y mostrarlo en donde queremos la variable error nombre vale por un string que aparece
//si el jugador no pone su nombre, si lo pone cambia de pantalla
function guardarNombre() {
  const nombreJugador = document.getElementById("nombreJugador");
  const nombre = document.getElementById("nombre");

  const errorNombre = document.getElementById("errorNombre");

  if (!nombreJugador) {
    showElement(errorNombre);
  } else {
    nombre.innerText = "Hola " + nombreJugador.value; //aqui concatenar el hola. se creo varible, se le sumo la cadena al nombre.
    hideElement(document.getElementById("pantallaPrincipal"));
    showElement(document.getElementById("pantallaTemas"));
  }
}

//con esto volvemos a la pantalla de los temas al terminar de jugart
function regresarTemas() {
  hideElement(document.getElementById("pantallaFinal"));
  showElement(document.getElementById("pantallaTemas"));

  pantallaActual = 0;
  pantallaActual2 = 0;
  puntosTemaDos = 0;
  puntosTemaUno = 0;
}
//////////////////////////COMIENZO TEMA UNO///////////////////////////////////////////////////////////////////////////////
function comenzarTemaUno() {
  hideElement(document.getElementById("pantallaTemas"));
  showElement(document.getElementById("pantallaPreguntaUno"));
}
//voy a llamar a esta funcion de siguiente pantalla que se activa al presionar su boton, lo que hace es esconder
//la pantalla con el elemento de cadena en el arreglo por su nombre para despues llamar al elemento que sigue mostrandolo
function siguientePantalla(event) {
  puntosTemaUno += parseInt(event.target.dataset.puntos);
  //Parseamos porque nuestros puntos del html estan en un string y queremos convertirlos a numero,
  //porque si no solo se van a concatenar, por ejemplo en vez de ser 1+1 =2, pues seria 11.

  const puntos = document.getElementById("puntos");
  puntos.innerText = puntosTemaUno;
  //llamamos al id puntos y el innertext de los puntos son los puntos del tema uno
  // pantalla actual comienza su valor en cero, por eso al llamar a pantalla actual cuando le sumamos uno aparece
  hideElement(document.getElementById(pantallasTemaUno[pantallaActual]));
  showElement(document.getElementById(pantallasTemaUno[pantallaActual + 1]));

  pantallaActual = pantallaActual + 1;
}
///////////FIN TEMA UNO///////////////////////////////////////////////////////////////////////////////////////
//:)

//:)
///////COMIENZO TEMA DOS/////////////////////////////////////////////////////////////////////////////////////

function comenzarTemaDos() {
  hideElement(document.getElementById("pantallaTemas"));
  showElement(document.getElementById("pantallaPreguntaUnoTemaDos"));
}
//cambio de pantallas tema 2
function siguientePantallaTemaDos(event) {
  puntosTemaDos += parseInt(event.target.dataset.puntos);

  const puntos = document.getElementById("puntos");
  puntos.innerText = puntosTemaDos;

  hideElement(document.getElementById(pantallasTemaDos[pantallaActual2]));
  showElement(document.getElementById(pantallasTemaDos[pantallaActual2 + 1]));

  pantallaActual2 = pantallaActual2 + 1;
}
///////////FIN TEMA DOS///////////////////////////////////////////////////////////////////////////////////////

//todos los elementos tema1 o tema2 que llamemos equivalen a la variable que los declaro.
function initEventListeners() {
  const respuestasTemaUno = document.querySelectorAll(".tema1");
  const respuestasTemaDos = document.querySelectorAll(".tema2");

  //por cada una de las respuestas que sea clickeada el evenListener nos lanza a siguiente pantalla del tema uno
  //y abajo esta la del dos.
  respuestasTemaUno.forEach(function (respuesta) {
    respuesta.addEventListener("click", siguientePantalla);
  });

  //
  respuestasTemaDos.forEach(function (respuesta) {
    respuesta.addEventListener("click", siguientePantallaTemaDos);
  });
  //son los botones tema uno y tema dos que se encuentran en la pantalla temas.
  const firstTopicButton = document.getElementById("temaUno");
  const secondTopicButton = document.getElementById("temaDos");
  //  1.-el cajon para traernos el boton  2.-dispara el evento  3.-el disparador  4.-el evento
  firstTopicButton.addEventListener("click", comenzarTemaUno);
  secondTopicButton.addEventListener("click", comenzarTemaDos);
}
//aqui inicializamos la funcion para que los listeners actuen
initEventListeners();
