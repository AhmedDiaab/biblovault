'use strict';
import { ManageBooks } from "./ManageBooks.js";
import { SearchBooks } from "./SearchBooks.js";
import { ListBooks } from "./ListBooks.js";

export class Books {
    static bookList = [];

    constructor() {
        this.manageBooks = new ManageBooks();
        this.searchBooks = new SearchBooks();
        this.listBooks = new ListBooks();
    }

    static getBookList() {
        return this.bookList;
    }
}