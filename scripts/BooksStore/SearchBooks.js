'use strict';
import { Books } from './Books.js';
import { currentUser, User } from '../Account/User.js';

export class SearchBooks {
    searchBooks(query) {
        const bookList = Books.getBookList();

        if (currentUser === null) {
            console.log("You need to log in first");
            return;
        }

        const lowerQuery = query.toLowerCase();
        const results = bookList.filter(book =>
            book.name.toLowerCase().includes(lowerQuery) ||
            book.writer.toLowerCase().includes(lowerQuery)
        );

        if (results.length <= 0) {
            console.log(`No books found for "${query}".`);
            return;  
        }
        
        console.log(`Search results for "${query}":`);
        console.table(results);
        currentUser.records.push("Searched a book");
    }
}