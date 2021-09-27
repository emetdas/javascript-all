let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];
let num = [...num1, ...num2];
let array = num.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(array);
