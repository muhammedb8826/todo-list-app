import saveToLocalStorage from './saveToDb.js';

const editData = (dataArray) => {
  const todoLists = document.querySelectorAll('.list');
  const todoContent = document.querySelectorAll('.todo-content');
  const dragIcon = document.querySelectorAll('.drag-icon');
  const trashIcon = document.querySelectorAll('.trash-icon');

todoLists.forEach(list=>list.addEventListener('click',()=>{
  console.log('I am list item');
 
}))

todoContent.forEach((input,i)=>input.addEventListener('click',(e)=>{
  console.log('I am input');
  e.stopImmediatePropagation();
  todoLists[i].classList.add('active')
  trashIcon[i].classList.add('active');
  dragIcon[i].style.display = 'none';
  trashIcon.forEach((trash)=>trash.addEventListener('click',()=>{
    console.log('trash clicked');
  }))
}))

// todoContent.forEach((input,i)=>input.addEventListener('focusout',(e)=>{
//   e.stopImmediatePropagation();
//   trashIcon[i].classList.remove('active');
//   dragIcon[i].style.display = 'flex';
// }))

 
};
export default editData;