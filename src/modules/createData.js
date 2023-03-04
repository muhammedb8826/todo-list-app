import saveToLocalStorage from './saveToDb.js';

const createData = (todoCollection) => {
  const userInput = document.getElementById('todoInput');
  const todo = { description: userInput.value, completed: false, index: todoCollection.length + 1 };
  todoCollection.push(todo);
  userInput.value = '';
  userInput.focus();
  saveToLocalStorage(todoCollection);
};

export default createData;
