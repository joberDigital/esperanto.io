const verbosArray = {
  comprar: "aĉeti",
  volar: "flugi",
  tener: "havi",
  poseer: "havi",
  ayudar: "helpi",
  leer: "legi",
  gustar: "ŝati",
  cerrar: "fermi",
  amar: "ami",
  comer: "manĝi",
  beber: "trinki",
  ver: "vidi",
  vender: "vendi",
  cortar: "tranĉi",
  enviar: "sendi",
  lavar: "lavi",
  cocinar: "kuiri",
  hornear: "kuiri",
  atrapar: "kapti",
  esperar: "atendi",
  "tocar un instrumento": "ludi",
  aprender: "lerni",
  escribir: "skribi",
  comprender: "kompreni",
  aceptar: "akcepti",
  necesitar: "bezoni",
  dar: "doni",
  entregar: "doni",
  enseñar: "instrui",
  usar: "instrui",
  alimentar: "nutri",
  querer: "voli",
  desear: "voli",
  construir: "konstrui",
  dar: "doni",
  entregar: "doni",
  deber: "devi",
  tener_que: "devi",
  ser: "esti",
  estar: "esti",
  correr: "kuri",
  caminar: "marŝi",
  pasear: "promeni",
  venir: "veni",
  ir: "iri",
  hablar: "paroli",
  platicar: "paroli",
  curar: "kuraci",
  "escribir una obra literaria": "verki",
  "tomar fotos": "foti",
  caer: "fali",
  "pintar un cuadro": "pentri",
  poner: "meti",
  escuchar: "aŭskulti",
  "andar en bicicleta": "bicikli",
  telefonear: "telefoni",
  intentar: "provi",
  dormir: "dormi",
  saber: "scii",
  lanzar: "ĵeti",
  nadar: "naĝi",
  responder: "respondi",
  hacer: "fari",
  oír: "aŭdi",
  observar: "rigardi",
  saludar: "saluti",
  "estar de": "farti",
  agradecer: " danki",
  desear: "deziri",
  pedir: "peti",
  creer: "kredi",
  olvidar: "forgesi",
  viajar: "vojaĝi",
  "hablar de un tema": "temi",
  reír: "ridi",
  decir: "diri",
  "tener esperanza": "esperi",
  caer: "fali",
  buscar: "serĉi",
  "estar seguro": "certi",
  funcionar: "funkcii",
  invitar: "inviti",
  cantar: "kanti",
  dejar: "lasi",
  decidir: "decidi",
  preocupar: "zorgi",
  encontrar: "trovi",
  saber: "scii",
  "tener derecho": "rajti",
  costar: "kosti",
  aparecer: "aperi",
  vencer: "venki",
  suceder: "okazi",
  pagar: "pagi",
  gritar: "krii",
  llorar: "plori",
  perdonar: "pardoni",
  "tener razón": "pravi",
  festejar: "festi",
  bailar: " danci",
  asombrarse: "miri",
  faltar: "manki",
  repetir: "ripeti",
  morir: "morti ",
  guiar: "gvidi ",
  extinguir: "estingi ",
  medir: "mezuri ",
  despertar: "veki ",
  visitar: "viziti ",
  presidir: "prezidi",
  habitar: "loĝi",
  vivir: "vivi",
  contactar: "kontakti",
  calcular: "kalkuli",
  computar: "komputi",
  tejer: "teksi",
  "viajar en": "veturi",
  "enviar por": "faksi",
  platicar: "babili",
  entretener: "amuzi",
  dudar: "dubi",
  felicitar: "gratuli",
  detener: "halti",
  castigar: "puni",
  parecer: "ŝajni",
  robar: "ŝteli",
  "estar sin": "sati",
  "tener sed": "soifi",
  "encontrarse con alguien": "renkonti",
  conocer: "koni",
  quemar: "bruli",
  elegir: "elekti",
  fumar: "fumi",
  resolver: "solvi",
  redactar: "redakti",
  copiar: "kopii",
  admirar: "admiri",
  rezar: "preĝi",
  atacar: "ataki",
  dibujar: "desegni",
  educar: "eduki",
  ganar: "gajni",
  besar: "kisi",
  coleccionar: "kolekti",
  coser: "kudri",
  ligar: "ligi",
  encargar: "mendi",
  burlarse: "moki",
  llamar: "voki",
  cerrar: "ŝlosi",
  cambiar: "ŝanĝi",
  gobernar: "regi",
  peinar: "kombi",
  cesar: "ĉesi",
  "dar a luz": "naski",
  nacer: "naskiĝi",
  suponer: "supozi",
  recomendar: "ekomendi",
  prometer: "promesi",
  defender: "defendi",
  contratar: "dungi",
  "tomar nota": "noti",
  ocupar: "okupi",
  sufrir: "suferi",
  bañar: "bani",
  golpear: "bati",
  examinar: "esplori",
  opinar: "opinii",
  llover: "pluvi",
  preferir: "preferi",
  esconder: "kaŝi",
  anunciar: "anonci",
};
const container = document.createElement("div");
const seccion1Botones = document.createElement("div");
const seccion1 = document.createElement("div");
const seccion2 = document.createElement("div");

