import saveToLocalStorage from './saveToDb.js';

const clearCompleted = (todoCollection) => {
  const filteredData = todoCollection.filter((task) => !task.completed);
  saveToLocalStorage(filteredData);
  return filteredData;
};

export default clearCompleted;