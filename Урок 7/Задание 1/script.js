'use strict';
let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    body = document.querySelectorAll('body'),
    adv = document.querySelectorAll('.adv'),
    sqrListElements = books[0].querySelectorAll('ul'),
    listElements2 = sqrListElements[0].querySelectorAll('li'),
    listElements5 = sqrListElements[5].querySelectorAll('li'),
    listElements6 = sqrListElements[2].querySelectorAll('li');

let getOrderOfBooks = function() {
        books[0].insertBefore(book[1], book[0]),
            books[0].insertBefore(book[4], book[3]),
            books[0].insertBefore(book[2], null);
    },
    changeBackgroundImageBody = function() {
        document.body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg);');
    },
    changeTitleBook3 = function() {
        book[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';
    },
    deleteAdv = function() {
        body[0].removeChild(adv[0]);
    },
    restoreOrderActsBook2 = function() {
        sqrListElements[0].insertBefore(listElements2[2], listElements2[10]),
            sqrListElements[0].insertBefore(listElements2[7], listElements2[9]),
            sqrListElements[0].insertBefore(listElements2[5], listElements2[7]),
            sqrListElements[0].insertBefore(listElements2[4], listElements2[5]);
    },
    restoreOrderActsBook5 = function() {
        sqrListElements[5].insertBefore(listElements5[8], listElements5[10]),
            sqrListElements[5].insertBefore(listElements5[5], listElements5[8]),
            sqrListElements[5].insertBefore(listElements5[7], listElements5[5]),
            sqrListElements[5].insertBefore(listElements5[6], listElements5[7]),
            sqrListElements[5].insertBefore(listElements5[2], listElements5[6]),
            sqrListElements[5].insertBefore(listElements5[4], listElements5[2]),
            sqrListElements[5].insertBefore(listElements5[3], listElements5[4]);
    },
    addActBook6 = function() {
        book[2].querySelector('li').textContent = 'Глава 8: За пределами ES6';
        sqrListElements[2].insertBefore(listElements6[0], listElements6[9]);
    };
getOrderOfBooks();
changeBackgroundImageBody();
changeTitleBook3();
deleteAdv();
restoreOrderActsBook2();
restoreOrderActsBook5();
addActBook6();