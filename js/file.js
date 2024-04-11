const lista_cursos=[]
lista_cursos.push({
    titulo: 'boton',
    texto: 'Curso Uno',
    imagen: "imagenes/Captura.PNG",
    enlace: 'fileHtml/sustantivos.html',
});
lista_cursos.push({
    titulo: 'Flask',
    texto: 'Curso Dos',
    imagen: "imagenes/Captura.PNG",
    enlace: 'fileHtml/verbos.html'
});
lista_cursos.push({
    titulo: 'boton',
    texto: 'Curso Tres',
    imagen: "imagenes/Captura.PNG",
    enlace: 'fileHtml/correlativos.html'
});
lista_cursos.push({
    titulo: 'Flask',
    texto: 'Curso Cuatro',
    imagen: "imagenes/Captura.PNG",
    enlace: 'fileHtml/preposiciones.html'
});
lista_cursos.push({
    titulo: 'Flask',
    texto: 'Curso Cinco',
    imagen: "imagenes/Captura.PNG",
    enlace: 'fileHtml/adjetivos.html'
});
lista_cursos.push({
    titulo: 'pronombres',
    texto: 'Curso Seis',
    imagen: "./imagenes/Captura.PNG",
    enlace: './fileHtml/pronombres1.html'
});
lista_cursos.push({
    titulo: 'pronombres',
    texto: 'Curso Siete',
    imagen: "./imagenes/Captura.PNG",
    enlace: './fileHtml/img.html'
});
//const enlace= './pageWithJavascript.html';
const container = document.createElement('div');
container.classList.add('logo');
for (curso of lista_cursos) {
    const  logo= document.createElement('div');
    logo.classList.add('container');
        const boton1 = document.createElement('a');
    boton1.classList.add('headerPrincipal-titulo');
    boton1.setAttribute('href',curso.enlace);
    boton1.innerHTML=curso.texto;
    
    logo.appendChild(boton1);
    container.appendChild(logo);
    }
     const contenedor = document.querySelector('.headerPrincipal');
    contenedor.appendChild(container);




// function build(){
//     alert()
// }
    
// contenedor.addEventListener('click', build)
