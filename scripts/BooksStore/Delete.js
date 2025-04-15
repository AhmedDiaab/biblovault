'use strict';
export class Delete{
    constructor(currentUser,bookList){
        this.currentUser=currentUser;
        this.bookList=bookList;
    }
    delete(book) {
        if(this.currentUser!=null){
            if(this.currentUser.role==='A'){
                const index = this.bookList.findIndex(b => b.title === book.title);
                if (index > -1) {
                    this.bookList.splice(index, 1);
                    console.log(`Book "${book.title}" deleted.`);
                    this.currentUser.records.push("Deleted a book")
                } else {
                    console.log(`Book "${book.title}" not found.`);
                }
            }else{
                console.log("You don't have permission");
            }
        }else{
            console.log("You need to log in first");
        }      
    }
}