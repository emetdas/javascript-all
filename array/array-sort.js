// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());
// console.log(fruits.reverse());

// var num = [10, 40, 90, 20];
// console.log(num.sort());
// console.log(num.reverse());
// console.log(
//   num.sort(function (a, b) {
//     return 0.5 - Math.random();
//   })
// );
// console.log(Math.max.apply(null,num));
// console.log(Math.min.apply(null,num));

// Sort Object

var number = [1, 2, 1, 4, 2, 4, 10, 5];
// array sort the number order
let cl = number.sort((n1, n2) => {
  return n1 - n2;
});
console.log(cl);
// array to all duplicate elements remove
let numbers = new Set(cl);
console.log(...numbers);
// set to number convert
console.log(Array.from(numbers));

var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

let furit = fruits.sort();
console.log(furit);
