import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/JAKE/todos/",
  timeout: 8000
});

class TodoService {

  constructor(){
    this.getTodos()
  }

  //GET
  getTodos() {
  todoApi.get('')
    .then(res => {
      let todo = res.data.data.map(t => new Todo(t))
      store.commit('todos', todo)
    })
  }
  
  

  //POST
  async addTodoAsync(todo) {
  todoApi
  .post 
  todoApi.post("", new Todo(todo))
  .then((res) => {
    this.getTodos();
  })  
  .catch((e) => console.error(e));
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    if(todo){
      todo.completed = !todo.completed
    }
    todoApi.put(todoId, todo)
    .then(res => {
      this.getTodos()
    })
    .catch(e => console.error(e))
  
  }
  //Delete
  async removeTodoAsync(todoId) {
    let todo = store.State.todos.find(t => t._id == todoId)
    let res = await todoApi.delete(todo._id)
    this.getTodos()
}
}
const todoService = new TodoService();
export default todoService;
