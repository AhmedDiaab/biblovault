'use strict';
export class SearchBooks{
        constructor(currentUser,bookList){
            this.currentUser=currentUser;
            this.bookList=bookList;
        }
        searchBooks(query) {
            if(this.currentUser!=null){
                const lowerQuery = query.toLowerCase();
                const results = this.bookList.filter(book =>
                    book.name.toLowerCase().includes(lowerQuery) ||
                    book.writer.toLowerCase().includes(lowerQuery)
                );
                if (results.length > 0) {
                    console.log(`Search results for "${query}":`);
                    console.table(results);
                    this.currentUser.records.push("Searched a book")
                } else {
                    console.log(`No books found for "${query}".`);
                }
            }else{
                console.log("You need to log in first");
            }      
        }
}