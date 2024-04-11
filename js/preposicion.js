let idPreposicion1;
let idPreposicion2;
let idPreposicion3;
let idPreposicion4;
let idPreposicion5;
let idPreposicion6;
let idPreposicion7;
let idPreposicion8;
let idPreposicion9;
let idPreposicion10;
let idPreposicion11;
let idPreposicion12;
let idPreposicion13;
let idPreposicion14;
let idPreposicion15;
let idPreposicion16;
let idPreposicion17;
let idPreposicion18;
let idPreposicion19;
let idPreposicion20;
let idPreposicion21;
let idPreposicion22;
let idPreposicion23;
let idPreposicion24;
let idPreposicion25;
let idPreposicion26;
let idPreposicion27;
let idPreposicion28;
let idPreposicion29;

const portafolio = [];
let opcion;
let mechanics;
let caracteristicaPortafolio;
let ventana;
var opcionesPages;
const spanCaracteristicaPortafolio = document.createElement('div');
const containerFolder = document.createElement('div');
containerFolder.classList.add('wrapper2');  
const containerFolder2 = document.createElement('div');

const Portafolio1 = document.createElement('div');
const Portafolio2 = document.createElement('div');

const etiqueta = document.createElement('div');
const seleccionar = document.createElement('div');
const seleccionar2 = document.createElement('div');
seleccionar.classList.add("class","card2");
seleccionar2.classList.add("class","botones");
seleccionar2.innerText="👉✅👈"
seleccionar.appendChild(seleccionar2)
// <div id="boton-seleccionar" class="botonSeleccionarCard botones">Seleccionar
// </div>   
//const seleccionar = document.getElementById("boton-seleccionar");

etiqueta.classList.add('lineaCard');
//-------------
const contenedor = document.querySelector('#headerPrincipal');
contenedor.appendChild(Portafolio1);
contenedor.appendChild(Portafolio2);
contenedor.appendChild(containerFolder);
Portafolio1.appendChild(spanCaracteristicaPortafolio)
Portafolio2.appendChild(etiqueta)

//-------------
//seleccionar.innerText="CHECK"




//class
class Principiante {
  constructor(id, nombre1) {
    this.id = id;
    this.nombre1 = nombre1;
    this.opciones = [];
  }
}

