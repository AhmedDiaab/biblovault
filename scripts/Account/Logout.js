'use strict';

import { currentUser, User } from './User.js';

export class Logout {
    logout(user) {
        if (currentUser === user) {
            Object.assign(currentUser, null); 
            console.log('Logout successful.');
        } else {
            console.log('No user is currently logged in.');
        }
    }
}