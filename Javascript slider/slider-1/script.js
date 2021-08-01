let slider = document.querySelector('.slider');
let slide = document.querySelectorAll('.slide');
let next = document.querySelector('.right');
let prev = document.querySelector('.left');

var index = 0;
var Lenght = slide.length;
var persent = Math.round(100 / Lenght);

slider.style.width = `${Lenght * 100}%`;
let dots = document.querySelector('.dots');
let creatDots = () => {
  slide.forEach((_, i) => {
    dots.insertAdjacentHTML(
      'beforeend',
      `<li class="controler-dot" data-dot="${i}">
        </li>`
    );
  });
};
creatDots();
function activeDotOne() {
  let activeDot = dots.children[0];
  activeDot.classList.add('active');
}
activeDotOne();

function setIndex(section) {
  slider.style.transform = 'translate(' + section * -persent + '%)';
}
function removeSlide() {
  document.querySelectorAll('.dots .controler-dot').forEach(function (i) {
    i.classList.remove('active');
  });
}

document
  .querySelectorAll('.dots .controler-dot')
  .forEach(function (indecator, i) {
    indecator.addEventListener('click', function () {
      index = i;
      removeSlide();
      indecator.classList.add('active');
      setIndex(index);
    });
  });

next.addEventListener('click', function () {
  index = index < Lenght - 1 ? index + 1 : Lenght - 1;
  removeSlide();
  dots.children[index].classList.add('active');
  setIndex(index);
});
prev.addEventListener('click', function () {
  index = index > 0 ? index - 1 : 0;
  removeSlide();
  dots.children[index].classList.add('active');
  setIndex(index);
});
