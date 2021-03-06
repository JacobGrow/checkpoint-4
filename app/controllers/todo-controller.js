import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  console.log("Drawing todos")
  let todos = store.State.todos
  let template = ''
  todos.forEach(t => template += t.Template)
  document.getElementById('todos').innerHTML = template
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos();
    store.subscribe("todos", _drawTodos)
  }

  addTodo(event) {
    event.preventDefault();
    let form = event.target;
    let todo = {
      //TODO build the todo object from the data that comes into this method
      description: form.addTodo.value
    };
    TodoService.addTodoAsync(todo);
    form.reset();
    console.log(todo)
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
