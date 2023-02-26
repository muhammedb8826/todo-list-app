import saveToLocalStorage from './saveToDb.js';
import show from './updateData.js';

const removeData = () => {
  const todoLists = document.querySelectorAll('.list');
  const trashIcon = document.querySelectorAll('.trash');

  todoLists.forEach((el) => el.addEventListener('click', () => {
  console.log('hello');
  }));


  todoLists.forEach((el) => el.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log(show.todoCollection);


    // trashIcon.forEach((tr, item) => tr.addEventListener('click', (e) => {
    //   e.stopPropagation();
    //   show.todoCollection = show.todoCollection.filter((todos, index) => item !== index);
    //   show.todoCollection = show.todoCollection.map(
    //     (todo, index) => ({ ...todo, index: index + 1 }),
    //   );
    //   saveToLocalStorage(show.todoCollection);
    // }));
  }));
};
removeData();
