'use strict';

export class User {
    static currentUser = null;

    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.role = null;
        this.records = [];
    }

    static getCurrentUser() {
        return this.currentUser;
    }

    static setCurrentUser(user) {
        this.currentUser = user;
    }

    static clearCurrentUser() {
        this.currentUser = null;
    }

    Records() {
        console.log("User Records:", this.records);
    }
}