import checkComplete from './modulos/checkPut.js';
import checkDelete from './modulos/checkDelete.js';
var boton2=document.querySelector('.headerPrincipal')
const funcion=()=>{
    const botonInicio = document.createElement("div");
    const agregar = document.createElement("div");
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const input = document.createElement("input");
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText="texto"
    input.value="input"
    input.classList.add("btn","success")
    div.classList.add("card2")
    ul.appendChild(li);
    li.appendChild(input);
    input.appendChild(span);
    agregar.appendChild(checkComplete());  
    div.appendChild(agregar);
    div.appendChild(ul);
    div.appendChild(checkDelete()); 
    botonInicio.appendChild(div)
     boton2.appendChild(botonInicio)
     agregar.addEventListener('click',funcion)
     div.addEventListener('click',funcion2)
}
const funcion2=()=>{
    div.appendChild(checkDelete());
}
window.addEventListener('load', funcion)
