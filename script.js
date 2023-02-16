'use strict';

const books = document.querySelector('.books');
const booksList = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const book1 = booksList[1];
const book2 = booksList[0];
const book3 = booksList[4];
const book4 = booksList[3];
const book5 = booksList[5];
const book6 = booksList[2];

books.append(book1, book2, book3, book4, book5, book6);
document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';
book3.querySelector('h2 a').innerHTML = 'Книга 3. this и <strong>Прототипы</strong> Объектов';
adv.remove();
book2.querySelectorAll('li')[3].after(book2.querySelectorAll('li')[6]);
book2.querySelectorAll('li')[4].after(book2.querySelectorAll('li')[8]);
book2.querySelectorAll('li')[9].after(book2.querySelectorAll('li')[2]);
book5.querySelectorAll('li')[1].after(book5.querySelectorAll('li')[9]);
book5.querySelectorAll('li')[5].after(book5.querySelectorAll('li')[3]);
book5.querySelectorAll('li')[8].after(book5.querySelectorAll('li')[6]);
book6.querySelectorAll('li')[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');