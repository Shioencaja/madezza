import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
  },
});

const controles = document.querySelector('.swiper').swiper;

$('#siguiente').click(function () {
  controles.slideNext();
});

$('#anterior').click(function () {
  controles.slidePrev();
});
