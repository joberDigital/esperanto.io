let time = 1;

const checkComplete = () => {
    const container=document.createElement("div");
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

  tbody.classList.add("table3");

  container.classList.add("table3");
  th2.classList.add("th");
  th3.classList.add("th");
  th4.classList.add("th");
  th5.classList.add("th");
  th6.classList.add("th");
  tr.classList.add("tr");
  tr2.classList.add("tr");
  tr3.classList.add("tr");
  tr4.classList.add("tr");
  tr5.classList.add("tr");
  tr6.classList.add("tr");
  table2.classList.add("table3"); //table2

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

  th.innerText = "RESET";

  th2.innerText = "~~ U ~~";
  th3.innerText = "~~ AL ~~";
  th4.innerText = "~~ OM ~~";
  th5.innerText = "~~ ES ~~";

  //columnas th
  th7.innerText = "~~ KI ~~";
  th8.innerText = "~~ TI ~~";
  th9.innerText = "~~ I ~~";
  th10.innerText = "~~ NENI ~~";
  th11.innerText = "~~ CXI ~~";

  //td2Fila1
  td2Fila1.innerText = "Cual Persona ";
  td3Fila1.innerText = "Cual Razón";
  td4Fila1.innerText = "Cual Cantidad";
  td5Fila1.innerText = "Cual Dueño";
  //td2Fila2;
  td7Fila2.innerText = "Aquella Persona";
  td8Fila2.innerText = "Aquella Razón";
  td9Fila2.innerText = "Aquella Cantidad ";
  td10Fila2.innerText = "Aquel Dueño";
  //td2Fila3
  td12Fila3.innerText = "Alguna Persona";
  td13Fila3.innerText = "Alguna Razón";
  td14Fila3.innerText = "Alguna Cantidad";
  td15Fila3.innerText = "Algun Dueño";
  //td2Fila4
  td17Fila4.innerText = "Ninguna Persona";
  td18Fila4.innerText = "Ninguna Razón";
  td19Fila4.innerText = "Ninguna Cantidad";
  td20Fila4.innerText = "Ningun Dueño";
  //td2Fila5
  td22Fila5.innerText = "toda Persona";
  td23Fila5.innerText = "toda Razón";
  td24Fila5.innerText = "toda Cantidad";
  td25Fila5.innerText = "todo Dueño";

  tbody.appendChild(tr);
  tr.appendChild(th);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);

  //columnas
  tbody.appendChild(tr2);
  tr2.appendChild(th7);
  tr2.appendChild(td2Fila1);
  tr2.appendChild(td3Fila1);
  tr2.appendChild(td4Fila1);
  tr2.appendChild(td5Fila1);

  tbody.appendChild(tr3);
  tr3.appendChild(th8);
  tr3.appendChild(td7Fila2);
  tr3.appendChild(td8Fila2);
  tr3.appendChild(td9Fila2);
  tr3.appendChild(td10Fila2);

  tbody.appendChild(tr4);
  tr4.appendChild(th9);
  tr4.appendChild(td12Fila3);
  tr4.appendChild(td13Fila3);
  tr4.appendChild(td14Fila3);
  tr4.appendChild(td15Fila3);

  tbody.appendChild(tr5);
  tr5.appendChild(th10);
  tr5.appendChild(td17Fila4);
  tr5.appendChild(td18Fila4);
  tr5.appendChild(td19Fila4);
  tr5.appendChild(td20Fila4);

  tbody.appendChild(tr6);
  tr6.appendChild(th11);

  tr6.appendChild(td22Fila5);
  tr6.appendChild(td23Fila5);
  tr6.appendChild(td24Fila5);
  tr6.appendChild(td25Fila5);

  td2Fila1.onclick = cambiar1;
  td3Fila1.onclick = cambiar2;
  td4Fila1.onclick = cambiar3;
  td5Fila1.onclick = cambiar4;

  td7Fila2.onclick = cambiar5;
  td8Fila2.onclick = cambiar6;
  td9Fila2.onclick = cambiar7;
  td10Fila2.onclick = cambiar8;

  td12Fila3.onclick = cambiar9;
  td13Fila3.onclick = cambiar10;
  td14Fila3.onclick = cambiar11;
  td15Fila3.onclick = cambiar12;

  td17Fila4.onclick = cambiar13;
  td18Fila4.onclick = cambiar14;
  td19Fila4.onclick = cambiar15;
  td20Fila4.onclick = cambiar16;

  td22Fila5.onclick = cambiar17;
  td23Fila5.onclick = cambiar18;
  td24Fila5.onclick = cambiar19;
  td25Fila5.onclick = cambiar20;
  container.appendChild(table2);
  table2.appendChild(thead);
  thead.appendChild(tbody);
  th.addEventListener('click',()=>location.reload())
  return tbody;
};
// Immediately invoked function expression IIFE
const cambiar1 = (event) => {
  const element = event.target;
  element.classList.toggle("front");
  element.classList.toggle("back");

  if (time == 2) {
    time = 0;
  }
  if (time == 1) {
    setTimeout(() => {
      element.innerText = "Quien/Cual";
    }, 1000);
  } else {
    element.classList.toggle("td", "back");
    element.classList.toggle("td", "front");
    element.innerText = "...KIU...\nCual\nPersona ";
  }
  time++;
};
const cambiar2 = (event) => {
  const element = event.target;
  element.classList.toggle("front");
  element.classList.toggle("back");

  if (time == 2) {
    time = 0;
  }
  if (time == 1) {
    setTimeout(() => {
      element.innerText = "PORQUE";
    }, 1000);
  } else {
    element.classList.toggle("td", "back");
    element.classList.toggle("td", "front");
    element.innerText = "...KIAL...\nCual\nRazón ";
  }
  time++;
};
const cambiar3 = (event) => {
  const element = event.target;
  element.classList.toggle("front");
  element.classList.toggle("back");

  if (time == 2) {
    time = 0;
  }
  if (time == 1) {
    setTimeout(() => {
      element.innerText = "CUANTO";
    }, 1000);
  } else {
    element.classList.toggle("td", "back");
    element.classList.toggle("td", "front");
    element.innerText = "...KIOM...\nCual\nCantidad ";
  }
  time++;
};
const cambiar4 = (event) => {
  const element = event.target;
  element.classList.toggle("front");
  element.classList.toggle("back");

  if (time == 2) {
    time = 0;
  }
  if (time == 1) {
    setTimeout(() => {
      element.innerText = "DE QUIEN";
    }, 1000);
  } else {
    element.classList.toggle("td", "back");
    element.classList.toggle("td", "front");
    element.innerText = "...KIES...\nCual\nDueño ";
  }
  time++;
};
const cambiar5 = (event) => {
  const element = event.target;
  element.classList.toggle("front");
  element.classList.toggle("back");

  if (time == 2) {
    time = 0;
  }
  if (time == 1) {
    setTimeout(() => {
      element.innerText = "ESE/ESA";
    }, 1000);
  } else {
    element.classList.toggle("td", "back");
    element.classList.toggle("td", "front");
    element.innerText = "...TIU...\nAquella\nPersona ";
  }
  time++;
};
const cambiar6 = (event) => {
  const element = event.target;
  element.classList.toggle("front");
  element.classList.toggle("back");

  if (time == 2) {
    time = 0;
  }
  if (time == 1) {
    setTimeout(() => {
      element.innerText = "DADO QUE\nPOR ESO";
    }, 1000);
  } else {
    element.classList.toggle("td", "back");
    element.classList.toggle("td", "front");
    element.innerText = "...TIAL...\nAquella\nRazón ";
  }
  time++;
};
const cambiar7 = (event) => {
  const element = event.target;
  element.classList.toggle("front");
  element.classList.toggle("back");

  if (time == 2) {
    time = 0;
  }
  if (time == 1) {
    setTimeout(() => {
      element.innerText = "ESA CANTIDAD";
    }, 1000);
  } else {
    element.classList.toggle("td", "back");
    element.classList.toggle("td", "front");
    element.innerText = "...TIOM...\nAquella\nCantidad ";
  }
  time++;
};
const cambiar8 = (event) => {
  const element = event.target;
  element.classList.toggle("front");
  element.classList.toggle("back");

  if (time == 2) {
    time = 0;
  }
  if (time == 1) {
    setTimeout(() => {
      element.innerText = "CUYO/HAY\nUN/ESE";
    }, 1000);
  } else {
    element.classList.toggle("td", "back");
    element.classList.toggle("td", "front");
    element.innerText = "...TIES...\nAquel\nDueño ";
  }
  time++;
};
const cambiar9 = (event) => {
    const element = event.target;
    element.classList.toggle("front");
    element.classList.toggle("back");
  
    if (time == 2) {
      time = 0;
    }
    if (time == 1) {
      setTimeout(() => {
        element.innerText = "ALGUIEN\nALGUN";
      }, 1000);
    } else {
      element.classList.toggle("td", "back");
      element.classList.toggle("td", "front");
      element.innerText = "...IU...\nAlguna\nPersona";
    }
    time++;
  };
  const cambiar10 = (event) => {
    const element = event.target;
    element.classList.toggle("front");
    element.classList.toggle("back");
  
    if (time == 2) {
      time = 0;
    }
    if (time == 1) {
      setTimeout(() => {
        element.innerText = "ALGUNA\nRAZON";
      }, 1000);
    } else {
      element.classList.toggle("td", "back");
      element.classList.toggle("td", "front");
      element.innerText = "...KIAL...\nAlguna\nRazón ";
    }
    time++;
  };
  const cambiar11 = (event) => {
    const element = event.target;
    element.classList.toggle("front");
    element.classList.toggle("back");
  
    if (time == 2) {
      time = 0;
    }
    if (time == 1) {
      setTimeout(() => {
        element.innerText = "ALGUNA CANTIDA";
      }, 1000);
    } else {
      element.classList.toggle("td", "back");
      element.classList.toggle("td", "front");
      element.innerText = "...IOM...\nAlguna\nCantidad ";
    }
    time++;
  };
  const cambiar12 = (event) => {
    const element = event.target;
    element.classList.toggle("front");
    element.classList.toggle("back");
  
    if (time == 2) {
      time = 0;
    }
    if (time == 1) {
      setTimeout(() => {
        element.innerText = "DE ALGUIEN";
      }, 1000);
    } else {
      element.classList.toggle("td", "back");
      element.classList.toggle("td", "front");
      element.innerText = "...IES...\nAlgun\nDueño ";
    }
    time++;
  };
  const cambiar13 = (event) => {
    const element = event.target;
    element.classList.toggle("front");
    element.classList.toggle("back");
  
    if (time == 2) {
      time = 0;
    }
    if (time == 1) {
      setTimeout(() => {
        element.innerText = "DE NADIE\nNINGUNO";
      }, 1000);
    } else {
      element.classList.toggle("td", "back");
      element.classList.toggle("td", "front");
      element.innerText = "...NENIU...\nNinguna\nPersona";
    }
    time++;
  };
  const cambiar14 = (event) => {
    const element = event.target;
    element.classList.toggle("front");
    element.classList.toggle("back");
  
    if (time == 2) {
      time = 0;
    }
    if (time == 1) {
      setTimeout(() => {
        element.innerText = "NINGUNA\nRAZON";
      }, 1000);
    } else {
      element.classList.toggle("td", "back");
      element.classList.toggle("td", "front");
      element.innerText = "...NENIAL...\nNinguna\nRazón ";
    }
    time++;
  };
  const cambiar15 = (event) => {
    const element = event.target;
    element.classList.toggle("front");
    element.classList.toggle("back");
  
    if (time == 2) {
      time = 0;
    }
    if (time == 1) {
      setTimeout(() => {
        element.innerText = "NADA";
      }, 1000);
    } else {
      element.classList.toggle("td", "back");
      element.classList.toggle("td", "front");
      element.innerText = "...NENIOM...\nNinguna\nCantidad ";
    }
    time++;
  };
  const cambiar16 = (event) => {
    const element = event.target;
    element.classList.toggle("front");
    element.classList.toggle("back");
  
    if (time == 2) {
      time = 0;
    }
    if (time == 1) {
      setTimeout(() => {
        element.innerText = "DE NADIE";
      }, 1000);
    } else {
      element.classList.toggle("td", "back");
      element.classList.toggle("td", "front");
      element.innerText = "...NENIES...\nNingun\nDueño ";
    }
    time++;
  };
  const cambiar17 = (event) => {
    const element = event.target;
    element.classList.toggle("front");
    element.classList.toggle("back");
  
    if (time == 2) {
      time = 0;
    }
    if (time == 1) {
      setTimeout(() => {
        element.innerText = "TODOS\nCADA UNO";
      }, 1000);
    } else {
      element.classList.toggle("td", "back");
      element.classList.toggle("td", "front");
      element.innerText = "...CXU...\nToda\nPersona";
    }
    time++;
  };
  const cambiar18 = (event) => {
    const element = event.target;
    element.classList.toggle("front");
    element.classList.toggle("back");
  
    if (time == 2) {
      time = 0;
    }
    if (time == 1) {
      setTimeout(() => {
        element.innerText = "TODAS\nLAS\nRAZONES";
      }, 1000);
    } else {
      element.classList.toggle("td", "back");
      element.classList.toggle("td", "front");
      element.innerText = "...CXIAL...\nToda\nRazón ";
    }
    time++;
  };
  const cambiar19 = (event) => {
    const element = event.target;
    element.classList.toggle("front");
    element.classList.toggle("back");
  
    if (time == 2) {
      time = 0;
    }
    if (time == 1) {
      setTimeout(() => {
        element.innerText = "TODO";
      }, 1000);
    } else {
      element.classList.toggle("td", "back");
      element.classList.toggle("td", "front");
      element.innerText = "...CXIOM...\nToda\nCantidad ";
    }
    time++;
  };
  const cambiar20 = (event) => {
    const element = event.target;
    element.classList.toggle("front");
    element.classList.toggle("back");
  
    if (time == 2) {
      time = 0;
    }
    if (time == 1) {
      setTimeout(() => {
        element.innerText = "DE\nTODOS";
      }, 1000);
    } else {
      element.classList.toggle("td", "back");
      element.classList.toggle("td", "front");
      element.innerText = "...CXIES...\nDe\nTodos ";
    }
    time++;
  };

export default checkComplete;
