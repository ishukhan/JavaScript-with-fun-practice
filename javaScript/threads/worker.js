onmessage = function (message) {
  let num = 1e9;
  let sum = 0;
  for (let i = 1; i < num; i++) {
    sum += i;
  }

  console.log(sum);
};
