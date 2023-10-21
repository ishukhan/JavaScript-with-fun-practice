class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return `${this._password.toUpperCase()}ISHU`;
  }
  set password(vlaue) {
    this._password = vlaue;
  }
}

const hitesh = new User("h@gmail.com", "aaa");
console.log(hitesh.password);
