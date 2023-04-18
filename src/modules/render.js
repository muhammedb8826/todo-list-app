const renderData = (todoCollection) => {
  const todoContainer = document.querySelector('.list-container');
  todoContainer.innerHTML = todoCollection.map(
    (todo) => `<li class="list">
        <input type="checkbox" class="todo-status"/>
        <input type="text" class="todo-content" value="${todo.description}"/>
        <button class="drag-icon">
        <i class='drag fa fa-ellipsis-v'></i>
        </button>
        <button class="trash-icon">
        <i class='trash fa-solid fa-trash-can'></i>
        </button>
    </li>`,
  ).join('');
};
export default renderData;
