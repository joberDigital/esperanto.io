let contador=0;
const adjetivosObj=[
{adjetivoEspanol: 'infantil', adjetivoEsperanto:'infana'},
{adjetivoEspanol:'atlético', adjetivoEsperanto:'atleta'},
{adjetivoEspanol:'alto', adjetivoEsperanto:'alta'},
{adjetivoEspanol:'caliente', adjetivoEsperanto:'varma'},
{adjetivoEspanol:'bueno', adjetivoEsperanto:  'bona'},
{adjetivoEspanol:'joven', adjetivoEsperanto:  'juna'},
{adjetivoEspanol:'grande', adjetivoEsperanto:  'granda'},
{adjetivoEspanol:'limpio', adjetivoEsperanto:  'pura '},
{adjetivoEspanol:'bello', adjetivoEsperanto:  'bela '},
{adjetivoEspanol:'gordo', adjetivoEsperanto:  'dika '},
{adjetivoEspanol:'fresca', adjetivoEsperanto:  'freŝa'},
{adjetivoEspanol:'rápido', adjetivoEsperanto:  'rapida'},
{adjetivoEspanol:'nuevo', adjetivoEsperanto:  'nova'},
{adjetivoEspanol:'dulce', adjetivoEsperanto:  'dolĉa'},
{adjetivoEspanol:'rico', adjetivoEsperanto:  'riĉa'},
{adjetivoEspanol:'derecha', adjetivoEsperanto:  'dekstra'},
{adjetivoEspanol:'fácil', adjetivoEsperanto:  'facila'},
{adjetivoEspanol:'sano', adjetivoEsperanto:  'sana'},
{adjetivoEspanol:'saludable', adjetivoEsperanto:  'sana'},
{adjetivoEspanol:'fuerte', adjetivoEsperanto:  'forta'},
{adjetivoEspanol:'feliz', adjetivoEsperanto:  'feliĉa'},
{adjetivoEspanol:'rápido', adjetivoEsperanto:  'rapida'},
{adjetivoEspanol:'importante', adjetivoEsperanto:  'grava'},
{adjetivoEspanol:'difícil', adjetivoEsperanto:  'malfacila'},
{adjetivoEspanol:'hogareño', adjetivoEsperanto:  'hejma'},
{adjetivoEspanol:'salvaje', adjetivoEsperanto:  'sovaĝa'},
{adjetivoEspanol:'claro', adjetivoEsperanto:  'luma'},
{adjetivoEspanol:'sabio', adjetivoEsperanto:  'saĝa'},
{adjetivoEspanol:'brillante', adjetivoEsperanto:  'brila'},
{adjetivoEspanol:'seco', adjetivoEsperanto:  'seka'},
{adjetivoEspanol:'justo', adjetivoEsperanto:  'ĝusta'},
{adjetivoEspanol:'exacto', adjetivoEsperanto:  'ĝusta'},
{adjetivoEspanol:'otro', adjetivoEsperanto:  'alia'},
{adjetivoEspanol:'principal', adjetivoEsperanto:  'ĉefa'},
{adjetivoEspanol:'querido', adjetivoEsperanto:  'kara'},
{adjetivoEspanol:'estimado', adjetivoEsperanto:  'kara'},
{adjetivoEspanol:'suficiente', adjetivoEsperanto:  'sufiĉa'},
{adjetivoEspanol:'similar', adjetivoEsperanto:  'simila'},
{adjetivoEspanol:'llena', adjetivoEsperanto:  'plena'},
{adjetivoEspanol:'valiente', adjetivoEsperanto:  'kuraĝa'},
{adjetivoEspanol:'peligroso', adjetivoEsperanto:  'danĝera'},
{adjetivoEspanol:'preciso', adjetivoEsperanto:  'preciza'},
{adjetivoEspanol:'solo', adjetivoEsperanto:  'sola'},
{adjetivoEspanol:'claro', adjetivoEsperanto:  'klara'},
{adjetivoEspanol:'último', adjetivoEsperanto:  'lasta'},
{adjetivoEspanol:'fuerte', adjetivoEsperanto:  'laŭta'},
{adjetivoEspanol:'algunos', adjetivoEsperanto:  'kelkaj'},
{adjetivoEspanol:'libre', adjetivoEsperanto:  'libera'},
{adjetivoEspanol:'moderno', adjetivoEsperanto:  'moderna'},
{adjetivoEspanol:'contento', adjetivoEsperanto:  'kontenta'},
{adjetivoEspanol:'neutral', adjetivoEsperanto:  'neŭtrala'},
{adjetivoEspanol:'especial', adjetivoEsperanto:  'speciala'},
{adjetivoEspanol:'útil', adjetivoEsperanto:  'utila'},
{adjetivoEspanol:'básico', adjetivoEsperanto:  'baza'},
{adjetivoEspanol:'igual', adjetivoEsperanto:  'egala'},
{adjetivoEspanol:'loco', adjetivoEsperanto:  'freneza'},
{adjetivoEspanol:'valiente', adjetivoEsperanto:'kuraĝa'},
{adjetivoEspanol:'pesado', adjetivoEsperanto: 'peza'},
{adjetivoEspanol:'amable', adjetivoEsperanto: 'afabla'},
{adjetivoEspanol:'profundo', adjetivoEsperanto: 'profunda'},
{adjetivoEspanol:'suave', adjetivoEsperanto: 'mola'},
{adjetivoEspanol:'adecuado', adjetivoEsperanto: 'taŭga'},
{adjetivoEspanol:'conveniente', adjetivoEsperanto: 'taŭga'},
{adjetivoEspanol:'tonto', adjetivoEsperanto: 'stulta'},
{adjetivoEspanol:'extraño', adjetivoEsperanto: 'stranga'},
{adjetivoEspanol:'cercano', adjetivoEsperanto: 'proksima'},
{adjetivoEspanol:'listo', adjetivoEsperanto: 'preta'},
{adjetivoEspanol:'nacional', adjetivoEsperanto: 'nacia'},
{adjetivoEspanol:'capaz', adjetivoEsperanto: 'kapabla'},
{adjetivoEspanol:'separado', adjetivoEsperanto: 'aparta'},
{adjetivoEspanol:'famoso', adjetivoEsperanto: 'fama'},
{adjetivoEspanol:'popular', adjetivoEsperanto: 'populara'},
{adjetivoEspanol:'inteligente', adjetivoEsperanto: 'inteligenta'},
{adjetivoEspanol:'tranquilo', adjetivoEsperanto: 'trankvila'},
{adjetivoEspanol:'universal', adjetivoEsperanto: 'universala'},
{adjetivoEspanol:'del este', adjetivoEsperanto:'orienta'},
{adjetivoEspanol:'cruel', adjetivoEsperanto:'kruela'},
{adjetivoEspanol:'de metal', adjetivoEsperanto:'metala'},
{adjetivoEspanol:'del norte', adjetivoEsperanto:'norda'},
{adjetivoEspanol:'del sur', adjetivoEsperanto:'suda'},
{adjetivoEspanol:'del oeste', adjetivoEsperanto:'okcidenta'}
]
const tarjetas = document.createElement("div");
const tarjeta = document.createElement("div");
const tarjeta2 = document.createElement("div");
const textoEspanol = document.createElement("p");
const textoEsperanto = document.createElement("p");
const tituloEspanol = document.createElement("h5");
const tituloEsperanto = document.createElement("h5");

