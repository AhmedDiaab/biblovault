'use strict';

import { Authentication } from './Authentication.js';
import { Authorization } from './Authorization.js';

export class Login {
    constructor() {
        this.authenticate = new Authentication();
        this.authorize = new Authorization();
    }

    login(user) {
        if (this.authenticate.authenticate(user)) {
            this.authorize.authorize(user);
            console.log(`Login successful. Role assigned: ${user.role}`);
        } else {
            console.log('Authentication failed.');
        }
    }
}

