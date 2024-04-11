//const th5front=document.createElement('th');
import checkComplete from './modulos/correlativosModule.js';

const front = document.createElement("th");
const back = document.createElement("th");

//new code
const container2 = document.createElement("div");
const container = document.createElement("div");
const table2 = document.createElement("table2");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

const th = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const th4 = document.createElement("th");
const th5 = document.createElement("th");
const th6 = document.createElement("th");
const th7 = document.createElement("th");
const th8 = document.createElement("th");
const th9 = document.createElement("th");
const th10 = document.createElement("th");
const th11 = document.createElement("th");

const tr = document.createElement("tr");
const tr2 = document.createElement("tr");
const tr3 = document.createElement("tr");
const tr4 = document.createElement("tr");
const tr5 = document.createElement("tr");
const tr6 = document.createElement("tr");

const td = document.createElement("td");
const td2Fila1 = document.createElement("td");
const td3Fila1 = document.createElement("td");
const td4Fila1 = document.createElement("td");
const td5Fila1 = document.createElement("td");
const td6Fila1 = document.createElement("td");

const td7Fila2 = document.createElement("td");
const td8Fila2 = document.createElement("td");
const td9Fila2 = document.createElement("td");
const td10Fila2 = document.createElement("td");
const td11Fila2 = document.createElement("td");
const td12Fila3 = document.createElement("td");
const td13Fila3 = document.createElement("td");
const td14Fila3 = document.createElement("td");
const td15Fila3 = document.createElement("td");
const td16Fila3 = document.createElement("td");
const td17Fila4 = document.createElement("td");
const td18Fila4 = document.createElement("td");
const td19Fila4 = document.createElement("td");
const td20Fila4 = document.createElement("td");
const td21Fila4 = document.createElement("td");

const td22Fila5 = document.createElement("td");
const td23Fila5 = document.createElement("td");
const td24Fila5 = document.createElement("td");
const td25Fila5 = document.createElement("td");
const td26Fila5 = document.createElement("td");

container2.classList.add("table2");

th.classList.add("th");
th2.classList.add("th");
th3.classList.add("th");
th4.classList.add("th");
th5.classList.add("th");

//---------------------------------------//
//---------------------------------------//
//---------------------------------------//

//front.classList.add('front')
//th5front.classList.add('form__container') //kia

//---------------------------------------//
//---------------------------------------//
//---------------------------------------//

th6.classList.add("th");

tr.classList.add("tr");
tr2.classList.add("tr");
tr3.classList.add("tr");
tr4.classList.add("tr");
tr5.classList.add("tr");
tr6.classList.add("tr");
table2.classList.add("table2"); //table2

//td2Fila1.classList.add('td')
td2Fila1.setAttribute("class", "td front");
td3Fila1.setAttribute("class", "td front");
td4Fila1.setAttribute("class", "td front");
td5Fila1.setAttribute("class", "td front");
td6Fila1.setAttribute("class", "td front");
td7Fila2.setAttribute("class", "td front");
td8Fila2.setAttribute("class", "td front");
td9Fila2.setAttribute("class", "td front");
td10Fila2.setAttribute("class", "td front");
td11Fila2.setAttribute("class", "td front");
td12Fila3.setAttribute("class", "td front");
td13Fila3.setAttribute("class", "td front");
td14Fila3.setAttribute("class", "td front");
td15Fila3.setAttribute("class", "td front");
td16Fila3.setAttribute("class", "td front");
td17Fila4.setAttribute("class", "td front");
td18Fila4.setAttribute("class", "td front");
td19Fila4.setAttribute("class", "td front");
td20Fila4.setAttribute("class", "td front");
td21Fila4.setAttribute("class", "td front");
td22Fila5.setAttribute("class", "td front");
td23Fila5.setAttribute("class", "td front");
td24Fila5.setAttribute("class", "td front");
td25Fila5.setAttribute("class", "td front");
td26Fila5.setAttribute("class", "td front");

