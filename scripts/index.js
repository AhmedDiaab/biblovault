'use strict';
import { Login } from "./Account/Login.Js";
import { Logout } from "./Account/Logout.Js";
import { User } from "./Account/User.Js";

const testUser = new User('john@admin.com', 'securePass');
const loginManager = new Login();
const logoutManager = new Logout();

loginManager.login(testUser); 



