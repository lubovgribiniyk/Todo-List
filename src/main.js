import TodoListComponent from './components/TodoList';

const root = document.getElementById("root");

const todo = new TodoListComponent(root);
todo.mount();
