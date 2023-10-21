function setUserName(username) {
  this.username = username;
  console.log("called");
}
// first function doent use own this they use anothre function this

function createrUser(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

// also create methode like we create in myClass file

const chai = new createrUser("chai", "chai@f.com", "123");
console.log(chai);

const ram = new createrUser("ram", "ram@g.com", "1234");
console.log(ram);
