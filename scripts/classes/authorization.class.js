export class Authorization {
    static canAccess(user, requiredPermission) {
        const foundPermission = user.role.permissions.find(p => p === requiredPermission);
        
        if(!foundPermission) {
            throw new Error('Unauthorized');
        }
        return true;
    }
}