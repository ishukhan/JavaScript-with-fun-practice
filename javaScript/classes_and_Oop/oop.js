const user = {
  username: "ishu",
  logcount: 8,
  signIn: true,

  getUserDetail: function () {
    // console.log("get user from database")
    // console.log(`UserName: ${this.username}`);
    // console.log(this); //current context
  },
};
// console.log(user.username);
// console.log(user.getUserDetail());

function users(username, password, isLoggedIn) {
  this.username = username;
  this.password = password;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}
// const userOne = users("ishu", 1000, true);
// const userTow = users("khan", 5464, false); //value overWright
// console.log(userOne);

// importance of new keyword
// whenever use new keyword they create empty object
// also called as instance

const userOne = new users("ishu", 1000, true);
// const userTow = new users("khan", 5464, false);
console.log(userOne.constructor);
// console.log(userTow);
