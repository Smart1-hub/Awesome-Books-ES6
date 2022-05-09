import { DateTime } from './luxon.js';
import Book from './modules/book.js';
import displayBooks from './modules/displayBooks.js';

const addButton = document.querySelector('#add-book');
const bookList = document.querySelector('#books-list');

if (bookList !== null) {
  bookList.classList.add('list-border');
} else {
  bookList.classList.remove('list-border');
}

const books = JSON.parse(localStorage.getItem('books'));
if (books !== null) {
  books.forEach((book) => {
    displayBooks(book.id, book.title, book.author);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  addButton.addEventListener('click', (n) => {
    n.preventDefault();
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const id = Date.now();
    const book = new Book(id, title, author);
    book.addBooks();
    if (title && author) {
      displayBooks(book.id, book.title, book.author);
    }
  });
});

const date = document.getElementById('date');
const now = DateTime.now();
date.innerText = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

const listBooks = document.getElementById('listBooks');
const addBook = document.getElementById('addBook');
const contactUs = document.getElementById('contactInfo');

listBooks.addEventListener('click', () => {
  listBooks.classList.add('active');
  addBook.classList.remove('active');
  contactUs.classList.remove('active');
  document.getElementById('bookList-container').classList.remove('hide');
  document.getElementById('addBook-container').classList.add('hide');
  document.getElementById('contactUs-container').classList.add('hide');
});

addBook.addEventListener('click', () => {
  listBooks.classList.remove('active');
  addBook.classList.add('active');
  contactUs.classList.remove('active');
  document.getElementById('addBook-container').classList.remove('hide');
  document.getElementById('bookList-container').classList.add('hide');
  document.getElementById('contactUs-container').classList.add('hide');
});

contactUs.addEventListener('click', () => {
  listBooks.classList.remove('active');
  addBook.classList.remove('active');
  contactUs.classList.add('active');
  document.getElementById('contactUs-container').classList.remove('hide');
  document.getElementById('bookList-container').classList.add('hide');
  document.getElementById('addBook-container').classList.add('hide');
});
