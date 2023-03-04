import createData from './createData.js';
import removeData from './removeData.js';
import editData from './editData.js';
import todoStatus from './status.js';

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
    const input = document.createElement('input');
    input.setAttribute('id', 'todoInput');
    input.value = 'Microverse';
    document.body.appendChild(input);
    const data = { description: input.value, completed: false, index: 1 };
    createData([]);
    todoStatus(JSON.parse(window.localStorage.getItem('todoList')));
    const todoStatus = document.createElement('checkbox');
    todoStatus.setAttribute('class', 'todo-status');
    todoStatus.checked = true;
    document.body.appendChild(todoStatus);
    data.description = todoStatus.completed;
    window.localStorage.setItem('todoList', JSON.stringify([{ description: input.value, completed: todoStatus.completed, index: 1 }]));
    expect(JSON.parse(window.localStorage.getItem('todoList'))).toEqual([data]);
  });
});
