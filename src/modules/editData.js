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

  todoContent.forEach((input, i) => input.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    todoLists[i].classList.add('active');
    todoLists[i].focus();
    trashIcon[i].style.display = 'flex';
    dragIcon[i].style.display = 'none';
    todoContent[i].focus();
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

  todoLists.forEach((trash, i) => trash.addEventListener('mouseleave', () => {
    todoContent[i].blur();
    todoLists[i].classList.remove('active');
    trashIcon[i].style.display = 'none';
    dragIcon[i].style.display = 'block';
  }));
};
export default editData;