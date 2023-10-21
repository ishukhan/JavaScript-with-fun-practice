function User(email, password) {
  this._email = email;
  this.password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
}

const ishu = new User("i@khan.com", "121");
console.log(ishu.email);
