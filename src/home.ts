import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 400,
  spaceBetween: 100,
});
const controles = document.querySelector('.swiper').swiper;

$('#siguiente').click(function () {
  controles.slideNext();
});

$('#anterior').click(function () {
  controles.slidePrev();
});

//animación del contador que usa https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js y https://cdn.jsdelivr.net/npm/jquery.counterup@2.1.0/jquery.counterup.min.js

jQuery(document).ready(function ($) {
  $('.counterup').counterUp({
    time: 1500, // the speed time in ms
  });
});
