export class User {
    constructor(email, password, role) {
        this.email = email;
        this.password = password;
    }

    setRole(role) {
        this.role = role;
    }
}