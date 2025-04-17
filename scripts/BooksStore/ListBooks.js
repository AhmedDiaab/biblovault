'use strict';
import { Books } from './Books.js';
import { User } from '../Account/User.js';

export class ListBooks {
    listBooks(sortValue = 'title') {
        const currentUser = User.getCurrentUser();
        const bookList = Books.getBookList();

        if (currentUser === null) {
            console.log("You need to log in first");
            return;
        }

        const sortedBooks = [...bookList];
        switch (sortValue.toLowerCase()) {
            case 'title':
                sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'writer':
                sortedBooks.sort((a, b) => a.writer.localeCompare(b.writer));
                break;
            case 'date':
                sortedBooks.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            default:
                console.warn(`Unknown sort value: ${sortValue}`);
                return;
        }

        console.log(`Books sorted by ${sortValue}:`);
        console.table(sortedBooks);
        currentUser.records.push("Listed books");
    }
}