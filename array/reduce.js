let item = [1, 2, 10, 7,1000,20,10];

var items = item.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(items);
