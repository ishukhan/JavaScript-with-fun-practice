class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`UserName: ${this.username}`);
  }

  static createId() {
    return "123";
  }
}

const chai = new User("chai", "chai@gmial.com", "123");
chai.logMe();
// console.log(chai.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const Iphone = new Teacher("iphone", "i@phone.com");
Iphone.logMe();
console.log(Iphone.createId());
