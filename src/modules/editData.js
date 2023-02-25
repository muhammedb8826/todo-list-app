import saveToLocalStorage from './saveToDb.js';

const editData = (dataArray) => {
  const todoLists = document.querySelectorAll('.list');
  const todoContent = document.querySelectorAll('.todo-content');
  const dragIcon = document.querySelectorAll('.drag');
  const trashIcon = document.querySelectorAll('.trash');
  for (let i = 0; i < todoLists.length; i += 1) {
    todoLists[i].addEventListener('click', () => {
      todoContent[i].focus();
      todoLists[i].classList.add('active');
      trashIcon[i].classList.add('active');
      dragIcon[i].style.display = 'none';
      todoContent[i].addEventListener('mouseover', () => {
        trashIcon[i].classList.add('active');
        dragIcon[i].style.display = 'none';
      });

      todoContent[i].addEventListener('focusout', () => {
        dataArray[i].description = todoContent[i].value;
        trashIcon[i].classList.remove('active');
        todoLists[i].classList.remove('active');
        dragIcon[i].style.display = 'block';
        saveToLocalStorage(dataArray);
      });
      todoContent[i].addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          dataArray[i].description = todoContent[i].value;
          trashIcon[i].classList.remove('active');
          todoLists[i].classList.remove('active');
          dragIcon[i].style.display = 'block';
          saveToLocalStorage(dataArray);
          todoContent[i].blur();
        }
      });
    });
  }
};
export default editData;