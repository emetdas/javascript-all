let sliderContainer = document.querySelector('.slider-container');
let slider = document.querySelectorAll('.slide');
let nextBtn = document.querySelector('.nextBtn');
let prevBtn = document.querySelector('.prevBtn');

let index = 0;
let sliderWidth = slider[0].clientWidth;
console.log(sliderWidth);
slider.forEach((s, i) => {
  s.style.transform = `translateX(${112 * i}rem)`;
  console.log(i);
});

let dots = document.querySelector('.dots');
let creatDots = () => {
  slider.forEach((_, i) => {
    dots.insertAdjacentHTML(
      'beforeend',
      `<span class="controler-dot" data-dot="${i}">
        </span>`
    );
  });
};
creatDots();

nextBtn.addEventListener('click', () => {
  index++;
  sliderContainer.style.transform = `translateX(${-sliderWidth * index}rem)`;
  if (index > slider.length - 1) {
    index = 0;
    sliderContainer.style.transform = `translateX(0rem)`;
  }
});
prevBtn.addEventListener('click', () => {
  index--;
  sliderContainer.style.transform = `translateX(${-sliderWidth * index}rem)`;
  if ((index = 0)) {
    index = index < slider.length - 1;
    sliderContainer.style.transform = `translateX(0rem)`;
  }
});
