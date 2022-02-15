let slider = document.querySelector('.slider');
let slide = document.querySelectorAll('.slide');
let next = document.querySelector('.right');
let prev = document.querySelector('.left');
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
var index = 0;
var Lenght = slide.length;
slider.style.width = `${Lenght * 100}%`;
let sliderWidth = slide[0].getBoundingClientRect().width;
const dot = document.querySelectorAll('.controler-dot');
// create slider append and prepend slide
// slider.insertAdjacentHTML('afterbegin', slide[Lenght - 1].outerHTML);
// slider.insertAdjacentHTML('beforeend', slide[0].outerHTML);

function activeDotOne() {
  let activeDot = dots.children[0];
  activeDot.classList.add('active');
}
activeDotOne();

function removedot() {
  dot.forEach((ac) => {
    ac.classList.remove('active');
  });
}
function activeDot() {
  dot[index].classList.add('active');
}
next.addEventListener('click', () => {
  slider.style.transition = 'all 0.5s ease-in-out';
  index++;
  slider.style.transform = `translateX(${-sliderWidth * index}px)`;
  removedot();
  if (index > Lenght - 1) {
    setTimeout(() => {
      index = 0;
      slider.style.transform = `translateX(0px)`;
      activeDot();
      slider.style.transition = 'none';
    }, 300);
  } else {
    activeDot();
  }
});
prev.addEventListener('click', () => {
  slider.style.transition = 'all 0.5s ease-in-out';
  index--;
  slider.style.transform = `translateX(${-sliderWidth * index}px)`;
  removedot();
  if (index < 0) {
    setTimeout(() => {
      index = Lenght - 1;
      slider.style.transform = `translateX(${-sliderWidth * index}px)`;
      activeDot();
      slider.style.transition = 'none';
    }, 300);
  } else {
    activeDot();
  }
});

dot.forEach((dotone, i) => {
  dotone.addEventListener('click', () => {
    dot.forEach((dotremove) => dotremove.classList.remove('active'));
    index = i;
    dotone.classList.add('active');
    slider.style.transform = `translateX(${-sliderWidth * index}px)`;
  });
});
// function setIndex(section) {
//   document.querySelectorAll('.dots .controler-dot').forEach(function (i) {
//     i.classList.remove('active');
//   });
//   slider.style.transform = 'translate(' + section * -persent + '%)';
// }
// document.querySelectorAll('.dots .controler-dot').forEach((indecator, i) => {
//   indecator.addEventListener('click', () => {
//     index = i;
//     setIndex(index);
//     indecator.classList.add('active');
//   });
// });
// next.addEventListener('click', () => {
//   index = index < Lenght - 1 ? index + 1 : Lenght - 1;
//   setIndex(index);
//   dots.children[index].classList.add('active');
// });
// prev.addEventListener('click', () => {
//   index = index > 0 ? index - 1 : 0;
//   setIndex(index);
//   dots.children[index].classList.add('active');
// });