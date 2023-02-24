const userInput = document.getElementById('todoInput');
const createData = (todoCollection) => {
  const todo = { description: userInput.value, completed: false, index: todoCollection.length + 1 };
  todoCollection.push(todo);
  userInput.value = '';
  userInput.focus();
};

export default createData;
