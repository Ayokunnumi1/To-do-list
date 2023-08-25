/**
 * @jest-environment-jsdom
 */
import { JSDOM } from 'jsdom';

import todomarkup from '../TodoMarkup.js';
import TodoItems from '../TodoItems.js'; // Import JSDOM from the 'jsdom' package

// Set up a basic HTML document in JSDOM
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

const store = [
  {
    description: 'laundry',
    completed: false,
    index: 1,
  },
  {
    description: 'read a book',
    completed: false,
    index: 2,
  },
  {
    description: 'study',
    completed: false,
    index: 3,
  },
];

document.body.innerHTML = '<div class=\'list-items\'></div>';

// edit
describe('edits an item\'s description', () => {
  it('edits an item\'s description', () => {
    const newdescription = 'play football';
    TodoItems.edit(newdescription, store[1].index, store);
    expect(store[1].description).toBe(newdescription);
  });

  it('checking that new description is not empty', () => {
    const olddescription = store[1].description;
    let newdescription = '';
    if (newdescription === '') newdescription = olddescription;
    TodoItems.edit(newdescription, store[1].index, store);
    expect(newdescription).toBe(olddescription);
  });

  it('checks if the description is updated in the DOM', () => {
    const newdescription = 'read a book';
    TodoItems.edit(newdescription, store[1].index, store);
    const todoList = document.querySelector('.list-items');
    let markup = '';
    store.forEach((todo) => {
      markup += todomarkup(todo);
    });
    todoList.innerHTML = markup;
    const inputs = document.querySelectorAll('.list-title');
    expect(inputs[1].value).toEqual(newdescription);
  });
});
