'use strict';

export class ListBooks {
    constructor(currentUser,bookList){
        this.currentUser=currentUser;
        this.bookList=bookList;
    }
    listBooks(sortValue = "name") {
        if(this.currentUser!=null){
            const sortedBooks = [...this.bookList];

            switch (sortValue.toLowerCase()) {
                case "name":
                    sortedBooks.sort((a, b) => a.name.localeCompare(b.name));
                    this.currentUser.records.push("Listed a book")
                    break;
                case "date":
                    sortedBooks.sort((a, b) => new Date(a.date) - new Date(b.date));
                    this.currentUser.records.push("Listed a book")
                    break;
                case "writer":
                    sortedBooks.sort((a, b) => a.writer.localeCompare(b.writer));
                    this.currentUser.records.push("Listed a book")
                    break;
                default:
                    console.warn(`Unknown sort value: ${sortValue}`);
                    return;
            }
            console.log(`Books sorted by ${sortValue}:`);
            console.table(sortedBooks);
        }else{
        console.log("You need to log in first");
    }
}
}
