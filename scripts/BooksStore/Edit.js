'use strict';
export class Edit{
    constructor(currentUser,bookList){
        this.currentUser=currentUser;
        this.bookList=bookList;
    }
    edit(book,word,newWord) {
        if(this.currentUser!=null){
            if(this.currentUser.role==='A'){    
                if(book.owner===this.currentUser){
                    if (word.toLowerCase()==='title'){
                        book.name=newWord;
                    }else if (word.toLowerCase()==='writer'){
                        book.writer=newWord;
                    }else{
                        book.date=newWord;
                    }
                    this.currentUser.records.push("Edited a book")
                }else{
                    console.log("You are not the owner");
                }
            }else{
                console.log("You don't have permission");
            }
        }else{
            console.log("You need to log in first");
        }     
    }
}