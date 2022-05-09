import Book from './book.js';

export default (id, title, author) => {
  const bookList = document.querySelector('#books-list');
  bookList.classList.add('booklist-border');
  const li = document.createElement('li');
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';

  li.innerHTML = `<div class= "book-info">
    <p>"${title}"</p>
    <span>by</span>
    <p>${author}</p>
    </div>
    `;
  li.appendChild(removeButton);
  bookList.appendChild(li);

  removeButton.addEventListener('click', () => {
    const book = new Book(id, title, author);
    id = removeButton.id;
    book.removeBook();
    if (li.nextElementSibling === null && li.previousElementSibling === null) {
      li.remove();
      bookList.classList.remove('booklist-border');
    } else {
      li.remove();
      bookList.classList.add('booklist-border');
    }
  });
};