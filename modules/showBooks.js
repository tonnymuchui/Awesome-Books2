import BookObject from './BookObject.js';

export default class showBooks {
  static displayBooks() {
    const books = BookObject.getBooks();

    books.forEach((book) => showBooks.addToBooks(book));
  }

  static addToBooks(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title} <b>by</b></td>
        <td>${book.author}</td>
        <td><button class="delete">Remove book</button></td>
      `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}