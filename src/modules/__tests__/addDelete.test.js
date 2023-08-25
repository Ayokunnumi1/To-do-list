/**
 * @jest-environment-jsdom
 */
import { JSDOM } from 'jsdom';

import todomarkup from '../TodoMarkup.js';
import TodoItems from '../TodoItems.js'; // Import JSDOM from the 'jsdom' package

// Set up a basic HTML document in JSDOM
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;

// Create a mock implementation of localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Mock the global localStorage object with the mock implementation
global.localStorage = localStorageMock;

const store = [{
  description: 'laundry',
  completed: false,
  index: 1,
}];

document.body.innerHTML = '<div class=\'list-items\'></div>';

// add
describe('add a new todoitem', () => {
  it('adds a new object to the store', () => {
    const number = store.length;
    TodoItems.addtodo({
      description: 'read a book',
      completed: false,
      index: 2,
    }, store);
    expect(store.length).toBe(number + 1);
  });

  it('adds a node to the DOM', () => {
    const todoList = document.querySelector('.list-items');
    let markup = '';
    store.forEach((todo) => {
      markup += todomarkup(todo);
    });
    todoList.innerHTML = markup;
    expect(markup).toEqual(document.body.children[0].innerHTML);
  });

  it('checks for a truthy value', () => {
    expect(TodoItems.addtodo({
      description: 'wash the dishes',
      completed: false,
      index: 3,
    }, store)).toBeTruthy();
  });
});