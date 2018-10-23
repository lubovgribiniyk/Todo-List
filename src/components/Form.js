export default class Form {
  constructor(root, props = {}) {
    this.root = root;
    this.addTaskFn = props.addTaskFn;
  }

  querySelectors() {
    this.input = this.root.querySelector('.form-input');
    this.addButton = this.root.querySelector('.form-button');
  }

  addEventListeners() {
    this.addButton.addEventListener('click', this.handleAddClick.bind(this));
  }

  handleAddClick(e) {
    e.preventDefault();
    const inputValue = this.input.value;
    this.addTaskFn(inputValue);
  }

  mount() {
    this.root.innerHTML = this.render();
    this.querySelectors();
    this.addEventListeners();
  }

  render() {
    return `
      <form>
       <input type="text" placeholder="Enter task" class="form-input">
       <button class="form-button">Add task</button>
      </form>
    `;
  }
}
