import saveToLocalStorage from './saveToDb.js';

const editData = (dataArray) => {
  const todoLists = document.querySelectorAll('.list');
  const todoContent = document.querySelectorAll('.todo-content');
  const dragIcon = document.querySelectorAll('.drag');
  const trashIcon = document.querySelectorAll('.trash');

  todoContent.forEach((todo, i) => todo.addEventListener('click', () => {
    todo.focus();
    todoLists[i].classList.add('active');
    trashIcon[i].classList.add('active');
    dragIcon[i].style.display = 'none';
  }));

  todoContent.forEach((todo, i) => todo.addEventListener('focusout', () => {
    dataArray[i].description = todoContent[i].value;
    trashIcon[i].style.display = 'none';
    dragIcon[i].style.display = 'flex';
    todoLists[i].classList.remove('active');
    saveToLocalStorage(dataArray);
  }));

  todoContent.forEach((todo, i) => todo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      dataArray[i].description = todoContent[i].value;
      trashIcon[i].style.display = 'none';
      todoLists[i].classList.remove('active');
      saveToLocalStorage(dataArray);
      todoContent[i].blur();
    }
  }));
  todoLists.forEach((el) => el.addEventListener('click', () => {
    dragIcon.forEach((drag) => drag.addEventListener('click', (e) => {
      e.stopPropagation();
    }));
  }));
};
export default editData;