import createData from './createData.js';
import removeData from './removeData.js';
import editData from './editData.js';
// import { before } from 'lodash';

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
    expect(JSON.parse(window.localStorage.getItem('todoList'))).toEqual([data]);
    editData(JSON.parse(window.localStorage.getItem('todoList')));

    const todoContent = document.createElement('input');
    todoContent.setAttribute('class', 'todoInput');
    todoContent.value = 'Muhammed';
    document.body.appendChild(todoContent);
    data.description = todoContent.value;
    expect(JSON.parse(window.localStorage.getItem('todoList'))).toEqual([{ description: todoContent.value, completed: false, index: 1 }]);
  });
});
