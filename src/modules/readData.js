const dbName = 'todoList';
const readDataFromDb = () => {
  const storedData = localStorage.getItem(dbName);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};
export default readDataFromDb;