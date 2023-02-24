import './style.css';
import createData from './modules/createData.js';
import readDataFromDb from './modules/readData.js';
import saveToLocalStorage from './modules/saveToDb.js';
import renderData from './modules/render.js';

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

  ShowData() {
    this.todoContainer.innerHTML = this.todoCollection.map(
      (todo) => renderData(todo.description),
    ).join('');
    // for(let i = )

    const lists = document.querySelectorAll('list');
    for (let i = 0; i < lists.length; i += 1) {
      lists[i].addEventListener('click', () => {
        alert('hello');
      });
    }
    




    // const deleteBtn = document.querySelectorAll('.remove');
    // for (let i = 0; i < deleteBtn.length; i += 1) {
    //   deleteBtn[i].addEventListener('click', () => {
    //     this.removeBook(i);
    //     saveToLocalStorage(this.bookCollection);
    //     this.ShowBooks();
    //   });
    // }
  }
}

window.onload = () => {
  const t = new TodoApp();
  t.ShowData();
};
