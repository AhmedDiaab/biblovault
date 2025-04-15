'use strict';

export class User {
    constructor(email, password, role, records = []) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.records = records;
    }
    Records() {
        console.log(this.records);
    }
}