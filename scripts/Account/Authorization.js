'use strict';
export class Authorization {
    authorize(user) {
        if (user.email.includes('@admin')) {
            user.role = 'A'; 
        } else {
            user.role = 'U'; 
        }
    }
}
