import saveToLocalStorage from './saveToDb.js';

const todoStatus = (todo) => {
  const checkStatusInput = document.querySelectorAll('.todo-status');
  const todoContent = document.querySelectorAll('.todo-content');
  for (let i = 0; i < todo.length; i += 1) {
    checkStatusInput[i].addEventListener('change', (e) => {
      if (e.target.checked) {
        todo[i].completed = true;
        todoContent[i].classList.add('completed');
        saveToLocalStorage(todo);
      }
      if (!e.target.checked) {
        todoContent[i].classList.remove('completed');
        todo[i].completed = false;
        saveToLocalStorage(todo);
      }
    });
  }
};

export default todoStatus;