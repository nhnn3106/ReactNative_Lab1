import { Book } from "./bai06";
import { User } from "./bai07";

export class Library {
    books: Book[];
    users: User[];
    constructor(books: Book[], users: User[]) {
        this.books = books
        this.users = users
    }
    addBooks(books: Book[]): void {
        this.books.push(...books);
        console.log("Added books into Library.")
    }
}