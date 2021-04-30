'use strict';
import { storageService } from './storage-service.js';

export const bookService = {
    query,
    removeBook,
    queryFilters

}
const KEY = 'books';
var gBooks = [];
let gFilers = [];



function query() {
    if (gBooks.length) return Promise.resolve(gBooks);
    queryFilters()
    return Promise.resolve(_loadBooks());
}


function queryFilters() {
    gBooks.map(book => {
        book.categories.forEach(category => {
            if (gFilers.includes(category)) return
            gFilers.push(category);
        });
    })
    return Promise.resolve(gFilers);
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