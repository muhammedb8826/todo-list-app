import saveToLocalStorage from './saveToDb.js';

const removeData = (todoCollection, item) => {
  const filteredData = todoCollection.filter((todo, index) => item !== index);
  const todos = filteredData.map((todo, index) => ({ ...todo, index: index + 1 }));
  saveToLocalStorage(todos);
  return todos;
};

export default removeData;
