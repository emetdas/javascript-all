let array = [1, 2, 10, 7, 1000, 20, 10];
let obj = {
  name: 'Emet Das',
  Positone: 'Web Developer',
  skills: ['Html5', 'Css3', 'Sass', 'JavaScript'],
};

// ForEach
// array.forEach((a, i) => {
//   console.log(a, i);
// });

// for of loop ittrate array
// for (const a,i of array) {
//   console.log(a,i);
// }

// for in loop ittrate object
for (const i in obj) {
  console.log(i);
}
