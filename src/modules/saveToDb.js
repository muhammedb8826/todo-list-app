const dbName = 'todoList';
const saveToLocalStorage = (todoCollection) => {
  localStorage.setItem(dbName, JSON.stringify(todoCollection));
};

export default saveToLocalStorage;