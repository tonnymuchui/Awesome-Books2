import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';
import Book from '../modules/book.js';
import BookObject from '../modules/BookObject.js';
import showBooks from '../modules/showBooks.js';

const booktable = document.getElementById('table');
const formDiv = document.getElementById('form');
const formList = document.getElementById('li-list');
const listAdd = document.getElementById('li-add');
const contactDiv = document.getElementById('contact');
const liContact = document.getElementById('li-contact');

const ListPage = () => {
  booktable.style.display = 'block';
  formDiv.style.display = 'none';
  contactDiv.style.display = 'none';
};
const FormPage = () => {
  booktable.style.display = 'none';
  formDiv.style.display = 'block';
  contactDiv.style.display = 'none';
};

const ContactPage = () => {
  booktable.style.display = 'none';
  formDiv.style.display = 'none';
  contactDiv.style.display = 'block';
};

liContact.addEventListener('click', ContactPage);
listAdd.addEventListener('click', FormPage);
formList.addEventListener('click', ListPage);

const getTime = () => {
  const dt = DateTime.now();
  return dt.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
};

const time = document.getElementById('demo');
setInterval(() => {
  time.innerHTML = getTime();
}, 1000);

document.addEventListener('DOMContentLoaded', showBooks.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  showBooks.addToBooks(book);
  BookObject.addBook(book);
  showBooks.clearFields();
  e.preventDefault();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  showBooks.deleteBook(e.target);

  BookObject.removeBook(e.target.parentElement.previousElementSibling.textContent);
});
