// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUser() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai.encryptPassword());
console.log(chai.changeUser());

// Behind the scene how they use without class methode

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

// create methode
user.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

// use case
const tea = new User("tea", "chai@gmail.com", "123");
console.log(tea.encryptPassword());
