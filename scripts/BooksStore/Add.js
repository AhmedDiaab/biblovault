'use strict';
import { Books } from './Books.js';
import { User } from '../Account/User.js';

export class Add {
    add(...books) {
        const currentUser = User.getCurrentUser();
        const bookList = Books.getBookList();

        if (currentUser === null) {
            console.log("You need to log in first");
            return;
        }
        if (currentUser.role === 'A') {
            bookList.push(...books);
            currentUser.records.push("Added a book");
        } else {
            console.log("You don't have permission");
        }
    }
}