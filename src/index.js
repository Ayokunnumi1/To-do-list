import './style.css';

const listItemDisplayed = document.querySelector('.list-item-displayed');
const taskArray = [
  {
    description: 'Fix car',
    completed: true,
    index: 1,
  },
  {
    description: 'Wash Car',
    completed: true,
    index: 2,
  },
  {
    description: 'Clean the dining room',
    completed: false,
    index: 3,
  },
  {
    description: 'Arrange bedroom',
    completed: false,
    index: 4,
  },
];

const taskFunc = taskArray.map((task) => {
  const listItemContainer = document.createElement('li');
  listItemContainer.setAttribute('class', 'list-item-container');
  listItemDisplayed.appendChild(listItemContainer);

  const listItem = document.createElement('div');
  listItem.setAttribute('class', 'list-item');
  listItemContainer.appendChild(listItem);

  const checkBox = document.createElement('input');
  checkBox.type = 'checkBox';
  checkBox.name = 'checkBox';
  checkBox.value = 'checkBox';
  listItem.appendChild(checkBox);

  const checkBoxText = document.createElement('p');
  checkBoxText.setAttribute('class', 'check-box-text');
  checkBoxText.textContent = `${task.description}`;
  listItem.appendChild(checkBoxText);

  const verticalDotsDiv = document.createElement('div');
  verticalDotsDiv.setAttribute('class', 'vertical-dots-div');
  listItemContainer.appendChild(verticalDotsDiv);

  const verticalDotsIcon = document.createElement('i');
  verticalDotsIcon.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
  verticalDotsDiv.appendChild(verticalDotsIcon);
  return listItem;
});

window.addEventListener('DOMContentLoaded', taskFunc);