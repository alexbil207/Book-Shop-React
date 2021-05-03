'use strict';
import { storageService } from './storage-service.js';
import { utilService } from './util-service.js';

export const bookService = {
    query,
    getBookById,
    createReview
}
const KEY = 'books';
var gBooks = [];


function query(filterBy) {
    let books;
    if (filterBy) {
        if (gBooks.length) {
            books = getfilterBy(filterBy);
            return Promise.resolve(books);
        }
        return Promise.resolve(() => {
            _loadBooks()
            books = getfilterBy(filterBy)
            return books;
        });
    } else if (gBooks.length) {
        console.log(gBooks)
        return Promise.resolve(gBooks);
    }
    return Promise.resolve(_loadBooks());
}



function getfilterBy(filterBy) {
    if (filterBy.price) {
        switch (filterBy.price) {
            case '20':
                return gBooks.filter(book => book.listPrice.amount < 20);
            case '50':
                return gBooks.filter(book => book.listPrice.amount < 50 && book.listPrice.amount > 20);
            case '100':
                return gBooks.filter(book => book.listPrice.amount < 100 && book.listPrice.amount > 50);
            case '101':
                return gBooks.filter(book => book.listPrice.amount > 100);
            case 'all':
                return gBooks
        }
    }
    return gBooks.filter(book => book.title.includes(filterBy.bookName));
}

function _loadBooks() {
    return axios.get('./services/books.json').then(res => {
        gBooks = res.data.slice();
        _saveBooksToStorage();
        return Promise.resolve(gBooks);
    })
}

function getBookById(bookId) {
    const books = storageService.loadFromStorage(KEY);
    return Promise.resolve(books.find(book => book.id === bookId)
    );
}


function _saveBooksToStorage() {
    storageService.saveToStorage(KEY, gBooks);
}

function createReview(review, id) {
    let bookIdx = gBooks.findIndex(book => book.id === id)
    if (!gBooks[bookIdx]['reviews']) gBooks[bookIdx]['reviews'] = [];
    gBooks[bookIdx]['reviews'].push(_createReview(review))
    _saveBooksToStorage();
}

function _createReview(review) {
    const { fullName, text } = review;
    let date = `${new Date().toLocaleString()}`
    return {
        id: utilService.makeId(),
        fullName,
        date,
        text,
    }
}