import { UserStore } from "../stores/user.store";

export class Authentication {
    static #isLoggedIn;
    static #user;

    constructor() {
        Authentication.#isLoggedIn = false;
        Authentication.#user = null;
    }

    static login(email, password) {
        const user = this.#isValidCredentials(email, password);
        if(!user) {
            throw new Error('Invalid User Credentials');
        }
        this.#user = user;
        return user;
    }


    static #isValidCredentials(email, password) {
        const user = UserStore.findOne(email);
        return user.password === password ? user : null;
    }

    static isLoggedIn() {
        return this.#isLoggedIn;
    }

    static get user() {
        const user = this.#user;
        delete user.password;
        return user;
    }

}