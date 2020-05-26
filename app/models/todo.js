export default class Todo {
  constructor(data){
    this._id = data._id
    this.description = data.description
    this.user = data.user
    this.completed = data.completed
  }

  get Template(){
    return `
    <ul class="my-0 py-0 text-left pl-2">
    <li class="m-0 p-0">
    <p class="m-0"><input type="checkbox" onchange="app.todoController.toggleTodoStatus('${this._id}')">  ${this.description}  <i class="fa fa-times text-danger" onclick="app.todoController.removeTodo('${this._id}')"></i></p>
    </li>
    </ul>
    `
  }
}