let Pagina1 = new Principiante("1", "~~ A ~~<br>~~ HACIA ~~");
let Pagina2 = new Principiante("2", "~~ ANTES DE ~~\nDELANTE DE ~~");
let Pagina3 = new Principiante("3", "~~ JUNTO ~~");
let Pagina4 = new Principiante("4", "~~ EN ~~<br>~~ EN CASA DE ~~");
let Pagina5 = new Principiante("5", "~~ alrededor de ~~");
let Pagina6 = new Principiante("6", "~~ DA ~~\n(CANTIDAD) ~~");
let Pagina7 = new Principiante("7", "~~ DE ~~\n(PROPIEDAD)\n(ORIGEN) ~~");
let Pagina8 = new Principiante("8", "~~ FUERA DE ~~");
let Pagina9 = new Principiante("9", "~~ DE ~~\n(PROCEDENCIA)\n(MATERIAL) ~~");
let Pagina10 = new Principiante("10", "~~ EN ~~\nDENTRO DE ~~");
let Pagina11 = new Principiante("11", "~~ HASTA ~~");
let Pagina12 = new Principiante("12", "~~ ENTRE ~~");
let Pagina13 = new Principiante("13", "~~ CONTRA ~~");
let Pagina14 = new Principiante("14", "~~ A PARTE DE ~~");
let Pagina15 = new Principiante("15", "~~ CON ~~");
let Pagina16 = new Principiante("16", "~~ SEGUN ~~");
let Pagina17 = new Principiante("17", "~~ CON ~~<br>(POR MEDIO DE) ~~");
let Pagina18 = new Principiante("18", "~~ PARA ~~");
let Pagina19 = new Principiante("19", "~~ ATRAS DE ~~\nDESPUES DE ~~");
let Pagina20 = new Principiante("20", "~~ POR DELANTE");
let Pagina21 = new Principiante("21", "~~ ACERCA DE ~~");
let Pagina22 = new Principiante("22", "~~ POR ~~");
let Pagina23 = new Principiante("23", "~~ SIN ~~");
let Pagina24 = new Principiante("24", "~~ DEBAJO DE ~~");
let Pagina25 = new Principiante("25", "~~ POR ENCIMA ~~");
let Pagina26 = new Principiante("26", "~~ SOBRE ~~");
let Pagina27 = new Principiante("27", "~~ A TRAVES DE~~");
let Pagina28 = new Principiante("28", "~~ AL OTRO LADO DE~~");
Pagina1.opciones.push({
  id: 'boton-agua',
    descripcion: "<u>indica direccion o el objeto indirecto</u>",
  titulo: "Preposicion<br>AL",
  sentencia1: "NI IRAS  <u>AL</u> LA ARBARO",
  sentencia2: "NOSOTROS VAMOS <u>HACIA</u> EL BOSQUE",
  sentencia3: 'Mi venas de la avo, kaj mi iras nun <u>AL</u> la onklo',
  sentencia4: 'Vengo del abuelo y voy ahora <u>con</u> el tío',
    enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/direktaj_rolvortetoj/al.html'
});
Pagina2.opciones.push({
  descripcion: "<u>indica un lugar o un tiempo anterior</u>",
  titulo: "Preposicion<br>ANTAŬ",
  sentencia1: "  <u>ANTAŬ</u> LA DOMO",
  sentencia2: "<u>DELANTE</u> DE LA CASA",
  sentencia3: "<u>ANTAŬ</u> TRI TAGOJ",
  sentencia4: "  <u>HACE</u>TRES DIAS",
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/antau.html'
});
Pagina3.opciones.push({
  descripcion: "<u>Indica contigüidad : </u>",
  titulo: "Preposicion<br>apud",
  sentencia1: "  <u>Apud</u>la domo",
  sentencia2: "<u>junto</u> a la casa",
  sentencia3: "Se mi starus<u>apud</u>li mi ŝajnus kiel nura komencanto",
  sentencia4: "Si estuviera<u>a su lado,</u>parecería un simple principiante",
  enlace: 'https://bertilow.com/pmeg/elshutebla/pmeg_15.4.pdf'
});
Pagina4.opciones.push({
  descripcion: "<u>Indica estancia:</u>",
  titulo: "Preposicion<br>ĉe",
  sentencia1: "  <u>Ĉe</u> mia patro",
  sentencia2: "<u>En casa</u> de mi padre",
  sentencia3: "<u>Ĉe</u> la lernejo",
  sentencia4: "  <u>Estando en</u> la escuela",
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/che.html'
});
Pagina5.opciones.push({
  descripcion: "<u>Indica un lugar circundante o una aproximación:</u>",
  titulo: "Preposicion<br>ĉirkaŭ",
  sentencia1: "  <u>ĉirkaŭ</u> la urbo",
  sentencia2: "<u>Alrededor de</u>  la ciudad",
  sentencia3: "<u>ĉirkaŭ</u> aprilo",
  sentencia4: "  <u>Aproximadamente</u> en abril",
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/chirkau.html'
});
Pagina6.opciones.push({
  descripcion: "<u>Se coloca después de una palabra que indique cantidad:</u>",
  titulo: "Preposicion<br>da",
  sentencia1: "Glaso <u>da</u> akvo",
  sentencia2: "Un vaso (lleno)<u>de</u> agua",
  sentencia3: "<u>da</u> aprilo",
  sentencia4: "  <u>Aproximadamente</u> en abril",
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/da/index.html'
});
Pagina7.opciones.push({
  descripcion:
    "<u>Indica posesión, propiedad o autor:</u><br>ankaŭ<br><ul>Indica posesión, propiedad o autor:</ul>",
  titulo: "Preposicion<br>de",
  sentencia1: "La libro <u>de (propiedad)</u> la instruisto",
  sentencia2: "El libro <u>de</u> el profesor",
  sentencia3: "Iri <u>de (origen)</u>mia hejmo al la via",
  sentencia4: "Ir<u> de</u> mi casa a la tuya.",
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/de/participo.html'
});
Pagina8.opciones.push({
  descripcion: "<u>Indica lo exterior</ul>",
  titulo: "Preposicion<br>ekster",
  sentencia1: "<u>ekster</u>la dom",
  sentencia2: "<u>Fuera de</u>la casa",
  sentencia3: ' Ŝi ne povis regi sin pro rido. Ŝi estis kvazaŭ<u>ekster</u>sia propra korpo.',
  sentencia4: 'Ella no pudo evitar reírse. Estaba como<ul>fuera de</ul>su propio cuerpo.',
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/ekster.html'
});
Pagina9.opciones.push({
  descripcion:
    "<u>Indica salida, extracción, procedencia:</u><br>ankaŭ<br><ul>(material)Indica material:</ul>",
  titulo: "Preposicion<br>el",
  sentencia1: "Li kaptis fiŝojn<u>el (origen)</u>la maro ",
  sentencia2: " El atrapó peces<u>el</u>el mar",
  sentencia3: "Tablo<u>el (material)</u>ligno ",
  sentencia4: "Mesa<u>el</u>madera",
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/direktaj_rolvortetoj/el.html'
});
Pagina10.opciones.push({
  descripcion: "<u>Indica lo interior:</u>",
  titulo: "Preposicion<br>en",
  sentencia1: "  <u>En</u>la domo",
  sentencia2: "<u>Dentro de</u>la casa",
  sentencia3: "<u>En</u>marto",
  sentencia4: "<u>En</u> marzo",
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/en.html'
});
Pagina11.opciones.push({
  descripcion: "<u>Indica término o límite:</u>",
  titulo: "Preposicion<br>ĝis",
  sentencia1: "<u>ĝis</u>ilia domo",
  sentencia2: "<u>Hasta</u>su (de ellos) casa",
  sentencia3: "<u>Ĝis</u>aŭgusto",
  sentencia4: "<u>Hasta</u>agosto",
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/direktaj_rolvortetoj/ghis.html'
});
Pagina12.opciones.push({
  descripcion: "<u>Indica interposición de tiempo o lugar:</u>",
  titulo: "Preposicion<br>inter",
  sentencia1: "<u>inter</u>ili, estis ŝi",
  sentencia2: "<u>Entre</u>Ellos, estaba ella",
  sentencia3: 'Ekvadoro troviĝas <u>inter</u> Kolombio,peruo, triflanke enfermas',
  sentencia4: 'Ecuador está ubicado <u>Entre</u> Colombia y Perú, cerrado por tres lados.',
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/inter.html'
});
Pagina13.opciones.push({
  descripcion: "<u>Indica oposición:</u>",
  titulo: "Preposicion<br>kontraŭ",
  sentencia1: "<u>Kontraŭ</u>la malamiko",
  sentencia2: "<u>En contra de</u>el enemigo",
  sentencia3:'La Eternulo paroladis kun Moseo vizaĝon <u>Kontraŭ</u> vizaĝo',
  sentencia4: 'El Señor habló con Moisés cara <u>a</u> cara',
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/kontrau.html'
});
Pagina14.opciones.push({
  descripcion: "<u>Indica salvo de, con excepción de y aparte de:</u>",
  titulo: "Preposicion<br>krom",
  sentencia1: "<u>Krom</u>la aŭto, li havas biciklon",
  sentencia2: "<u>Aparte de</u> el auto, él tiene una bicicleta",
  sentencia3: 'La tuta teksto estas ĝusta, <u>Krom</u> unu frazo. Unu frazo ne estas ĝusta.',
  sentencia4: 'Todo el texto es correcto, <u>excepto</u> una frase. Una frase no es correcta.',
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/aliaj_rolvortetoj/krom.html'
});
Pagina15.opciones.push({
  descripcion: "<u>Indica unión, compañía:</u>",
  titulo: "Preposicion<br>kun",
  sentencia1: "Kafo<u>Kun</u>lakto",
  sentencia2: "café<u>con</u>leche",
  sentencia3: 'teon <u>kun</u>kuko kaj konfitaĵo',
  sentencia4: 'té<u>con</u>pastel y mermelada',
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/aliaj_rolvortetoj/kun.html'
});
Pagina16.opciones.push({
  descripcion:
    "<u>Indica conformidad, adaptación, la versión de, o a lo largo de:</u>",
  titulo: "Preposicion<br>laŭ",
  sentencia1: "<u>Laŭ</u>la reguloj",
  sentencia2: "<u>Según</u>las reglas",
  sentencia3: 'Iru <u>Laŭ</u> la vojo de la prudento kaj esprimulo',
  sentencia4: 'Sigue<u>Según</u> el camino de los cuerdos y expresivos.',
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/aliaj_rolvortetoj/lau.html'
});
Pagina17.opciones.push({
  descripcion: "<u>Indica medio o instrumento:</u>",
  titulo: "Preposicion<br>per",
  sentencia1: "Vidi<u>per</u>la okuloj",
  sentencia2: "Ver<u>con</u>los ojos",
  sentencia3: 'Li pagis la rizon <u>per</u> sia lasta mono',
  sentencia4: 'Pagó el arroz <u>con</u> su último dinero.',
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/aliaj_rolvortetoj/per.html'
});
Pagina18.opciones.push({
  descripcion: "<u>Indica finalidad:</u>",
  titulo: "Preposicion<br>por",
  sentencia1: "Libro<u>por</u>infanoj",
  sentencia2: "Libro<u>para</u>niños",
  sentencia3: 'Mi ne havas tempon <u>por</u> tio',
  sentencia4: 'yo no tengo tiempo <u>para</u> tí',
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/aliaj_rolvortetoj/por.html'
});
Pagina19.opciones.push({
  descripcion: "<u>Indica posterioridad, en tiempo o espacio:</u>",
  titulo: "Preposicion<br>post",
  sentencia1: "<u>Post</u>la domo estas arbaro",
  sentencia2: "<u>Atrás</u>la casa esta un bosque",
  sentencia3: "<u>Post</u>tri tagoj",
  sentencia4: "<u>Después</u>de tres días",
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/post.html'
});
Pagina20.opciones.push({
  descripcion: "<u>Indica un rebase:</u>",
  titulo: "Preposicion<br>preter",
  sentencia1: "Li marŝis<u>preter</u>mi",
  sentencia2: "Él caminó<u>preter</u>mi",
  sentencia3:'Ĝi iris al li <u>preter</u> la buŝon',
  sentencia4: 'Se le fue <u>pasando</u> la boca',
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/preter.html'
});
Pagina21.opciones.push({
  descripcion: "<u>Indica el tema de:</u>",
  titulo: "Preposicion<br>pri",
  sentencia1: "Paroli<u>pri</u>bestoj",
  sentencia2: "Hablar<u>acerca de</u>animales",
  sentencia3:'Mi instruas mian infanon<u>pri</u> Esperanto',
  sentencia4: '<u>Le</u> estoy enseñando esperanto a mi hijo.',
  enlace: 'https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/aliaj_rolvortetoj/pri.html'
});
Pagina22.opciones.push({
  descripcion: "<u>Indica causa o motivo:</u>",
  titulo: "Preposicion<br>pro",
  sentencia1: "Li amas ŝin<u>pro</u>doni mono sin",
  sentencia2: "Él la ama<u>para</u>darle su dinero",
  sentencia3: 'Mia kialo <u>pro</u> ridi estas lia naiveco',
  sentencia4: 'Mi motivo <u>para</u> reírme es su ingenuidad.',
  enlace: "https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/aliaj_rolvortetoj/pro.html"
});
Pagina23.opciones.push({
  descripcion: "<u>Indica carencia:</u>",
  titulo: "Preposicion<br>sen",
  sentencia1: "Infano manĝas<u>sen</u>helpo",
  sentencia2: "Un niño come<u>sin</u>ayuda",
  sentencia3: 'Ne <u>sen</u> kaŭzo li tion diris.',
  sentencia4: 'Lo dijo no <u>sin</u> razón.',
  enlace: "https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/aliaj_rolvortetoj/sen.html"
});
Pagina24.opciones.push({
  descripcion: "<u>Indica inferioridad:</u>",
  titulo: "Preposicion<br>sub:",
  sentencia1: "La kato estas<u>sub</u>la tablo",
  sentencia2: "El gato esta<u>debajo de</u>la mesa",
  sentencia3: '<u>sub</u>dikaj tavoloj de farbo kaŝiĝis la origina aspekto de la plafono.',
  sentencia4: 'El aspecto original del techo quedó oculto <u>bajo</u> gruesas capas de pintura.',
  enlace: "https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/sub.html"
});
Pagina25.opciones.push({
  descripcion: "<u>Indica posición superior sin contacto:</u>",
  titulo: "Preposicion<br>Super:",
  sentencia1: "Birdo flugis<u>super</u>domo",
  sentencia2: "Un pájaro vuela<u>por encima de</u>una casa",
  sentencia3: 'Dank’ al la lingvo ni tiel altiĝis<u>super</u>la bestoj',
  sentencia4: 'Gracias al lenguaje nos hemos elevado<u>por encima de</u> los animales',
  enlace: "https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/super.html"
});
Pagina26.opciones.push({
  descripcion: "<u>Indica posición superior con contacto:</u>",
  titulo: "Preposicion<br>Sur:",
  sentencia1: "La kato estas<u>sub</u>la tablo",
  sentencia2: "La libro esta<u>sobre</u>la tablo",
  sentencia3: 'cxu Kiu kuraĝas rajdi<u>sub</u>leono',
  sentencia4: '¿Quién se atreve a montar<u>un</u> león?',
  enlace: "https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/sur.html"
});
Pagina27.opciones.push({
  descripcion: "<u>Indica pasar al lado opuesto:</u>",
  titulo: "Preposicion<br>Tra:",
  sentencia1: "Ni naĝis<u>tra</u>rivero",
  sentencia2: "Nadamos<u>a través de</u>el río",
  sentencia3: 'La soldatoj kondukis la arestitojn<u>tra</u>la stratoj.',
  sentencia4: 'Los soldados condujeron a los detenidos<u>por</u>las calles.',
  enlace: "https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/tra.html"
});
Pagina28.opciones.push({
  descripcion: "<u>Indica situación, atravesar algo:</u>",
  titulo: "Preposicion<br>Trans:",
  sentencia1: "Li loĝas<u>trans</u>la strato",
  sentencia2: "Él vive<u>al otro lado de</u>la calle",
  sentencia3: 'Belaj rakontoj de el<u>trans</u>la pli',
  sentencia4: 'Hermosas historias del más<u>allá</u>',
  enlace: "https://bertilow.com/pmeg/gramatiko/rolmontriloj/rolvortetoj/lokaj_rolvortetoj/trans.html"
});

