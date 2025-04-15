'use strict';
export class Add{
    constructor(currentUser,bookList){
        this.currentUser=currentUser;
        this.bookList=bookList;
    }
    add(...book) {
        if(this.currentUser!=null){
            console.log(this.currentUser.role)
            if(this.currentUser.role === 'A'){
                this.bookList.push(...book);
                this.currentUser.records.push("Added a book")
            }else{
                console.log("You don't have permission");
            }
        }else{
            console.log("You need to log in first");
        }      
    }
}