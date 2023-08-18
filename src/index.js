import './style.css';

const listItemDisplayed = document.querySelector('.list-item-displayed');
const text = document.querySelector('#text');
const formContainer = document.querySelector('#form-container');
const verticalDotsDiv = document.querySelector('.fa-solid fa-ellipsis-vertical');

function getFromLocalStorage() {
  const getToDoData = localStorage.getItem('todoArray');
  if (getToDoData) {
    return JSON.parse(getToDoData);
  }
  return [];
}

let toDoArray = getFromLocalStorage();
let currentIndex = 0;

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
    currentIndex++;
  }
  text.value = '';
}

function displayToDoList() {
  listItemDisplayed.innerHTML = '';
  const element = toDoArray.map((toDo, index) => {
    const li = `<li class="list-item-container">
                <div class="list-item">
                    <input type="checkBox" name="checkBox" value="checkBox">
                    <p class="check-box-text">${toDo.description}</p>
                </div>
                <div class="vertical-dots-div">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </li>`;
    return li;
  });

  listItemDisplayed.insertAdjacentHTML('beforeend', element.join(''));
}

formContainer.addEventListener('submit', (event) => {
  event.preventDefault();
  getUserInput();
  setToLocalStorage();
  displayToDoList();
});

// verticalDotsDiv.addEventListener('click', () => {
//   toDoArray = toDoArray.filter((todoArr) => (todoArr.index !== currentIndex))
//     .map((toDoArr, id) => {
//       toDoArr.index = id + 1;
//       return toDoArr;
//     });
//   setToLocalStorage();
//   displayToDoList();
// });

// window.addEventListener('DOMContentLoaded', displayToDoList);