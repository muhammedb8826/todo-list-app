import './style.css';
import createData from './modules/createData.js';
import readDataFromDb from './modules/readData.js';
import saveToLocalStorage from './modules/saveToDb.js';
import renderData from './modules/render.js';
import editData from './modules/editData.js';
import todoStatus from './modules/status.js';

export default class TodoApp {
  constructor() {
    this.todoCollection = readDataFromDb();
    this.userInput = document.getElementById('todoInput');
    this.todoContainer = document.querySelector('.list-container');
    this.userInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.CreateData();
        saveToLocalStorage(this.todoCollection);
        this.ShowData();
      }
    });
  }

  CreateData() {
    createData(this.todoCollection);
  }

  removeData(item) {
    this.todoCollection = this.todoCollection.filter((todos, index) => item !== index);
    this.todoCollection = this.todoCollection.map((todo, index) => ({ ...todo, index: index + 1 }));
  }

  ShowData() {
    this.todoContainer.innerHTML = this.todoCollection.map(
      (todo) => renderData(todo.description),
    ).join('');

    const trashIcon = document.querySelectorAll('.trash');

    for (let i = 0; i < trashIcon.length; i += 1) {
      trashIcon[i].addEventListener('click', () => {
        this.removeData(i);
        saveToLocalStorage(this.todoCollection);
        this.ShowData();
      });
    }

    editData(this.todoCollection);
    const clearCompletedBtn = document.querySelector('.clear-completed');
    clearCompletedBtn.addEventListener('click', () => {
      this.todoCollection = this.todoCollection.filter((task) => !task.completed);
      saveToLocalStorage(this.todoCollection);
      this.ShowData();
    });
    todoStatus(this.todoCollection);
  }
}

window.onload = () => {
  const t = new TodoApp();
  t.ShowData();
};