//  td3Fila1.classList.add('td')
//  td4Fila1.classList.add('td')
//  td5Fila1.classList.add('td')
//  td6Fila1.classList.add('td')
//  td7Fila2.classList.add('td')
//  td8Fila2.classList.add('td')
//  td9Fila2.classList.add('td')
// td10Fila2.classList.add('td')
// td11Fila2.classList.add('td')
// td12Fila3.classList.add('td')
// td13Fila3.classList.add('td')
// td14Fila3.classList.add('td')
// td15Fila3.classList.add('td')
// td16Fila3.classList.add('td')
// td17Fila4.classList.add('td')
// td18Fila4.classList.add('td')
// td19Fila4.classList.add('td')
// td20Fila4.classList.add('td')
// td21Fila4.classList.add('td')
// td22Fila5.classList.add('td')
// td23Fila5.classList.add('td')
// td24Fila5.classList.add('td')
// td25Fila5.classList.add('td')
// td26Fila5.classList.add('td')

th.innerText = "CORRELATIVOS";
th2.innerText = "~~ A ~~";
th3.innerText = "~~ E ~~";
th4.innerText = "~~ O ~~";
th5.innerText = "~~ AM ~~";
th6.innerText = "~~ EL ~~";

//columnas th
th7.innerText = "~~ KI ~~";
th8.innerText = "~~ TI ~~";
th9.innerText = "~~ I ~~";
th10.innerText = "~~ NENI ~~";
th11.innerText = "~~ CXI ~~";

//td2Fila1.innerText="Que tipo";
td2Fila1.innerText = "Que tipo";
td3Fila1.innerText = "Que lugar";
td4Fila1.innerText = "Que cosa";
td5Fila1.innerText = "Que tiempo";
td6Fila1.innerText = "Que modo";
td7Fila2.innerText = "Aquel tipo";
td8Fila2.innerText = "Aquel lugar";
td9Fila2.innerText = "Aquella cosa ";
td10Fila2.innerText = "Aquel tiempo";
td11Fila2.innerText = "Aquel modo";
td12Fila3.innerText = "Algun tipo";
td13Fila3.innerText = "Algun lugar";
td14Fila3.innerText = "Alguna cosa";
td15Fila3.innerText = "Algun tiempo";
td16Fila3.innerText = "Algun modo";
td17Fila4.innerText = "Ningun tipo";
td18Fila4.innerText = "Ningun lugar";
td19Fila4.innerText = "Ninguna cosa";
td20Fila4.innerText = "Ningun tiempo";
td21Fila4.innerText = "Ningun modo";

td22Fila5.innerText = "todos los tipos";
td23Fila5.innerText = "todos los lugares";
td24Fila5.innerText = "todas las cosas";
td25Fila5.innerText = "todos los tiempos";
td26Fila5.innerText = "todos los modos";

const funcion=()=>{
tbody.appendChild(tr);
tr.appendChild(th);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
tr.appendChild(th5);
tr.appendChild(th6);

//columnas
tbody.appendChild(tr2);
tr2.appendChild(th7);
tr2.appendChild(td2Fila1);
tr2.appendChild(td3Fila1);
tr2.appendChild(td4Fila1);
tr2.appendChild(td5Fila1);
tr2.appendChild(td6Fila1);

tbody.appendChild(tr3);
tr3.appendChild(th8);
tr3.appendChild(td7Fila2);
tr3.appendChild(td8Fila2);
tr3.appendChild(td9Fila2);
tr3.appendChild(td10Fila2);
tr3.appendChild(td11Fila2);

tbody.appendChild(tr4);
tr4.appendChild(th9);
tr4.appendChild(td12Fila3);
tr4.appendChild(td13Fila3);
tr4.appendChild(td14Fila3);
tr4.appendChild(td15Fila3);
tr4.appendChild(td16Fila3);

tbody.appendChild(tr5);
tr5.appendChild(th10);
tr5.appendChild(td17Fila4);
tr5.appendChild(td18Fila4);
tr5.appendChild(td19Fila4);
tr5.appendChild(td20Fila4);
tr5.appendChild(td21Fila4);

tbody.appendChild(tr6);
tr6.appendChild(th11);

tr6.appendChild(td22Fila5);
tr6.appendChild(td23Fila5);
tr6.appendChild(td24Fila5);
tr6.appendChild(td25Fila5);
tr6.appendChild(td26Fila5);

thead.appendChild(tbody);
table2.appendChild(thead);
container.appendChild(table2);
td3Fila1.onclick = (event)=> {
   
  td3Fila1.removeAttribute("td front");
//  td3Fila1.classList.toggle('td','front')
setTimeout(()=>{
  const   element=event.target;
  element.classList.toggle('back')?
  element.innerHTML = "...KIE...<br>DONDE": element.innerHTML = "CUAL LUGAR";
   } ,1000)
  }
td4Fila1.onclick = cambiar3;
td5Fila1.onclick = cambiar4;
td6Fila1.onclick = cambiar5;
td7Fila2.onclick = cambiar6;
td8Fila2.onclick = cambiar7;
td9Fila2.onclick = cambiar8;
td10Fila2.onclick = cambiar9;
td11Fila2.onclick = cambiar10;
td12Fila3.onclick = cambiar11;
td13Fila3.onclick = cambiar12;
td14Fila3.onclick = cambiar13;
td15Fila3.onclick = cambiar14;
td16Fila3.onclick = cambiar15;
td17Fila4.onclick = cambiar16;
td18Fila4.onclick = cambiar17;
td19Fila4.onclick = cambiar18;
td20Fila4.onclick = cambiar19;
td21Fila4.onclick = cambiar20;
td22Fila5.onclick = cambiar21;
td23Fila5.onclick = cambiar22;
td24Fila5.onclick = cambiar23;
td25Fila5.onclick = cambiar24;
td26Fila5.onclick = cambiar25;

}
const contenedor = document.querySelector("#headerPrincipal");
contenedor.appendChild(container);
contenedor.appendChild(checkComplete());