portafolio.push(
  Pagina1,
  Pagina2,
  Pagina3,
  Pagina4,
  Pagina5,
  Pagina6,
  Pagina7,
  Pagina8,
  Pagina9,
  Pagina10,
  Pagina11,
  Pagina12,
  Pagina13,
  Pagina14,
  Pagina15,
  Pagina16,
  Pagina17,
  Pagina18,
  Pagina19,
  Pagina20,
  Pagina21,
  Pagina22,
  Pagina23,
  Pagina24,
  Pagina25,
  Pagina26,
  Pagina27,
  Pagina28
);

function build() {

  portafolio.forEach((contenido) => {
    opcionesPages = `
        <input class="in" type="radio" name="folios" id=${contenido.id} />
        <label class="card2" for=${contenido.id}>
            <div class="paginas botones">${contenido.nombre1}</div>
        </label>
        `
    etiqueta.innerHTML += opcionesPages;
    idPreposicion1 = document.getElementById("1");
    idPreposicion2 = document.getElementById("2");
    idPreposicion3 = document.getElementById("3");
    idPreposicion4 = document.getElementById("4");
    idPreposicion5 = document.getElementById("5");
    idPreposicion6 = document.getElementById("6");
    idPreposicion7 = document.getElementById("7");
    idPreposicion8 = document.getElementById("8");
    idPreposicion9 = document.getElementById("9");
    idPreposicion10 = document.getElementById("10");
    idPreposicion11 = document.getElementById("11");
    idPreposicion12 = document.getElementById("12");
    idPreposicion13 = document.getElementById("13");
    idPreposicion14 = document.getElementById("14");
    idPreposicion15 = document.getElementById("15");
    idPreposicion16 = document.getElementById("16");
    idPreposicion17 = document.getElementById("17");
    idPreposicion18 = document.getElementById("18");
    idPreposicion19 = document.getElementById("19");
    idPreposicion20 = document.getElementById("20");
    idPreposicion21 = document.getElementById("21");
    idPreposicion22 = document.getElementById("22");
    idPreposicion23 = document.getElementById("23");
    idPreposicion24 = document.getElementById("24");
    idPreposicion25 = document.getElementById("25");
    idPreposicion26 = document.getElementById("26");
    idPreposicion27 = document.getElementById("27");
    idPreposicion28 = document.getElementById("28");
  }); 
  etiqueta.appendChild(seleccionar)
  seleccionar.addEventListener("click", seleccionarFolders);
}
function seleccionarFolders() {
  if (idPreposicion1.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion1.id;  // muestra el this de la clase
    caracteristicaPortafolio = idPreposicion1.id;
  } else if (idPreposicion2.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion2.id;
    caracteristicaPortafolio = idPreposicion2.id;
  } else if (idPreposicion3.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion3.id;
    caracteristicaPortafolio = idPreposicion3.id;
  } else if (idPreposicion4.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion4.id;
    caracteristicaPortafolio = idPreposicion4.id;
  } else if (idPreposicion5.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion5.id;
    caracteristicaPortafolio = idPreposicion5.id;
  } else if (idPreposicion6.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion6.id;
    caracteristicaPortafolio = idPreposicion6.id;
  } else if (idPreposicion7.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion7.id;
    caracteristicaPortafolio = idPreposicion7.id;
  } else if (idPreposicion8.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion8.id;
    caracteristicaPortafolio = idPreposicion8.id;
  } else if (idPreposicion9.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion9.id;
    caracteristicaPortafolio = idPreposicion9.id;
  } else if (idPreposicion10.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion10.id;
    caracteristicaPortafolio = idPreposicion10.id;
  } else if (idPreposicion11.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion11.id;
    caracteristicaPortafolio = idPreposicion11.id;
    console.log("click" + idPreposicion11.id);
  } else if (idPreposicion12.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion12.id;
    caracteristicaPortafolio = idPreposicion12.id;
  } else if (idPreposicion13.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion13.id;
    caracteristicaPortafolio = idPreposicion13.id;
  } else if (idPreposicion14.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion14.id;
    caracteristicaPortafolio = idPreposicion14.id;
  } else if (idPreposicion15.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion15.id;
    caracteristicaPortafolio = idPreposicion15.id;
  } else if (idPreposicion16.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion16.id;
    caracteristicaPortafolio = idPreposicion16.id;
    console.log("click" + idPreposicion16.id);
  } else if (idPreposicion17.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion17.id;
    caracteristicaPortafolio = idPreposicion17.id;
  } else if (idPreposicion18.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion18.id;
    caracteristicaPortafolio = idPreposicion18.id;
  } else if (idPreposicion19.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion19.id;
    caracteristicaPortafolio = idPreposicion19.id;
  } else if (idPreposicion20.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion20.id;
    caracteristicaPortafolio = idPreposicion20.id;
  } else if (idPreposicion21.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion21.id;
    caracteristicaPortafolio = idPreposicion21.id;
  } else if (idPreposicion22.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion22.id;
    caracteristicaPortafolio = idPreposicion22.id;
  } else if (idPreposicion23.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion23.id;
    caracteristicaPortafolio = idPreposicion23.id;
  } else if (idPreposicion24.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion24.id;
    caracteristicaPortafolio = idPreposicion24.id;
  } else if (idPreposicion25.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion25.id;
    caracteristicaPortafolio = idPreposicion25.id;
  } else if (idPreposicion26.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion26.id;
    caracteristicaPortafolio = idPreposicion26.id;
    console.log("click" + idPreposicion26.id);
  }else if (idPreposicion27.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion27.id;
    caracteristicaPortafolio = idPreposicion27.id;
    console.log("click" + idPreposicion27.id);
  }else if (idPreposicion28.checked) {
    spanCaracteristicaPortafolio.innerHTML = idPreposicion28.id;
    caracteristicaPortafolio = idPreposicion28.id;
    console.log("click" + idPreposicion28.id);
  }else {
    alert("Select one page...");
  }
//ventana.addEventListener('click',templete)
  sheet(caracteristicaPortafolio);
  //  console.log(botones);
  }
