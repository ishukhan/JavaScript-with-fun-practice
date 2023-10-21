class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`UserName is:  ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new Course add by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@gmial.com", "123");

chai.logMe();
chai.addCourse();

const masalaChai = new User("masalaChai", "masalaChai@gmail.com", "123");

// masalaChai doesnt access addCourse functinon because this is not user class
// masalaChai.addCourse();
masalaChai.logMe();

console.log(chai == masalaChai); //false

// console.log(chai === Teacher); //they instanceOf chai
console.log(chai instanceof Teacher); //true
