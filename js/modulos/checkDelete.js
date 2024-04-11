const deleteIcon = () => {
//     const i = document.createElement('i');
//     i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
//     i.addEventListener('click', deleteTask);
//     return i;
//   };
const button2 = document.createElement("button");
button2.classList.add("btn")
button2.innerText="DELETE"

button2.addEventListener('click', deleteTask);

return button2;
};
  const deleteTask = (event) => {
console.log(event.target.parentElement)
    const parent = event.target.parentElement;
    parent.remove();
  };
  
  export default deleteIcon;