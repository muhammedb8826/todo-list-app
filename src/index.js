import './style.css';
import createData from './modules/createData.js';
import readDataFromDb from './modules/readData.js';
import saveToLocalStorage from './modules/saveToDb.js';
import renderData from './modules/render.js';
import editData from './modules/editData.js';
import getElementIndex from './modules/getIndex.js';

class TodoApp {
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
    this.todoCollection = this.todoCollection.filter((todo, index) => item !== index);
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
    getElementIndex(this.todoCollection, this.todoCollection.length);
  }
}

window.onload = () => {
  const t = new TodoApp();
  t.ShowData();
};
