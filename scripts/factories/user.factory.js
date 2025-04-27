import { User } from "../models/user";
import { RoleFactory } from "./role.factory";

export class UserFactory {
  static generate(type, email, password) {
    switch (type) {
      case "client":
        const userRole = RoleFactory.generateClientRole();
        return new User(email, password, userRole);
      case "admin":
        const adminRole = RoleFactory.generateAdminRole();
        return new User(email, password, adminRole);
      default:
        throw new Error("This Type is not supported");
    }
  }
}
