'use strict';
import { Login } from "./Account/Login.Js";
import { Logout } from "./Account/Logout.Js";
import { User } from "./Account/User.Js";
import { Book } from "./BooksStore/Book.js";
import { Books } from "./BooksStore/Books.js";

const testUser = new User('john@admin.com', 'securePass');
const loginManager = new Login();
const logoutManager = new Logout();

loginManager.login(testUser); 

const book= new Book("Programming","bhmed Elkholy","20-9-2012",testUser);
const book1= new Book("Afnan","Ali mohamed","15-9-2012",testUser);
const book2= new Book("ktab","Sobia","20-10-2012",testUser);
const book3= new Book("manan","Ali mohamed","15-9-2012",testUser);

const bookStore=new Books();
bookStore.setUser(testUser);

bookStore.manageBooks.add.add(book,book1,book2,book3);
bookStore.listBooks.listBooks("writer");
bookStore.searchBooks.searchBooks("Ali mohamed");
testUser.Records();
bookStore.manageBooks.edit.edit(book3,"title","banan");
bookStore.listBooks.listBooks("writer");
bookStore.manageBooks.delete.delete("banan");
bookStore.listBooks.listBooks("writer");
testUser.Records();
logoutManager.logout(testUser);
bookStore.setUser(null);
bookStore.listBooks.listBooks("writer");


const testUser1 = new User('john@user.com', 'securePass');
loginManager.login(testUser1); 
bookStore.setUser(testUser1);

bookStore.listBooks.listBooks("writer");
testUser1.Records();
bookStore.manageBooks.delete.delete("banan");
bookStore.manageBooks.edit.edit(book3,"title","banan");


