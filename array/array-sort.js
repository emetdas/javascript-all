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

var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  console.log(cars.sort(function(a, b){return a.year - b.year}));