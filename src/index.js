import './style.css';

const todoContainer = document.querySelector('.list-container');

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
  {
    description: 'todo 3',
    completed: false,
    index: 2,
  },
  {
    description: 'todo 4',
    completed: false,
    index: 3,
  },
];

window.onload = () => {
  todoContainer.innerHTML = myTodo.map((todos) => `<li class="list"><input type="checkbox"/><span class="todo-content">${todos.description} ${todos.completed} ${todos.index}</span><span class="icon">&#8230;</span></li>`).join('');
};