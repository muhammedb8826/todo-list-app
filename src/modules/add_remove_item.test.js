import createData from './createData.js';
import removeData from './removeData.js';
import editData from './editData.js';
import todoStatus from './status.js';
import clearCompleted from './clearCompleted.js';

describe('Testing add task', () => {
  afterEach(() => {
    document.body.innerHTML = '';
    window.localStorage.clear();
  });
  test('Should save to localstorage', () => {
    const input = document.createElement('input');
    input.setAttribute('id', 'todoInput');
    input.value = 'Microverse';
    document.body.appendChild(input);
    const data = { description: input.value, completed: false, index: 1 };
    createData([]);
    expect(JSON.parse(window.localStorage.getItem('todoList'))).toEqual([data]);
  });

  test('Should remove from array', () => {
    const input = document.createElement('input');
    input.setAttribute('id', 'todoInput');
    input.value = 'Microverse';
    document.body.appendChild(input);
    const data = { description: input.value, completed: false, index: 1 };
    createData([]);
    expect(JSON.parse(window.localStorage.getItem('todoList'))).toEqual([data]);
    removeData(JSON.parse(window.localStorage.getItem('todoList')), data.index - 1);

    expect(JSON.parse(window.localStorage.getItem('todoList'))).toEqual([]);
  });
});

describe('Testing editing data ', () => {
  afterEach(() => {
    document.body.innerHTML = '';
    window.localStorage.clear();
  });

  test('should update edited data', () => {
    const input = document.createElement('input');
    input.setAttribute('id', 'todoInput');
    input.value = 'Microverse';
    document.body.appendChild(input);
    const data = { description: input.value, completed: false, index: 1 };
    createData([]);
    editData(JSON.parse(window.localStorage.getItem('todoList')));
    const todoContent = document.createElement('input');
    todoContent.setAttribute('class', 'todoInput');
    todoContent.value = 'Muhammed';
    document.body.appendChild(todoContent);
    data.description = todoContent.value;
    window.localStorage.setItem('todoList', JSON.stringify([{ description: todoContent.value, completed: false, index: 1 }]));
    expect(JSON.parse(window.localStorage.getItem('todoList'))).toEqual([data]);
  });

  test('should update completed status', () => {
    document.body.innerHTML = `<section class="container">
   <div class="demo">
     <p class="demo-text">Today's To Do</p>
     <span class="refresh-icon">
       <i class='fa fa-refresh'></i>
       <span class="badge"></span>
     </span>
   </div>
   <div class="list-and-input-container">
     <div class="input-and-icon">
       <input
         type="text"
         placeholder="Add to your list..."
         id="todoInput"
         autofocus
       />
       <span class="icon"><i class='fa-solid fa-arrow-turn-down'></i></i></span>
     </div>
     <ul class="list-container">
     <li class="list">
        <input type="checkbox" class="todo-status"/>
        <input type="text" class="todo-content" value="Microverse"/>
        <button class="drag-icon">
        <i class='drag fa fa-ellipsis-v'></i>
        </button>
        <button class="trash-icon">
        <i class='trash fa-solid fa-trash-can'></i>
        </button>
    </li>
     </ul>
   </div>
   <button class="clear-completed">Clear all completed</button>
 </section>`;

    localStorage.setItem('todoList', JSON.stringify([{ description: 'Microverse', completed: false, index: 1 }]));

    todoStatus(JSON.parse(window.localStorage.getItem('todoList')));
    const checkboxStatus = document.querySelector('.todo-status');

    checkboxStatus.click();

    expect(JSON.parse(window.localStorage.getItem('todoList'))).toEqual([{ description: 'Microverse', completed: true, index: 1 }]);
  });

  test('Should clear completed', () => {
    document.body.innerHTML = `<section class="container">
   <div class="demo">
     <p class="demo-text">Today's To Do</p>
     <span class="refresh-icon">
       <i class='fa fa-refresh'></i>
       <span class="badge"></span>
     </span>
   </div>
   <div class="list-and-input-container">
     <div class="input-and-icon">
       <input
         type="text"
         placeholder="Add to your list..."
         id="todoInput"
         autofocus
       />
       <span class="icon"><i class='fa-solid fa-arrow-turn-down'></i></i></span>
     </div>
     <ul class="list-container">
     <li class="list">
        <input type="checkbox" class="todo-status"/>
        <input type="text" class="todo-content" value="Microverse"/>
        <button class="drag-icon">
        <i class='drag fa fa-ellipsis-v'></i>
        </button>
        <button class="trash-icon">
        <i class='trash fa-solid fa-trash-can'></i>
        </button>
    </li>
     </ul>
   </div>
   <button class="clear-completed">Clear all completed</button>
 </section>`;

    localStorage.setItem('todoList', JSON.stringify([{ description: 'Microverse', completed: true, index: 1 }]));
    clearCompleted(JSON.parse(localStorage.getItem('todoList')));
    expect(JSON.parse(localStorage.getItem('todoList'))).toEqual([]);
  });
});
