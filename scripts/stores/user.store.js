export class UserStore {
    #users;
    constructor() {
        this.#users = new Set();
    }

    add(...users) {
        for(let user of users) {
            this.#users.add(user);
        }
    }

    findOne(email) {
        return [...this.#users].find((user) => user.email === email);
    }
}