import './style.css';

const todoContainer = document.querySelector('.todo-container');

const myTodo = [
  {
    description: 'todo 1',
    completed: false,
    index: 0,
  },
  {
    description: 'todo 2',
    completed: false,
    index: 1,
  },
];

window.onload = () => {
  todoContainer.innerHTML = myTodo.map((todos) => `<li>${todos.description} ${todos.completed} ${todos.index}</li>`).join('');
};