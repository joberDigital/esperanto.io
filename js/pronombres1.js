var parrafo = document.getElementById("parrafo");
const lista_cursos = [];
lista_cursos.push({
  newTitle: "hi",
  titulo: "pronombres",
  texto: "YO",
  textoPosesivo: "MI\nMIO",
  imagen2: "MI",
  pronombrePosesivo: "MIA",
  enlace: "POSESIVOS",
});
lista_cursos.push({
  titulo: "PERSONALES",
  texto: "TU",
  textoPosesivo: "TU\nTUYO",
  imagen2: "VI",
  pronombrePosesivo: "VIA",
  enlace: "POSESIVOS",
});
lista_cursos.push({
  titulo: "pronombres",
  texto: "EL",
  textoPosesivo: "SU\nSUYO \n(De él)",
  imagen2: "LI",
  pronombrePosesivo: "LIA",
  enlace: "POSESIVOS",
});
lista_cursos.push({
  titulo: "PERSONALES",
  texto: "ELLA",
  textoPosesivo: "SU\nSUYO \n(De ella)",
  imagen2: "ŜI",
  pronombrePosesivo: "ŜIA",
  enlace: "POSESIVOS",
});
lista_cursos.push({
  titulo: "pronombres",
  texto: "ESO",
  textoPosesivo: "SU\nSUYO \n(de\nUn\nAnimal)",
  imagen2: "ĜI",
  pronombrePosesivo: "ĜIA",
  enlace: "POSESIVOS",
});
lista_cursos.push({
  titulo: "PERSONALES",
  texto: "NOSOTROS",
  textoPosesivo: "NUESTRO",
  imagen2: "NI",
  pronombrePosesivo: "NIA",
  enlace: "POSESIVOS",
});
lista_cursos.push({
  titulo: "pronombres",
  texto: "VOSOTROS",
  textoPosesivo: "SU\nSUYO\n(De\nUstedes)",
  imagen2: "VI",
  pronombrePosesivo: "VIA",
  enlace: "POSESIVOS",
});
lista_cursos.push({
  titulo: "PERSONALES",
  texto: "ELLOS",
  textoPosesivo: "SU\nSUYO\n(De Ellos)",
  imagen2: "ILLI",
  pronombrePosesivo: "ILIA",
  enlace: "POSESIVOS",
});
lista_cursos.push({
  titulo: "pronombres",
  texto: "personales",
  imagen2: "",
  enlace: "https://www.youtube.com/c/JOSEOJEDAROJAS",
});
// cuerpo de tarjeta
// agregamos elementos
var contador = 0;
const tarjetasPosesivo = document.createElement("div");
const tituloPosesivo = document.createElement("div");
const botonPosesivo = document.createElement("a");
const imagen2Posesivo = document.createElement("div");
const textoPosesivo = document.createElement("h5");
const tarjetaPosesivo = document.createElement("div");
const tarjeta2Posesivo = document.createElement("div");
const colspan1Posesivo = document.createElement("div");
const colspan2Posesivo = document.createElement("div");
const colspan3Posesivo = document.createElement("div");
const colspan4Posesivo = document.createElement("div");
const figurePosesivo = document.createElement("div");
const cuerpoPosesivo = document.createElement("div");
tarjetaPosesivo.classList.add("card");
tarjeta2Posesivo.classList.add("card2");
colspan1Posesivo.classList.add("mb-3");
colspan2Posesivo.classList.add("g-0");
colspan3Posesivo.classList.add("col-md-4");
colspan4Posesivo.classList.add("col-md-8");
cuerpoPosesivo.classList.add("card-body");
// curso info
tarjetasPosesivo.classList.add("coordenada");
imagen2Posesivo.classList.add("titulo", "card-title");
tituloPosesivo.classList.add("card-text");
botonPosesivo.classList.add("btn");
botonPosesivo.classList.add("btn-primary");
textoPosesivo.classList.add("card-text");
const tarjetas = document.createElement("div");
const tarjeta = document.createElement("div");
const tarjeta2 = document.createElement("div");
const boton = document.createElement("a");
const texto = document.createElement("p");
const titulo = document.createElement("h5");
const imagen2 = document.createElement("div");
const colspan1 = document.createElement("div");
const colspan2 = document.createElement("div");
const colspan3 = document.createElement("div");
const colspan4 = document.createElement("div");
const figure = document.createElement("div");
const cuerpo = document.createElement("div");
//cuerpo de tarjeta
imagen2.classList.add("titulo");
tarjeta.classList.add("card");
tarjeta2.classList.add("card2");
colspan1.classList.add("mb-3");
colspan2.classList.add("g-0");
colspan3.classList.add("col-md-4");
colspan4.classList.add("col-md-8");
cuerpo.classList.add("card-body");
// curso info
tarjetas.classList.add("img-fluid");
titulo.classList.add("card-title");
texto.classList.add("card-text");
boton.classList.add("btn");
boton.classList.add("btn-primary");
tarjetas.classList.add("img-fluid");
titulo.classList.add("card-title");
texto.classList.add("card-text");
boton.classList.add("btn");
boton.classList.add("btn-primary");
const verificar1 = () => {
  tituloPosesivo.innerText = lista_cursos[contador].textoPosesivo;
  imagen2Posesivo.innerText = lista_cursos[contador].pronombrePosesivo;
  botonPosesivo.innerText = lista_cursos[contador].enlace;
  texto.innerText = lista_cursos[contador].imagen2;
  imagen2.innerText = lista_cursos[contador].texto;
  titulo.innerText = lista_cursos[contador].titulo;
  boton.setAttribute("href", lista_cursos.enlace);
  boton.innerText = "+PRONOMOJ";
  // agregamos elementos
  colspan1.appendChild(colspan2);
  colspan2.appendChild(tarjeta2);
  colspan2.appendChild(imagen2);
  colspan1.appendChild(figure);
  colspan2.appendChild(tarjeta2);
  colspan1.appendChild(colspan2);
  tarjeta.appendChild(colspan1);
  cuerpo.appendChild(titulo);
  cuerpo.appendChild(texto);
  cuerpo.appendChild(boton);
  tarjeta2.appendChild(cuerpo);
  tarjetas.appendChild(tarjeta);
  //cuerpo de tarjeta
  colspan1Posesivo.appendChild(colspan2Posesivo);
  colspan2Posesivo.appendChild(tarjeta2Posesivo);
  colspan2Posesivo.appendChild(imagen2Posesivo);
  colspan1Posesivo.appendChild(figurePosesivo);
  colspan2Posesivo.appendChild(tarjeta2Posesivo);
  colspan1Posesivo.appendChild(colspan2Posesivo);
  tarjetaPosesivo.appendChild(colspan1Posesivo);
  cuerpoPosesivo.appendChild(tituloPosesivo);
  cuerpoPosesivo.appendChild(textoPosesivo);
  cuerpoPosesivo.appendChild(botonPosesivo);
  tarjeta2Posesivo.appendChild(cuerpoPosesivo);
  tarjetasPosesivo.appendChild(tarjetaPosesivo);

  const contenedor = document.querySelector("#container");
  contenedor.appendChild(tarjeta);
  contenedor.appendChild(tarjetasPosesivo);
  for (let i = 0; i < lista_cursos - length; i++) {
    contenedor.appendChild(parrafo);
  }
  contador++;
  if (contador == lista_cursos.length - 1) {
    contador = 0;
  }
};
setInterval(verificar1, 3000);
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);
function circle(x, y, z, color) {
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, z, 0, 2 * 3.14);
  pincel.font = "40px serif ";
  pincel.strokeText("➕ A", x - 27, y + 13);
  pincel.fill();
}
var x = 200;
var y = 200;
var containe = 1;
var band = false;
function setInterv() {
  clearDisplay();
  circle(x, y, 50, "blue");
  circle(x, y, 25, "white");
  circle(x, y, 20, "transparent");
  if (x == 300) {
    band = true;
  }
  if (band == true) {
    x--;
  }
  if (x == 100) {
    band = false;
  }
  if (band == false) {
    x = x + containe;
  }
}
setInterval(setInterv, 10);
function clearDisplay() {
  pincel.clearRect(0, 0, 600, 400);
}
