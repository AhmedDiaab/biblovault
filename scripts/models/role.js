export class Role {
  constructor(name) {
    this.name = name;
    this.permissions = new Set();
  }

  updatePermissions(...permissions) {
    for (let permission in permissions) {
      this.permissions.add(permission);
    }
  }
}
