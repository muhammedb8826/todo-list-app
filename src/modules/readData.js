const readDataFromDb = () => {
  const dbName = 'todoList';
  const storedData = localStorage.getItem(dbName);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};
export default readDataFromDb;