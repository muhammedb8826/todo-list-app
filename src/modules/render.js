const renderData = (description) => `<li class="list">
        <input type="checkbox" class="todo-status"/>
        <input type="text" class="todo-content" value="${description}"/>
        <button class="trash-and-drag-icon">
        <i class='trash fa-solid fa-trash-can'></i><i class='drag fa fa-ellipsis-v'></i>
        </button>
    </li>`;

export default renderData;
