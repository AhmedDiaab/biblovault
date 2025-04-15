'use strict';
import { ManageBooks } from "./ManageBooks.js";
import { SearchBooks } from "./SearchBooks.js";
import { ListBooks } from "./ListBooks.js";
export class Books{
    constructor(bookList=new Array()){
        this.bookList=bookList;
    }
    setUser(user) {
        this.currentUser = user;
        this.manageBooks= new ManageBooks(this.currentUser,this.bookList);
        this.listBooks=new ListBooks(this.currentUser,this.bookList);
        this.searchBooks=new SearchBooks(this.currentUser,this.bookList);
    }
}