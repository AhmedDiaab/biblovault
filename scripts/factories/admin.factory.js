import { User } from "../models/user";
import { RoleFactory } from "./role.factory";

export class AdminFactory {
  static generate(email, password) {
    const adminRole = RoleFactory.generateAdminRole();
    return new User(email, password, adminRole);
  }
}