const cambiar3=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerHTML= '...KIO...<br>QUE COSA': element.textContent = "QUE";
}
const cambiar4=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText= "...KIAM...\nCUANDO": element.textContent = "QUE TIEMPO";
}
const cambiar5=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText= "...KIEL...\nCOMO": element.textContent = "QUE MODO";
}
const cambiar6=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText= "...TIA...\n...ASI...\nESE TIPO": element.textContent = "AQUEL TIPO";
}
const cambiar7=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...TIE...\n...ALLA...\nAHI": element.textContent = "AQUEL LUGAR";
}
const cambiar8=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...TIO...\nESO": element.textContent = "AQUELLA COSA";
}
const cambiar9=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...TIAM...\nENTONCES": element.textContent = "AQUEL TIEMPO";
}
const cambiar10=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...TIEL...\n...ASI...\nESE MODO": element.textContent = "AQUEL MODO";
}
const cambiar11=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...IA...\nALGUN TIPO": element.textContent = "ALGUN TIPO";
}
const cambiar12=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...IE...\nALGUN LUGAR": element.textContent = "ALGUN LUGAR";
}
const cambiar13=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...IO...\nALGO": element.textContent = "ALGUNA COSA";
}
const cambiar14=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...IAM...\nALGUNA VEZ": element.textContent = "ALGUNA VEZ";
}
const cambiar15=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...IEL...\nALGUN MODO": element.textContent = "ALGUN MODO";
}
const cambiar16=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...NENIA...\nNINGUN TIPO": element.textContent = "NINGUN TIPO";
}
const cambiar17=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...NENIE...\nNINGUN LUGAR": element.textContent = "NINGUN LUGAR";
}
const cambiar18=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...NENI0...\nNADA": element.textContent = "NINGUNA COSA";
}
const cambiar19=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...NENIAM...\nNUNCA": element.textContent = "NINGUN TIEMPO";
}
const cambiar20=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...NENIEL...\nNINGUN MODO": element.textContent = "NINGUN MODO";
}
const cambiar21=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...CXIA...\nTODO TIPO": element.textContent = "TODO TIPO";
}
const cambiar22=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...CXIE...\nEN TODOS LADOS": element.textContent = "EN TODOS LADOS";
}
const cambiar23=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...CXIO...\nTODO": element.textContent = "TODA COSA";
}
const cambiar24=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...CXIAM...\nSIEMPRE": element.textContent = "TODO TIEMPO";
}
const cambiar25=(event)=>{
  const   element=event.target;
element.classList.toggle('front')
element.classList.toggle('back')?
element.innerText="...CXIEL...\nTODO MODO": element.textContent = "TODO MODO";
}
let time=1
td2Fila1.onclick = function() {
if(time==2){time=0}
if (time==1) {
    td2Fila1.removeAttribute("td front");
    td2Fila1.setAttribute("class", "td back");
    setTimeout(()=>{
      td2Fila1.innerHTML = "...KIA...<br>type/way"
    } ,1000)
  }
else{
      td2Fila1.removeAttribute("td back");
      td2Fila1.setAttribute("class", "td front");
      td2Fila1.innerText = "Que tipo";  
    }
time++;
}
document.getElementById('reset').addEventListener('click',()=>location.reload())
window.addEventListener('load', funcion)
