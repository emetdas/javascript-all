let array = [1, 2, 10, 7, 1000, 20, 10];

function data(value) {
  return value >= 10;
}
let value = array.some(data);
console.log(value);
