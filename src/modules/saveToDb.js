const saveToLocalStorage = (todoCollection) => {
  const dbName = 'todoList';
  localStorage.setItem(dbName, JSON.stringify(todoCollection));
};

export default saveToLocalStorage;