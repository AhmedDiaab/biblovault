'use strict';
import { Books } from './Books.js';
import { User } from '../Account/User.js';

export class Edit {
    edit(book, field, newValue) {
        const currentUser = User.getCurrentUser();
        const bookList = Books.getBookList();

        if (currentUser === null) {
            console.log("You need to log in first");
            return;
        }
        if (currentUser.role !== 'A') {
            console.log("You don't have permission");
            return;
        }
        const targetBook = bookList.find(b => b.name === book.name);
        if (!targetBook) {
            console.log("Book not found");
            return;
        }
        switch (field.toLowerCase()) {
            case 'title':
                targetBook.name = newValue;
                break;
            case 'writer':
                targetBook.writer = newValue;
                break;
            default:
                console.log("Invalid field");
                return;
        }
        currentUser.records.push("Edited a book");
    }
}