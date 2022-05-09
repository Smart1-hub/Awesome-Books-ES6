import ErrorMsg from './errorMessage.js';

let books = JSON.parse(localStorage.getItem('books'));

export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBooks() {
    const { id, title, author } = this;
    const object = { id, title, author };
    books = JSON.parse(localStorage.getItem('books'));
    if (title === '' || author === '') {
      ErrorMsg('Kindly fill the fields');
    } else if (books !== null) {
      books.push(object);
      localStorage.setItem('books', JSON.stringify(books));
      books = JSON.parse(localStorage.getItem('books'));
      document.getElementById('bookTitle').value = '';
      document.getElementById('bookAuthor').value = '';
    } else {
      books = [];
      books.push(object);
      localStorage.setItem('books', JSON.stringify(books));
      books = JSON.parse(localStorage.getItem('books'));
      document.getElementById('bookTitle').value = '';
      document.getElementById('bookAuthor').value = '';
    }
  }

  removeBook() {
    const { id } = this;
    books = books.filter((book) => {
      if (book.id !== id) {
        return true;
      }
      return false;
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}