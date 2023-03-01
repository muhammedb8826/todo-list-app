import saveToLocalStorage from './saveToDb.js';

const refreshIcon = document.querySelector('.refresh-icon');
const editData = (dataArray) => {
  refreshIcon.addEventListener('click', () => {
    window.location.reload();
  });

  const todoLists = document.querySelectorAll('.list');
  const todoContent = document.querySelectorAll('.todo-content');
  const dragIcon = document.querySelectorAll('.drag-icon');
  const trashIcon = document.querySelectorAll('.trash-icon');

  todoLists.forEach((input, item) => input.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    todoLists[item].classList.add('active');
    trashIcon[item].style.display = 'flex';
    dragIcon[item].style.display = 'none';
    todoContent[item].focus();
    for (let i = 0; i < todoLists.length; i += 1) {
      if (item !== i) {
        todoLists[i].classList.remove('active');
        trashIcon[i].style.display = 'none';
        dragIcon[i].style.display = 'block';
      }
    }
  }));

  todoContent.forEach((todo, i) => todo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      dataArray[i].description = todoContent[i].value;
      saveToLocalStorage(dataArray);
      todoContent[i].blur();
      todoLists[i].classList.remove('active');
      trashIcon[i].style.display = 'none';
      dragIcon[i].style.display = 'block';
    }
  }));
};
export default editData;