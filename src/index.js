import './style.css';
import templateMarkup from './markUp';

const listItemDisplayed = document.querySelector('.list-item-displayed');
const text = document.querySelector('#text');
const formContainer = document.querySelector('#form-container');
const verticalDotsDiv = document.querySelector('.fa-solid fa-ellipsis-vertical');

// function getFromLocalStorage() {
//   const toDoArray = localStorage.getItem('todoArray');
//   if (getToDoData) {
//     return JSON.parse(getToDoData);
//   }
//   return [];
// }

let toDoArray;
if (localStorage.length !== 0) {
  const b = JSON.parse(localStorage.getItem('todoArray'));
  toDoArray = b;
} else {
  toDoArray = [];
  localStorage.setItem('todoArray', JSON.stringify(toDoArray));
}

// const toDoArray = getFromLocalStorage();
// let currentIndex = 0;

function setToLocalStorage() {
  localStorage.setItem('todoArray', JSON.stringify(toDoArray));
}

function getUserInput() {
  const textInput = text.value.trim();
  if (textInput) {
    const userInput = {
      description: textInput,
      completed: false,
    };
    toDoArray.push(userInput);
    // eslint-disable-next-line no-plusplus
    // currentIndex++;
  }
  text.value = '';
}

function displayToDoList() {
  // listItemDisplayed.innerHTML = '';
  let markup = '';
  toDoArray.forEach((todo) => {
    const elemenT = templateMarkup(todo);
    markup += elemenT;
  });
  listItemDisplayed.innerHTML = markup;
  // const element = toDoArray.forEach((toDo) => {
  //   const li = templateMarkup(toDo);
  //   return li;
  // });

  // listItemDisplayed.insertAdjacentHTML('beforeend', element.join(''));
  // listItemDisplayed.innerHTML = element;
}

formContainer.addEventListener('submit', (event) => {
  event.preventDefault();
  getUserInput();
  setToLocalStorage();
  displayToDoList();
});

// window.addEventListener('DOMContentLoaded', displayToDoList);