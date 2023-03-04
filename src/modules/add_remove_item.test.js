import createData from './createData.js';
import removeData from './removeData.js';

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
    const data = { description: 'Microverse', completed: false, index: 1 };
    createData([]);
    expect(JSON.parse(window.localStorage.getItem('todoList'))).toEqual([data]);
  });

  test('Should remove from array', () => {
    const input = document.createElement('input');
    input.setAttribute('id', 'todoInput');
    input.value = 'Microverse';
    document.body.appendChild(input);
    const data = { description: 'Microverse', completed: false, index: 1 };
    createData([]);
    expect(JSON.parse(window.localStorage.getItem('todoList'))).toEqual([data]);
    removeData(JSON.parse(window.localStorage.getItem('todoList')), data.index - 1);

    expect(JSON.parse(window.localStorage.getItem('todoList'))).toEqual([]);
  });
});