function templete() {
  alert()
}
function sheet(caracteristicaPortafolio) {

  for (let i = 0; i < portafolio.length; i++) {
    if (caracteristicaPortafolio == portafolio[i].id) {
   console.log("portafolio"+ portafolio[i].id);
      opcion = portafolio[i].opciones;
//      console.log(opcion[i].titulo);
          }
  }
  createListas(opcion);
}
function createListas(opcion) {
  opcion.forEach((folder) => {
    mechanics = `
<div class="table2">         
<h5 class="front border-success">${folder.descripcion}</h5>
    <div class='card-title'>  ${folder.titulo}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${folder.sentencia1}</li>
        <li class="list-group-item">${folder.sentencia2}</li>
        <br></br>
        <li class="list-group-item">${folder.sentencia3}</li>
        <li class="list-group-item">${folder.sentencia4}</li>
      </ul>
<div class="card-footer  text-center">
  <div id="volve" class="btn submit">turn</div>
  <a href=${folder.enlace} class="btn btn-primary">Go somewhere</a>
  </div> </div>
`
    containerFolder2.innerHTML += mechanics;   //do label from inside function
    containerFolder.appendChild(containerFolder2);

    Portafolio1.style.display = "none";
    Portafolio2.style.display="none";
    
    seleccionar.style.display = "block";
    containerFolder.style.display='block';
    
  });
  var volve=document.getElementById('volve')
  volve.addEventListener('click',turn)
}function turn() {
  location.href = "preposiciones.html";
}
window.addEventListener("load", build);
