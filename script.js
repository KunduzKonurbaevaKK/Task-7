let Todo = document.querySelector(".todo-list");
let input = document.querySelector('input');
let btn = document.querySelector('#btn');

let i=0;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputVal = input.value;
  if(inputVal){

    const listItem = document.createElement('div');
    listItem.classList.add('list-item');
    listItem.innerText = ++i +'. ' + inputVal;
    Todo.appendChild(listItem);
    input.value = "";
   

   listItem.onclick = function (){
    Todo.removeChild(listItem);
   }
  }
  
});
