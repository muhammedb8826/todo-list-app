import readDataFromDb from './readData.js';
import saveToLocalStorage from './saveToDb.js';

const notify = () => {
  const dataFromDb = readDataFromDb();
  const notificationIcon = document.querySelector('.badge');
  const checkStatusInput = document.querySelectorAll('.todo-status');
  const todoContent = document.querySelectorAll('.todo-content');
  const filterednotification = dataFromDb.filter((data) => !data.completed);
  const check = dataFromDb.filter((data) => data.completed);
  for (let i = 0; i < check.length; i += 1) {
    if (check[i].completed) {
      checkStatusInput[i].checked = true;
      todoContent[i].classList.add('completed');
    }
    if (!check[i].completed) {
      checkStatusInput[i].checked = false;
      todoContent[i].classList.remove('completed');
    }
  }
  notificationIcon.innerHTML = filterednotification.length;
  saveToLocalStorage(dataFromDb);
};

export default notify;
