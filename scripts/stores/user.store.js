export class UserStore {
    static #users;
    constructor() {
        UserStore.#users = new Set();
    }

    static add(...users) {
        for(let user of users) {
            this.#users.add(user);
        }
    }

    static findOne(email) {
        return [...this.#users].find((user) => user.email === email);
    }
}