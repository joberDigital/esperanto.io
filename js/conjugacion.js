//     var showVerbo=document.getElementById('mensaje')
// var entradaVerbo=document.getElementById('space')
// var botonVerbo=document.querySelector('button')
// var botonPresente=document.querySelector('#presente')
// var botonPasado=document.querySelector('#pasado')
// var botonFuturo=document.querySelector('#futuro')



const container = document.createElement('div');
const seccion1Botones = document.createElement('div');
const seccion2 = document.createElement('div');


const  botonInput= document.createElement('input');
const  botonClick= document.createElement('input');

const botonSpace = document.createElement('div');
const fieldset = document.createElement('fieldset');
const form = document.createElement('form');
const legendInicio = document.createElement('legend');
const legendFinal = document.createElement('legend');

const  boton1= document.createElement('input');
const  boton2= document.createElement('input');
const  boton3= document.createElement('input');
// const  field= document.createElement('section');
// const boton= document.createElement('button')

legendInicio.classList.add('Form-legend');
legendFinal.classList.add('Form-legend');

legendInicio.innerText="ESPERANTO"
legendFinal.innerText="Solo letras minúsculas y sin acentos..."

 botonInput.classList.add('emailInput')
 botonClick.classList.add('submit')

form.classList.add('rodapePrincipal-contatoFor');


seccion1Botones.classList.add('seccion1Botones')
container.classList.add('card');
 boton1.classList.add('botones')
 boton2.classList.add('botones')
 boton3.classList.add('botones')



fieldset.appendChild(boton1);
fieldset.appendChild(boton2);
fieldset.appendChild(boton3);
fieldset.appendChild(botonSpace)
fieldset.appendChild(legendInicio);
seccion2.appendChild(botonInput)
seccion2.appendChild(botonClick)
fieldset.appendChild(seccion2)
fieldset.appendChild(legendFinal);


form.appendChild(fieldset);
seccion1Botones.appendChild(form)
container.appendChild(seccion1Botones);



const contenedor = document.querySelector('#headerPrincipal');
contenedor.appendChild(container);




// const verbosArray={
// comprar:'aĉeti',
// volar:'flugi',
// tener:'havi',
// poseer:'havi',
// ayudar:'helpi',
// leer:'legi',
// gustar :'ŝati',
// cerrar:'fermi',
// amar :'ami',  
// comer:'manĝi',  
// beber:'trinki',  
// ver  :'vidi', 
// vender:'vendi',          
// cortar:'tranĉi',          
// enviar:'sendi',         
// lavar :'lavi',         
// cocinar:'kuiri',
// hornear:'kuiri',
// atrapar:'kapti',          
// esperar:'atendi',
// tocar_un_Instrumento:'ludi',
// aprender:'lerni',
// escribir:'skribi',
// comprender:'kompreni',
// aceptar:'akcepti',
// necesitar:'bezoni',
// dar:'doni',
// entregar:'doni',
// enseñar:'instrui',
// usar:'instrui',
// alimentar:'nutri',
// querer:'voli', 
// // desear:'voli',
// construir:'konstrui',
// dar:'doni',
// entregar:'doni',
// deber:'devi',
// tener_que:'devi',
// ser:'esti',
// estar:'esti',
// correr:'kuri',
// caminar:'marŝi',
// pasear:'promeni',
// venir:'veni',
// ir:'iri',
// hablar:'paroli',
// platicar:'paroli',
// curar:'kuraci',
// escribir_una_obra_literaria:'verki',
//     tomar_fotos:'foti',
//        caer:'fali',
//    pintar_un_cuadro:'pentri',
//       poner:'meti',
//    escuchar:'aŭskulti',
//    andar_en_bicicleta:'bicikli',
//  telefonear:'telefoni',
//    intentar:'provi',
//    dormir:'dormi' ,
//        saber:'scii'  ,      
//       lanzar:'ĵeti'  ,       
//        nadar:'naĝi' ,
//    responder: 'respondi' ,
//    hacer:'fari',
//    oír:  'aŭdi',
//    observar: 'rigardi',
//      saludar:'saluti' ,
//     estar_de: 'farti' ,
//    agradecer:   ' danki' ,
//       desear:'deziri',
//       pedir:'peti',
//       creer:               'kredi',
//     olvidar:             'forgesi' ,
//      viajar:             'vojaĝi',
//      hablar_de_un_tema: 'temi',
//      reír:      'ridi',
//     decir:      'diri',
// tener_esperanza:    'esperi',
//      caer:      'fali' ,
//    buscar:     'serĉi' ,
// estar_seguro:     'certi',
// funcionar:'funkcii' ,
// invitar:    'inviti' ,
//  cantar:     'kanti' ,
// dejar:      'lasi' ,
// decidir:    'decidi' ,
// preocupar:    'zorgi' ,
// encontrar:     'trovi' ,
//   saber:     'scii' ,
// tener_derecho:    'rajti' ,
//  costar:     'kosti' ,
// aparecer:     'aperi',
// vencer:'venki',
// suceder:     'okazi',
//   pagar:      'pagi',
//  gritar:      'krii',
//  llorar:     'plori',
// perdonar:  'pardoni',
// tener_razón:     'pravi',
// festejar:     'festi',
//  bailar:    ' danci',
// asombrarse:     'miri',
//  faltar:'manki',
//      repetir: 'ripeti',
//        morir: 'morti ',
//        guiar: 'gvidi ',
//    extinguir:'estingi ',
//        medir:'mezuri ',
//    despertar:  'veki ',
//      visitar:'viziti ',
//      presidir:     'prezidi',
//      habitar:     'loĝi',
//        vivir:     'vivi',
//    contactar:'kontakti',
//     calcular:  'kalkuli',
//     computar:  'komputi',
//        tejer:    'teksi',
//    viajar_en:    'veturi',
//    enviar_por:'faksi',
//    platicar:  'babili',
// entretener:    'amuzi',
//     dudar:     'dubi',
// felicitar:  'gratuli',
//   detener:    'halti',
//    castigar:'puni',
//   parecer:'ŝajni' ,
//        robar:'ŝteli' ,
//    estar_sin: 'sati' ,
//    tener_sed:'soifi' ,
//  encontrarse_con_alguien:'renkonti' ,
//      conocer: 'koni' ,
//       quemar:'bruli' ,
//       elegir:'elekti' ,
//        fumar: 'fumi' ,
//     resolver:'solvi',
//     redactar:   'redakti',
//       copiar:     'kopii',
//      admirar:    'admiri',
//        rezar:     'preĝi',
//       atacar:     'ataki',
//      dibujar:   'desegni',
//       educar:     'eduki',
//        ganar:     'gajni',
//        besar:      'kisi',
//  coleccionar:   'kolekti',
//        coser:     'kudri',
//        ligar:       'ligi',
//     encargar:'mendi',
//     burlarse:       'moki',
//       llamar:        'voki',
//       cerrar:       'ŝlosi',
//      cambiar:       'ŝanĝi',
//     gobernar:        'regi',
//       peinar:       'kombi',
//        cesar:        'ĉesi',
//    dar_a_luz:        'naski',
//        nacer:   'naskiĝi',
//       suponer:'supozi',
//   recomendar:'ekomendi' ,
//     prometer: 'promesi' ,
//     defender: 'defendi' ,
//    contratar:   'dungi' ,
//   tomar_nota:    'noti' ,
//       ocupar:   'okupi' ,
//       sufrir:  'suferi' ,
//       bañar:   'bani' ,
//     golpear:      'bati',
//       examinar:'esplori',
//       opinar:'opinii',
//         llover:     'pluvi',
//     preferir:     'preferi',
//     esconder:        'kaŝi',
//     anunciar:'anonci' 
  
