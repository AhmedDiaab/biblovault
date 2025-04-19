'use strict';

export class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.role = null;
        this.records = [];
    }
    Records() {
        console.log("User Records:", this.records);
    }
}
export const currentUser = new User();