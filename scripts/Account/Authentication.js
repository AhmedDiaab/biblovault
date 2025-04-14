'use strict';
export class Authentication {
    authenticate(user) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(user.email)) {
            console.log("Email is valid.");
            return true;
        } else {
            console.log("Invalid email format.");
            return false;
        }
    }
}