const botonInput = document.createElement("input");
const botonClick = document.createElement("div");

const botonSpace = document.createElement("div");
const fieldset = document.createElement("fieldset");
const form = document.createElement("form");
const legendInicio = document.createElement("legend");
const legendFinal = document.createElement("legend");

const pasado = document.createElement("div");
const presente = document.createElement("div");
const futuro = document.createElement("div");

legendInicio.classList.add("Form-legend");
legendFinal.classList.add("Form-legend");
botonSpace.innerText = "Traduko";
botonClick.innerText = "Conjugacion";
pasado.innerText = "pasado";
presente.innerText = "presente";
futuro.innerText = "futuro";
legendInicio.innerText = "ESPERANTO";
legendFinal.innerText = "Solo letras minúsculas y sin acentos...";
botonInput.classList.add("emailInput");
botonClick.classList.add("submit");

form.classList.add("contactoForm");
seccion1Botones.classList.add("seccion1Botones");
container.classList.add("card");
pasado.classList.add("botones");
presente.classList.add("botones");
futuro.classList.add("botones");
botonSpace.classList.add("botonSpace");

seccion1.classList.add("seccion1");
seccion2.appendChild(botonInput);
fieldset.appendChild(botonSpace);
fieldset.appendChild(botonClick);
seccion1.appendChild(pasado);
seccion1.appendChild(presente);
seccion1.appendChild(futuro);
fieldset.appendChild(legendInicio);
fieldset.appendChild(seccion1);

form.appendChild(fieldset);
seccion1Botones.appendChild(form);
container.appendChild(seccion1Botones);
fieldset.appendChild(seccion2);
fieldset.appendChild(legendFinal);
const contenedor = document.querySelector("#headerPrincipal");
contenedor.appendChild(container);
var Infinitivo;
var entradaVerbo = botonInput.value
function tiempoInfinitivo(entradaVerbo) {
alert("memoru...\n\nunua letero\ndevenda minuskla")
  entradaVerbo = botonInput.value;
  if (verbosArray[entradaVerbo]) {
    console.log(verbosArray[entradaVerbo]);
    botonSpace.innerHTML = verbosArray[entradaVerbo];
    //   console.log("text : "+verbosArray[entradaVerbo])
    Infinitivo = verbosArray[entradaVerbo].slice(0, -1);
  }
  // verboU=botonSpace.innerText
  botonInput.focus();
  botonInput.value = "";
}
function tiempoPasado() {
  let verboPasado = Infinitivo.concat("is");
  console.log("verbo : " + verboPasado);
  botonSpace.innerHTML = verboPasado;
}
function tiempoPresente() {
  let verboPasado = Infinitivo.concat("as");
  console.log("verbo : " + verboPasado);
  botonSpace.innerHTML = verboPasado;
}
function tiempoFuturo() {
  let verboPasado = Infinitivo.concat("os");
  console.log("verbo : " + verboPasado);
  botonSpace.innerHTML = verboPasado;
}

botonClick.onclick = tiempoInfinitivo;
pasado.onclick = tiempoPasado;
presente.onclick = tiempoPresente;
futuro.onclick = tiempoFuturo;
