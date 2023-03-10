import saveToLocalStorage from './saveToDb.js';

const removeData = (todoCollection, item) => {
  todoCollection = todoCollection.filter((todos, index) => item !== index);
  todoCollection = todoCollection.map((todo, index) => ({ ...todo, index: index + 1 }));
  window.location.reload();
  saveToLocalStorage(todoCollection);
};

export default removeData;
