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

// create slider append and prepend slide

function activeDotOne() {
  let activeDot = dots.children[0];
  activeDot.classList.add('active');
}
activeDotOne();

function setIndex(section) {
  document.querySelectorAll('.dots .controler-dot').forEach(function (i) {
    i.classList.remove('active');
  });
  slider.style.transform = 'translate(' + section * -persent + '%)';
}
document.querySelectorAll('.dots .controler-dot').forEach((indecator, i) => {
  indecator.addEventListener('click', () => {
    index = i;
    setIndex(index);
    indecator.classList.add('active');
  });
});

next.addEventListener('click', () => {
  index = index < Lenght - 1 ? index + 1 : Lenght - 1;
  setIndex(index);
  dots.children[index].classList.add('active');
});
prev.addEventListener('click', () => {
  index = index > 0 ? index - 1 : 0;
  setIndex(index);
  dots.children[index].classList.add('active');
});
