export class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    setRole(role) {
        this.role = role;
    }
}