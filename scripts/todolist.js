




const todoList = [];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index){
    
    const {name, dueDate} = todoObject
    const html = `<div> ${name}</div>  <div>${dueDate}
    </div> <div> <button class = "delete-button js-delete-button">Delete</button></div>
    `;
    todoListHTML += html;
       
  })

    document.querySelector('.js-to-do-list').innerHTML = todoListHTML;
   
    const deleteButton = document.querySelectorAll('.js-delete-button');
    deleteButton.forEach((deleteButt, index) => {
      deleteButt.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
  })

})
}



function toDoList (){
  const inputElement = document.querySelector(".js-todo-list");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  todoList.push({name,
   dueDate});
  inputElement.value = ''

  renderTodoList();
}


