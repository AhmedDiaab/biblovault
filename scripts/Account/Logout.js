'use strict';

import { User } from './User.js';

export class Logout {
    logout(user) {
        if (User.getCurrentUser() === user) {
            User.clearCurrentUser(); 
            console.log('Logout successful.');
        } else {
            console.log('No user is currently logged in.');
        }
    }
}
