import renderData from './render.js';
import saveToLocalStorage from './saveToDb.js';

const clearCompleted = (todoCollection) => {
  const filteredData = todoCollection.filter((task) => !task.completed);
  renderData(filteredData);
  saveToLocalStorage(filteredData);
};

export default clearCompleted;