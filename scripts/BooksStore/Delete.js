'use strict';
import { Books } from './Books.js';
import { currentUser, User } from '../Account/User.js';

export class Delete {
    delete(book) {
        const bookList = Books.getBookList();

        if (currentUser === null) {
            console.log("You need to log in first");
            return;
        }
        if (currentUser.role !== 'A') {
            console.log("You don't have permission");
            return;
        }
        const index = bookList.findIndex(b => b.title === book.title);
        if (index <= -1) {
            console.log(`Book not found.`);
            return;  
        }
        bookList.splice(index-1, 1);
        currentUser.records.push("Deleted a book");
    }
}