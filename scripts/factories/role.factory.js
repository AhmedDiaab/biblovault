import { Permission } from "../models/permission";
import { Role } from "../models/role";

export class RoleFactory {
    static generateAdminRole() {
        const role = new Role('admin');
        role.updatePermissions([
            new Permission('read', 'book'),
            new Permission('update', 'book'),
            new Permission('delete', 'book'),
            new Permission('create', 'book'),
            new Permission('list', 'book')
        ]);
        return role;
    }

    static generateUserRole() {
        const role = new Role('user');
        role.updatePermissions([
            new Permission('read', 'book'),
            new Permission('list', 'book')
        ]);
        return role;
    }
}