// };
// var verbo= entradaVerbo.value;
  
//  function verbosInfinitivo() {
//   verbo= entradaVerbo.value;
//     if (verbosArray[verbo]) {
// showVerbo.style.display="block"
// console.log(verbosArray[verbo])
//  showVerbo.innerText=verbosArray[verbo]
//   console.log("text : "+verbosArray[verbo])}
//   entradaVerbo.focus();
//   entradaVerbo.value=""
// }
 
// // encriptador
//

function encriptadorPresente(verbosArray) {
let matrizCodigo = [["i", "as"]];
console.log("impr"+matrizCodigo[0][0]+"\n"+"impr"+matrizCodigo[0][1])
for(let i=0; i < matrizCodigo.length; i++) {
if(verbosArray.includes(matrizCodigo[i][0])) {
verbosArray = verbosArray.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
  }                
 }
  console.log( verbosArray);
  return showVerbo.innerText=verbosArray
}

//function encriptadorFuturo(verbosArray) {
//   let matrizCodigo = [["i", "os"]];
//   console.log("impr"+matrizCodigo[0][0]+"\n"+"imprimir"+matrizCodigo[0][1])
//   for(let i=0; i < matrizCodigo.length; i++) {
//   if(verbosArray.includes(matrizCodigo[i][0])) {
//   verbosArray = verbosArray.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
//     }                
//    }
//     console.log( verbosArray);
//     return showVerbo.innerText=verbosArray
//   }function encriptadorPasado(verbosArray) {
//     let matrizCodigo = [["i", "is"]];
//     console.log("impr"+matrizCodigo[0][0]+"\n"+"impr"+matrizCodigo[0][1])
//     for(let i=0; i < matrizCodigo.length; i++) {
//     if(verbosArray.includes(matrizCodigo[i][0])) {
//     verbosArray = verbosArray.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
//       }                
//      }
//       console.log( verbosArray);
//       return showVerbo.innerText=verbosArray
//     }
// function funcionPresente() {
//   encriptadorPresente(verbosArray[verbo])
// }
// function funcionPasado() {
//   encriptadorPasado(verbosArray[verbo])
// }
// function funcionFuturo() {
//   encriptadorFuturo(verbosArray[verbo])
// }

// botonVerbo.onclick=verbosInfinitivo;
// botonPresente.onclick=funcionPresente;
// botonPasado.onclick=funcionPasado;
// botonFuturo.onclick=funcionFuturo;
