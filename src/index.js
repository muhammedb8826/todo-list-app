import './style.css';
import createData from './modules/createData.js';
import readDataFromDb from './modules/readData.js';
import saveToLocalStorage from './modules/saveToDb.js';
import renderData from './modules/render.js';
import editData from './modules/editData.js';
import todoStatus from './modules/status.js';
import removeData from './modules/removeData.js';
import clearCompleted from './modules/clearCompleted.js';

export default class TodoApp {
  constructor() {
    this.todoCollection = readDataFromDb();
    this.clearCompletedBtn = document.querySelector('.clear-completed');
    this.userInput = document.getElementById('todoInput');
    this.enterIcon = document.querySelector('.fa-arrow-turn-down');
    this.refreshIcon = document.querySelector('.refresh-icon');
    this.userInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.CreateData();
        saveToLocalStorage(this.todoCollection);
        this.ShowData();
      }
    });

    this.enterIcon.addEventListener('click', () => {
      this.CreateData();
      saveToLocalStorage(this.todoCollection);
      this.ShowData();
    });

    this.refreshIcon.addEventListener('click', () => {
      window.location.reload();
    });
  }

  CreateData() {
    createData(this.todoCollection);
  }

  ShowData() {
    renderData(this.todoCollection);
    const trashIcon = document.querySelectorAll('.trash');
    trashIcon.forEach((todo, i) => todo.addEventListener('click', () => {
      const newTodo = removeData(this.todoCollection, i);
      this.todoCollection = newTodo;
      this.ShowData();
    }));

    const clearCompletedBtn = document.querySelector('.clear-completed');
    clearCompletedBtn.addEventListener('click', () => {
      clearCompleted(this.todoCollection);
    });

    editData(this.todoCollection);
    todoStatus(this.todoCollection);
  }
}

window.onload = () => {
  const t = new TodoApp();
  t.ShowData();
};
