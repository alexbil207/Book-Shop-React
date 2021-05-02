'use strict';
import { storageService } from './storage-service.js';

export const bookService = {
    query,
    removeBook,
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

function _getBook(bookId) {
    var books = getBooks();
    return books.find((book) => { return book.id === bookId })
}

function removeBook(bookId) {
    var books = storageService.loadFromStorage(KEY);
    var bookIdx = books.findIndex((book) => { return bookId === book.id })
    books.splice(bookIdx, 1)
    storageService.saveToStorage(KEY, books);
}

function _saveBooksToStorage() {
    storageService.saveToStorage(KEY, gBooks);
}
