export default class List {
  constructor(root, props = {}) {
    this.root = root;
    this.taskList = props.taskList;
  }

  mount() {
    this.root.innerHTML = this.render();
  }

  render() {
    return `
       ${this.taskList.map(item => `<div class="list-item">${item}</div>`).join('')}
    `;
  }
}
