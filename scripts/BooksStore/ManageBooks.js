'use strict';
import { Add } from "./Add.js";
import { Edit } from "./Edit.js";
import { Delete } from "./Delete.js";
export class ManageBooks{
    constructor(currentUser,bookList){
        this.add=new Add(currentUser,bookList);
        this.edit=new Edit(currentUser,bookList);
        this.delete=new Delete(currentUser,bookList);
    }
}