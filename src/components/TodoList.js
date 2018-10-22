import Form from "./Form";
import List from "./List";

export default class TodoListComponent {
  constructor(root) {
    this.root = root;
    this.taskList = [];
  }

  querySelectors() {
    this.formRoot = this.root.querySelector(".todo-list__form");
    this.taskListRoot = this.root.querySelector(".todo-list__task-list");
  }

  handleAddClick(inputValue) {
    if (inputValue.trim()) {
      this.taskList.push(inputValue);
      this.mount();
    }
  }

  mountChildren() {
    this.formComponent = new Form(this.formRoot, { addTaskFn: this.handleAddClick.bind(this) });
    this.formComponent.mount();

    this.taskListComponent = new List(this.taskListRoot, { taskList: this.taskList });
    this.taskListComponent.mount();
  }

  mount() {
    this.root.innerHTML = this.render();
    this.querySelectors();
    this.mountChildren();
  }

  render() {
    return `
      <div class="todo-list">
        <div class="todo-list__form"></div>
        <div class="todo-list__task-list"></div>
      </div>
    `;
  }
}
