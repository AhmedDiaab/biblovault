'use strict';
import { Add } from "./Add.js";
import { Edit } from "./Edit.js";
import { Delete } from "./Delete.js";
export class ManageBooks{
    constructor(){
        this.add=new Add();
        this.edit=new Edit();
        this.delete=new Delete();
    }
}