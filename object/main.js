var obj = {
  name: 'Emet',
  Develoepr: 'opp',
  age: 20,
  pro: {
    1: 'PHP',
    2: 'Java',
  },
};
result = JSON.stringify(obj);
console.log(result);
console.log(JSON.parse(result));

for (let abs in obj) {
  console.log(abs);
}
