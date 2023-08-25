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