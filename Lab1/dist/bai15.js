"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor(books, users) {
        this.books = books;
        this.users = users;
    }
    addBooks(books) {
        this.books.push(...books);
        console.log("Added books into Library.");
    }
}
exports.Library = Library;