const colspan1 = document.createElement("div");
const colspan2 = document.createElement("div");
const colspan3 = document.createElement("div");
const colspan4 = document.createElement("div");
const figure = document.createElement("div");
const cuerpo = document.createElement("div");

//cuerpo de tarjeta

tarjetas.classList.add("row");
tarjeta.classList.add("card");
tarjeta2.classList.add("card2");
colspan1.classList.add("mb-3");
colspan2.classList.add("g-0");
colspan3.classList.add("col-md-4");
colspan4.classList.add("col-md-8");
cuerpo.classList.add("card-body");
// curso info

tituloEspanol.classList.add("card-title");
tituloEsperanto.classList.add("card-title");
textoEspanol.classList.add("card","table1");
textoEsperanto.classList.add("card","table2");
var row = document.createElement("div");
var boton_mas = document.createElement("div");
var boton_menos = document.createElement("div");
row.classList.add("row");
boton_mas.classList.add("btn");
boton_menos.classList.add("btn");
boton_mas.innerText="➕"
boton_menos.innerText="➖"
tituloEspanol.innerText = "+Adjetivo";
tituloEsperanto.innerText = "+Adjektivo";

const verificar1 = () => {
    textoEspanol.innerText = adjetivosObj[contador].adjetivoEspanol;
    textoEsperanto.innerText = adjetivosObj[contador].adjetivoEsperanto;
     colspan1.appendChild(figure);
    colspan2.appendChild(tarjeta2);
    colspan1.appendChild(colspan2);
    tarjeta.appendChild(colspan1);
    cuerpo.appendChild(textoEspanol);
   cuerpo.appendChild(tituloEspanol);
    row.appendChild(boton_mas);
    row.appendChild(boton_menos);
    tarjeta2.appendChild(cuerpo);
    tarjetas.appendChild(tarjeta);
    const contenedor = document.querySelector(".container");
    contenedor.appendChild(tarjetas);
    tarjetas.appendChild(figure);
    cuerpo.appendChild(row)
    cuerpo.appendChild(textoEsperanto);
    cuerpo.appendChild(tituloEsperanto);
    for (let i = 0; i < 1; i++) {
 contenedor.appendChild(figure);
    }
    contador++ 
    if (contador==adjetivosObj.length-1) {
        boton_mas.style.display="none"
    }
      if (contador<2){
        boton_menos.style.display="flex"
      }
    
 }
 const verificar2 = () => {
    if (contador<2) {
        boton_menos.style.display="none"
        boton_mas.style.display="flex"
      }
      if (contador==adjetivosObj.length-1) {
         boton_mas.style.display="flex"
      }    
    textoEspanol.innerText = adjetivosObj[contador].adjetivoEspanol;
    textoEsperanto.innerText = adjetivosObj[contador].adjetivoEsperanto;
     colspan1.appendChild(figure);
    colspan2.appendChild(tarjeta2);
    colspan1.appendChild(colspan2);
    tarjeta.appendChild(colspan1);
    cuerpo.appendChild(textoEspanol);
   cuerpo.appendChild(tituloEspanol);
    row.appendChild(boton_mas);
    row.appendChild(boton_menos);
    tarjeta2.appendChild(cuerpo);
    tarjetas.appendChild(tarjeta);
    const contenedor = document.querySelector(".container");
    contenedor.appendChild(tarjetas);
    tarjetas.appendChild(figure);
    cuerpo.appendChild(row)
    cuerpo.appendChild(textoEsperanto);
    cuerpo.appendChild(tituloEsperanto);
    for (let i = 0; i < 1; i++) {
    contenedor.appendChild(figure);
  }
contador--
}


window.addEventListener('load', verificar1)
boton_mas.addEventListener("click", verificar1);
 boton_menos.addEventListener("click", verificar2);

    
