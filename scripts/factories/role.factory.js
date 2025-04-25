import { Permission } from "../models/permission";
import { Role } from "../models/role";

export class RoleFactory {
    static generateAdminRole() {
        const role = new Role('admin');
        role.updatePermissions([
            new Permission('read'),
            new Permission('update'),
            new Permission('delete'),
            new Permission('create'),
            new Permission('list')
        ]);
        return role;
    }

    static generateUserRole() {
        const role = new Role('user');
        role.updatePermissions([
            new Permission('read'),
            new Permission('list')
        ]);
        return role;
    }
}