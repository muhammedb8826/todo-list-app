import saveToLocalStorage from './saveToDb.js';

const clearCompleted = (todo) => {
  todo = todo.filter((task) => !task.completed);
  saveToLocalStorage(todo);
  window.location.reload();
};

export default clearCompleted;