import saveToLocalStorage from './saveToDb.js';

const getElementIndex = (arrayData, index) => {
  const indexHolder = [];
  for (let i = 1; i <= index; i += 1) {
    indexHolder.push(i);
  }
  for (let i = 0; i < arrayData.length; i += 1) {
    arrayData[i].index = indexHolder[i];
  }
  saveToLocalStorage(arrayData);
};

export default getElementIndex;