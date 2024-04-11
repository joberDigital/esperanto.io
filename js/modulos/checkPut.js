var contador=0
const checkComplete = () => {
    // const i = document.createElement('i');
    // i.classList.add('far', 'fa-check-square', 'icon');
    // i.addEventListener('click', completeTask);
    // return i;
    const button1 = document.createElement("button");
    button1.classList.add("btn")
    contador++
    button1.innerText=contador
  
return button1;
};
  // Immediately invoked function expression IIFE
//   const completeTask = (event) => {
//     const element = event.target;
//     element.classList.toggle('fas');
//     element.classList.toggle('completeIcon');
//     element.classList.toggle('far');
//   };
  
  export default checkComplete;