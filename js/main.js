const swiperTop = new Swiper('.top-swipper', {
  // loop: true,

  navigation: {
    nextEl: '.top-slide__button-next',
    prevEl: '.top-slide__button-prev',
  },
});

const swiperMidle = new Swiper('.swiper-midle', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: '.midle-slide__button-next',
    prevEl: '.midle-slide__button-prev',
  },
});

sliderWidth = document.querySelector(
  '.swiper-midle__wrapper .swiper-slide'
).offsetWidth;
console.log(sliderWidth);

midleBtn = document.querySelector('.midle-slide__btn');

midleBtn.style.width = sliderWidth + 'px';

// accordion

document.querySelectorAll('.accordion__trigger').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordion__item--active');
  });
});

const openPopupButton = document.getElementById('openPopupButton');
// const closePopupButton = document.getElementById('closePopupButton');
const videoPopup = document.getElementById('videoPopup');
const videoBox = document.querySelector(".video__box")

openPopupButton.addEventListener('click', () => {
  videoPopup.style.display = 'flex';
  videoBox.style.display = 'none';

});

// closePopupButton.addEventListener('click', () => {
//   videoPopup.style.display = 'none';
// });
