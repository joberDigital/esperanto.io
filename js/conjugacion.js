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