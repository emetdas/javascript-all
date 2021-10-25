let array = [1, 2, 10, 7, 1000, 20, 10];

function data(value) {
  return value >= 2;
}
let value = array.every(data);
console.log(value);
