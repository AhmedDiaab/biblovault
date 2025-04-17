'use strict';
import { ManageBooks } from "./ManageBooks.js";
import { SearchBooks } from "./SearchBooks.js";
import { ListBooks } from "./ListBooks.js";

export class Books {
    static bookList = [];

    constructor() {
        this.manageBooks = new ManageBooks(Books.bookList);
        this.searchBooks = new SearchBooks(Books.bookList);
        this.listBooks = new ListBooks(Books.bookList);
    }

    static getBookList() {
        return this.bookList;
    }
}