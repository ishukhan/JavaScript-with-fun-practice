// promise create

// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an Async task
//   // DB call, cryptography, network
//   setTimeout(function () {
//     // console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   // console.log("Promise is resolved");
// });

// without hold in variable

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log("Async task 2");
//     resolve();
//   }, 2000);
// }).then(() => {
//   //   console.log("Async 2 resolved");
// });

//Data consumption and value pass using promises.
//Basic Exmaple

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ userName: "chai", email: "chai@example.com" });
//   }, 1000);
// });

// // pass parameter in function
// promiseThree.then(function (user) {
//   // log the parameter
//   console.log(user);
// });

// promis four basic resolve and reject

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "ishu", password: 123 });
    } else {
      reject("ERROR: Somthing went worng");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.userName;
  }) //chaining multiple then
  .then(function (userName) {
    console.log(userName);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promis is either resolved or rejected");
  });

// promis five resolve using async await

const promiesFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "JS", password: 123 });
    } else {
      reject("ERROR: Somthing went worng !");
    }
  }, 1000);
});

async function consumePromisFive() {
  try {
    const response = await promiesFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromisFive();

// async function getallUser() {
//   try {
//     const response = await fetch("https://api.github.com/users/ishukhan");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E", error);
//   }
// }

// getallUser();

let url = fetch("https://api.github.com/users/ishukhan");
url
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
