let slider = document.querySelector('.slider');
let slide = document.querySelectorAll('.slide');
let next = document.querySelector('.right');
let prev = document.querySelector('.left');

var index = 0;
var Lenght = slide.length;
var persent = Math.round(100 / Lenght);
// slide.forEach((e) => {
//   console.log(e.getBoundingClientRect().width);
// });
slider.style.width = `${Lenght * 100}%`;
next.addEventListener('click', function () {
  index = index < Lenght - 1 ? index + 1 : Lenght - 1;
  slider.style.transform = 'translate(' + index * -persent + '%)';
});
prev.addEventListener('click', function () {
  index = index > 0 ? index - 1 : 0;
  slider.style.transform = 'translate(' + index * -persent + '%)';
});
