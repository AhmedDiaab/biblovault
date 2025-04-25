import { User } from "../models/user";
import { RoleFactory } from "./role.factory";

export class UserFactory {

    static generate(email, password) {
        const userRole = RoleFactory.generateUserRole();
        return new User(email, password, userRole);
    }
}