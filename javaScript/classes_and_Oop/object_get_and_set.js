const User = {
  _email: "ishu@gmail.com",
  _password: "123",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const chai = Object.create(User);
console.log(chai.email);
